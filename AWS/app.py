from flask import Flask, request, render_template, redirect
import os
import boto3

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
S3_BUCKET = 'files-bucket-project'
s3 = boto3.client('s3')

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        f = request.files['file']
        if f:
            filename = f.filename
            f.save(os.path.join(UPLOAD_FOLDER, filename))
            s3.upload_file(os.path.join(UPLOAD_FOLDER, filename), S3_BUCKET, filename)
            return redirect('/')
    objects = s3.list_objects_v2(Bucket=S3_BUCKET)
    files = []
    if 'Contents' in objects:
        files = [obj['Key'] for obj in objects['Contents']]
    return render_template('index.html', files=files)

@app.route('/download/<filename>')
def download_file(filename):
    return redirect(f'https://{S3_BUCKET}.s3.amazonaws.com/{filename}', code=302)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
