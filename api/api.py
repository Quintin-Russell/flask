from flask import Flask

app = Flask(__name__)

@app.route('/hi')
def say_hi():
    return {"message": "sup stoker"}
