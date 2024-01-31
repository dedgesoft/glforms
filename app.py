from flask import Flask
from views import main #Import the blueprint from views.py
from form_builder import form_builder #Import the blueprint from form_builder.py

def create_app():
    app = Flask(__name__)

    # Configuration settings can be added here
    # app.config['SECRET_KEY'] = 'your_secret_key'

    # Initialize extensions here (if any)

    # Blueprint registration
    app.register_blueprint(main)
    
    #Form Builder Blueprint
    app.register_blueprint(form_builder, url_prefix='/form-builder')
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
