from flask import Flask
from flask_cors import CORS
from .form_api import form_api_blueprint  # Adjust the import path as necessary

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Register blueprints
    app.register_blueprint(form_api_blueprint)

    return app
