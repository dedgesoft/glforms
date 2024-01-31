from flask import Blueprint, request, jsonify, render_template


form_builder = Blueprint('form_builder', __name__)

@form_builder.route('/')
def index():
    return render_template('form_builder.html')

@form_builder.route('/save-form', methods=['POST'])
def save_form():
    form_data = request.json
    # Logic to save form_data
    return jsonify({"message": "Form configuration saved successfully"}), 200

@form_builder.route('/load-form')
def load_form():
    # Mock form configuration for testing
    mock_form_config = [
        {"type": "text", "id": "text_123", "placeholder": "Enter Name"},
        {"type": "checkbox", "id": "checkbox_456", "label": "Check me"}
        # Add more fields as needed
    ]
    return jsonify(mock_form_config), 200

