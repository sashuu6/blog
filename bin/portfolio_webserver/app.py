"""
 * Projecr Name : Portfolio Website
 * Project repository link : https://github.com/sashuu69/portfolio_site
 * File name : app.py
 * Author : Sashwat K
 * Purpose : Host portfolio website using Python Flask
"""
import json

from flask import Flask, render_template


JSONDATA = open("data.json")
DICTDATA = json.load(JSONDATA)


app = Flask(__name__, template_folder="template")


@app.route("/")
def index() -> str:
    """Definition to render root HTML page"""
    return render_template('index.html', **DICTDATA)
