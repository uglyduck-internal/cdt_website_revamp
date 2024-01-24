from flask import Flask, request, jsonify, flash, redirect, render_template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

app = Flask(__name__)
app.logger.setLevel(logging.INFO)
# wpoidglicadfcaih
@app.route('/sendMail', methods=['POST'])
def send_mail():
    DEFAULT_SENDER = os.environ.get('DEFAULT_SENDER')
    DEFAULT_RECEIVER = os.environ.get('DEFAULT_RECEIVER')
    SMTP_SERVER = os.environ.get('SMTP_SERVER')
    SMTP_PORT = int(os.environ.get('SMTP_PORT'))
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

    try:
        # 解析请求数据
        data = request.form
        dst_email_addr = data.get('email')
        user_name = data.get('name')
        user_phone_number = data.get('phone')
        message_content = data.get('suggestion')
        # 创建邮件消息
        message = MIMEMultipart()
        message['From'] = DEFAULT_SENDER
        message['To'] = DEFAULT_RECEIVER
        message['Subject'] = 'New Message from {}'.format(user_name)

        # 邮件正文内容
        body = f"Name: {user_name}\nPhone: {user_phone_number}\nMessage: {message_content}\nEmail: {dst_email_addr}"
        message.attach(MIMEText(body, 'plain'))

        # 发送邮件
        # server = smtplib.SMTP_SSL('smtp.qq.com', 465) # 替换为您的SMTP服务器
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) # 替换为您的SMTP服务器
        server.login(DEFAULT_SENDER, MAIL_PASSWORD) # 登录凭据
        text = message.as_string()
        print(text)
        server.sendmail(DEFAULT_SENDER, DEFAULT_RECEIVER, text)
        server.quit()
        return render_template('success.html')

    except smtplib.SMTPException as e:
         return render_template('error.html', message=str(e))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)