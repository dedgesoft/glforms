import unittest
from app import create_app
from flask import json

class FlaskTestCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()
        self.app_context = self.app.app_context()
        self.app_context.push()
        self.app.testing = True

    def test_save_form(self):
        # Mock form data
        form_data = {"field1": "text", "field2": "checkbox"}
        response = self.client.post('/form-builder/save-form', data=json.dumps(form_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Form configuration saved successfully', str(response.data))

    def test_load_form(self):
        response = self.client.get('/form-builder/load-form')
        self.assertEqual(response.status_code, 200)
        # Check for specific data in response if necessary

    def tearDown(self):
        self.app_context.pop()
if __name__ == '__main__':
    unittest.main()
