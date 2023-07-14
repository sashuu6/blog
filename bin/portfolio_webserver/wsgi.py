"""
 * Projecr Name : Portfolio Website
 * Project repository link : https://github.com/sashuu69/portfolio_site
 * File name : wsgi.py
 * Author : Sashwat K
 * Purpose : WSGI Entry Point
"""

from app import app

if __name__ == "__main__":
    app.run(threaded=True)
