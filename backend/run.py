from backend import create_app  # Adjust the import path based on your project structure

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
