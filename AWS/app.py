from flask import Flask, render_template, request, redirect
import boto3
from botocore.exceptions import NoCredentialsError

app = Flask(__name__)
app.static_folder = 'static'

# AWS Configuration
S3_BUCKET = 'files-bucket-project'
s3 = boto3.client('s3', region_name='Europe (Paris) eu-west-3')

@app.route('/')
def index():
    try:
        # List files from S3 bucket
        objects = s3.list_objects_v2(Bucket=S3_BUCKET)
        files = [obj['Key'] for obj in objects.get('Contents', [])]
        return render_template('index.html', files=files)
    except NoCredentialsError:
        return "Permission Error! Ensure the IAM Role is attached to the EC2 instance."

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return redirect('/')
    
    file = request.files['file']
    if file.filename == '':
        return redirect('/')
    
    try:
        # Upload file to S3
        s3.upload_fileobj(
            file,
            S3_BUCKET,
            file.filename,
            ExtraArgs={'ACL': 'private'}
        )
        
        # Generate pre-signed download URL
        download_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': S3_BUCKET, 'Key': file.filename},
            ExpiresIn=3600
        )
        
        return render_template('success.html', download_url=download_url, filename=file.filename)
    except NoCredentialsError:
        return "Permission Error! Check IAM Role settings."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
