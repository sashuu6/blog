#!/bin/bash

gunicorn -w 4 wsgi:app --bind 0.0.0.0:6969