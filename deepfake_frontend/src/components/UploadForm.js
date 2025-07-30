import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Alert, Container } from 'react-bootstrap';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Prediction failed. Check backend.');
    }
  };

return (
    <div style={{
      minHeight: '100vh',
      background: '#fff', // changed from dark to white
      color: '#23232b',   // use dark text for white background
      paddingTop: '60px'
    }}>
<Container className="text-center">
  <div style={{
    background: '#007bff', // blue background for header
    padding: '16px 0',
    marginBottom: '40px',
    borderRadius: '8px'
  }}>
    <h1 style={{ fontWeight: 700, fontSize: '2.5rem', margin: 0 }}>Deepfake Detector</h1>
    <div style={{ fontSize: '1.2rem', marginTop: '8px' }}>
      The most popular Deepfake detection tool, rebuilt for React.
    </div>
  </div>
  <Card
    className="mx-auto"
    style={{
      maxWidth: 500,
      background: '#f8f9fa',
      color: '#23232b',
      border: '2px solid #007bff', // highlight with blue border
      boxShadow: '0 4px 24px rgba(0,123,255,0.10)', // subtle blue shadow
      borderRadius: '16px', // more rounded corners for emphasis
      marginBottom: '32px'
    }}
  >
    <Card.Body>
      <Card.Title style={{ fontWeight: 600, fontSize: '1.5rem' }}>Upload an Image</Card.Title>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select image file</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleUpload}
          disabled={!selectedFile}
          style={{
            background: '#007bff', // blue background for button
            border: 'none',
            fontWeight: 600
          }}
        >
          Upload & Predict
        </Button>
      </Form>
      {result && (
        <Alert variant="info" className="mt-4">
          <h5>Prediction Result</h5>
          <div><strong>Label:</strong> {result.prediction}</div>
          <div><strong>Confidence:</strong> {result.confidence}%</div>
        </Alert>
      )}
    </Card.Body>
  </Card>
</Container>
    </div>
  );
};

export default UploadForm;