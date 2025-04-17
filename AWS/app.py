from flask import Flask, render_template, request, redirect
import boto3
from botocore.exceptions import NoCredentialsError

app = Flask(__name__)

# تهيئة عميل S3 بدون مفاتيح (يستخدم IAM Role)
s3 = boto3.client('s3', region_name='us-east-1')
S3_BUCKET = 'files-bucket-project'  # اسم السلة

@app.route('/')
def index():
    try:
        # جلب قائمة الملفات من السلة
        objects = s3.list_objects_v2(Bucket=S3_BUCKET)
        files = [obj['Key'] for obj in objects.get('Contents', [])]
        return render_template('index.html', files=files)
    except NoCredentialsError:
        return "خطأ في الأذونات! تأكد من إرفاق دور IAM بمثيل EC2."

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return redirect('/')
    
    file = request.files['file']
    if file.filename == '':
        return redirect('/')
    
    try:
        # رفع الملف إلى S3
        s3.upload_fileobj(
            file,
            S3_BUCKET,
            file.filename,
            ExtraArgs={'ACL': 'private'}
        )
        
        # إنشاء رابط تحميل مؤقت (صالحة لمدة ساعة)
        download_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': S3_BUCKET, 'Key': file.filename},
            ExpiresIn=3600
        )
        
        return render_template('success.html', download_url=download_url)
    except NoCredentialsError:
        return "خطأ في الأذونات! تأكد من إرفاق دور IAM بمثيل EC2."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
