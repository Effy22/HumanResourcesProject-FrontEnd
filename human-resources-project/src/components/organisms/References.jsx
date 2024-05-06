import React, { useState, useEffect } from 'react';

const References = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doubledLogos, setDoubledLogos] = useState([]);

  useEffect(() => {
    // Logoların iki kopyasını oluştur
    setDoubledLogos([...logos, ...logos,]);
  }, [logos]);

  // Otomatik kaydırma işlemi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === doubledLogos.length / 2 - 1 ? 0 : prevIndex + 1));
    }, 6000); // 2 saniyede bir kaydır

    return () => clearInterval(interval); 
  }, [doubledLogos]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === doubledLogos.length / 2 - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? doubledLogos.length / 2 - 1 : prevIndex - 1));
  };

  return (
    <>
    <div className='container-title text-center'>
      <h1>References</h1>  
    </div>
    
      <div className="references-container text-center">
      <div className="references-list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {doubledLogos.map((logo, index) => (
          <div
            key={index}
            className="reference-item"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>{'<'}</button>
      <button className="next-btn" onClick={handleNext}>{'>'}</button>
    </div>
    </>
  );
};

export default References;
