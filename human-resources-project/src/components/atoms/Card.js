import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GenericCard = ({ title, text, buttonText, imageUrl }) => {
  return (
    <Card >
      <Card.Img variant="top" src={imageUrl} className='img-card-icon'  />
      <Card.Body>
        <Card.Title style={{ color: '#1a1e75' }}>{title}</Card.Title>
        <Card.Text >{text}</Card.Text>
        <Button className="custom-button" variant="secondary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default GenericCard;
