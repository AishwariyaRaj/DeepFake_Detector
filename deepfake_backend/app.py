from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the model
model = load_model('deepfake_detector.h5')

# Prediction route
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    img_path = 'temp.jpg'
    file.save(img_path)

    # Preprocess
    img = image.load_img(img_path, target_size=(224, 224))  # Update if different size
    img_array = image.img_to_array(img)
    img_array = img_array / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    pred = model.predict(img_array)
    pred_value = float(pred[0][0])
    label = "Fake" if pred_value > 0.5 else "Real"
    confidence = pred_value if label == "Fake" else 1 - pred_value

    result = {
        'prediction': label,
        'confidence': round(confidence * 100, 2)
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
