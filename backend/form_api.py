from flask import Blueprint, request, jsonify

form_api_blueprint = Blueprint('form_api', __name__)

# Dummy storage for demonstration purposes
FORM_CONFIGS = []

@form_api_blueprint.route('/api/form-config', methods=['POST'])
def save_form_config():
    data = request.json
    FORM_CONFIGS.append(data)
    return jsonify({"message": "Form configuration saved successfully"}), 200

@form_api_blueprint.route('/api/form-config', methods=['GET'])
def load_form_config():
    return jsonify(FORM_CONFIGS), 200
