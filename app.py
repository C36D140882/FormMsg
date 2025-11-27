from flask import Flask, render_template, request
from flask_mail import Mail, Message
from db import collection
app = Flask(__name__)

# Email Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'ruthiramoorthi4204@gmail.com'      
app.config['MAIL_PASSWORD'] = 'kobvqpqmuwwajkzo' 

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        phone = request.form.get('phone')
        email = request.form.get('email')
        msg = request.form.get('msg')
        data = {
            "name": name,
            "phone": phone,
            "email": email,
            "msg": msg
        }
        collection.insert_one(data)

        message_body = f"Name: {name}\nPhone: {phone}\nEmail: {email}\nMessage:\n{msg}"
        msg_obj = Message(
            subject=f"New Contact Form Submission from {name}",
            sender=("website contact",email),
            recipients=["ruthiramoorthi4204@gmail.com"],
            body=message_body
        )
        msg_obj.reply_to=email
        mail.send(msg_obj)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)