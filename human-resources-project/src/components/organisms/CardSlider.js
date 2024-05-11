import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/img-1.png';
import img2 from '../../images/img-2.png';
import img3 from '../../images/img-3.png';
import img4 from '../../images/img-4.png';
import img5 from '../../images/img-5.png';
import img6 from '../../images/img-6.png';

const cardsData = [
  {
    title: "Reliable Human Resources Management",
    text: "Manage your company's human resources confidently and easily.",
    image: img1,
  },
  {
    title: "Performance Evaluation",
    text: "Track, evaluate, and support the development of employee performance.",
    image: img2,
  },
  {
    title: "Recruitment Process Management",
    text: "Efficiently manage recruitment processes and effectively evaluate candidates.",
    image: img3,
  },
  {
    title: "Training and Development Programs",
    text: "Create customizable training and development programs to enhance employee skills and talents.",
    image: img4,
  },
  {
    title: "Employee Satisfaction Surveys",
    text: "Organize regular surveys to measure employee satisfaction and gather feedback.",
    image: img5,
  },
  {
    title: "Occupational Health and Safety",
    text: "Take measures to protect employee health and safety, and comply with legal requirements.",
    image: img6,
  },
];


const CardSlider = () => {
  return (
    <>
    <div className='container d-flex'>
        <div className=' row justify-content-center card-container'>
          {cardsData.map((card, index) => (
            <Card style={{width: '18rem'}} key={index} >
              <Card.Img variant="top" src={card.image} className='card-img-container' />
              <Card.Body className='card-body'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button className='custom-button' variant="primary">More...</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardSlider;
