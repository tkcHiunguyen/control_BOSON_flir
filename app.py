from flask import Flask, render_template, request
import subprocess
import os
import sys
from flask_socketio import SocketIO, send, emit
from Khang_flir.flir_boson_control.main import *

from test.demo import season
app = Flask(__name__)
myflir = FLR_BOSON()
socketio = SocketIO(app)


@app.route('/', methods=['GET'])
def index():
    if request.method == 'GET':
        return render_template('login.html')


@app.route('/flir')
def flir():
    return render_template('flir.html')


@app.route('/sony')
def sony():
    return render_template('sony.html')


@app.route('/ogi')
def ogi():
    return render_template('ogi.html')


@app.route('/select')
def select():
    return render_template('select.html')


@app.route('/input')
def input_slide():
    return render_template('input-slide.html')


@app.route('/radio')
def radio():
    return render_template('inputradio.html')


@app.route('/button')
def button():
    return render_template('button.html')


@app.route('/boson', methods=["GET"])
def boson():
    return render_template('boson.html')


@app.route('/rainbow', methods=["POST"])
def rainbow():
    # path = os.path.join(os.path.dirname(__file__),
    #                     "Khang-flir", "flir-boson-control", "main.py")
    # subprocess.run(["python3", path])
    myflir.khangAPI("hiếu")
    return "rainbow"
    # return render_template('boson.html')


@app.route('/whitehot', methods=["POST"])
def whitehot():
    path = 'test/fileCache.py'
    subprocess.run(["python3", path])
    return "whitehot"
    # return render_template('boson.html')


@app.route('/ironbow', methods=["POST"])
def ironbow():
    hieu = season()
    ret = hieu.setSeason('aaa')
    return "ironbow"
    # return render_template('boson.html')


@socketio.on('my_event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))
    return render_template('flir.html')


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8001, debug=False)
