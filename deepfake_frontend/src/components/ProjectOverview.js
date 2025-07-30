import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectOverview = () => (
  <div style={{ background: '#007bff', padding: '48px 0' }}>
    <Container style={{ color: '#fff' }}>
      <Row>
        <Col md={4}>
          <h3>Rebuilt with React</h3>
          <p>
            Deepfake Detector uses modern React and Bootstrap for a fast, accessible experience.
          </p>
        </Col>
        <Col md={4}>
          <h3>Detection at its Core</h3>
          <p>
            Upload images and get instant predictions using our deep learning backend.
          </p>
        </Col>
        <Col md={4}>
          <h3>Accessible by Default</h3>
          <p>
            Designed for everyone, with accessibility and usability in mind.
          </p>
        </Col>
      </Row>
       </Container>
  </div>
);

export default ProjectOverview;