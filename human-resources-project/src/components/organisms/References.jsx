import React, { useState, useEffect } from 'react';

const References = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doubledLogos, setDoubledLogos] = useState([]);

  useEffect(() => {
    // Logoların döngüsel olarak kaymasını sağlamak için logoların iki kopyasını oluştur
    setDoubledLogos([...logos, ...logos, ...logos, ...logos,...logos, ...logos,...logos, ...logos]);
  }, [logos]);

  // Otomatik kaydırma işlemi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? doubledLogos.length - 1 : prevIndex - 1));
    }, 1000); // 8 saniyede bir kaydır

    return () => clearInterval(interval); 
  }, [doubledLogos]);

  return (
    <>
      <div className='container-title text-center'>
        <h1>References</h1>  
      </div>
      
      <div className="references-container text-center">
        <div className="references-list" style={{ transform: `translateX(${currentIndex * (100 / doubledLogos.length)}%)` }}>
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="reference-item"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default References;
