from flask import Flask, render_template
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-d", "--debug", help="run app in debug mode", action="store_true")

# app instantiation
app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return render_template('gen/index.html')


if __name__ == '__main__':
    # read arguments from the command line
    args = parser.parse_args()
    app.run(debug=args.debug)
