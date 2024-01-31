
import requests
from requests.auth import HTTPBasicAuth

class WooCommerceAPI:
    def __init__(self, url, consumer_key, consumer_secret):
        self.url = url
        self.consumer_key = consumer_key
        self.consumer_secret = consumer_secret

    def get_products(self):
        endpoint = f"{self.url}/wp-json/wc/v3/products"
        response = requests.get(endpoint, auth=HTTPBasicAuth(self.consumer_key, self.consumer_secret))
        return response.json()

    def create_order(self, order_data):
        endpoint = f"{self.url}/wp-json/wc/v3/orders"
        response = requests.post(endpoint, json=order_data, auth=HTTPBasicAuth(self.consumer_key, self.consumer_secret))
        return response.json()
