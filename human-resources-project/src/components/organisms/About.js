import React, { useState, useEffect } from 'react';

const About = () => {
  const [h1Visible, setH1Visible] = useState(false);
  const [pVisible, setPVisible] = useState(false);

  useEffect(() => {
    const h1Element = document.querySelector('h1');
    const pElement = document.getElementById('about-text');

    const handleVisibility = () => {
      const h1ElementPosition = h1Element.offsetTop;
      const pElementPosition = pElement.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= h1ElementPosition - window.innerHeight / 1.5) {
        setH1Visible(true);
      }

      if (scrollPosition >= pElementPosition - window.innerHeight / 1.5) {
        setPVisible(true);
      }
    };

    // Sayfa yüklendiğinde ve scroll edildiğinde görünürlüğü kontrol et
    handleVisibility();
    window.addEventListener('scroll', handleVisibility);

    // Bileşenin monte edildiği zaman opacity animasyonunu başlat
    h1Element.style.opacity = '1';
    pElement.style.opacity = '1';

    return () => window.removeEventListener('scroll', handleVisibility);
  }, []);

  return (
    <div className='text-center about-container'>
      <div className='row'>
        <h1 id='about-title' className={h1Visible ? 'animate-on-scroll' : ''}>Welcome to Workforce Solution</h1>
        <p id="about-text" className={pVisible ? 'animate-on-scroll' : ''}>
          Workforce Solution is an advanced HR management application designed to streamline human resources processes for businesses of all sizes. Our platform offers a comprehensive suite of features including personnel management, performance evaluation, recruitment process management, customizable training and development programs, regular employee satisfaction surveys, and occupational health and safety compliance.
          With Workforce Solution, you can efficiently manage your company's human resources operations, track employee performance, foster professional growth, and ensure workplace safety. Our intuitive interface and powerful analytics empower you to make data-driven decisions and enhance the overall productivity and satisfaction of your workforce.
          Whether you're a small startup or a large enterprise, Workforce Solution provides the tools and insights you need to optimize your HR processes and elevate your organization to new heights.
        </p>
      </div>
    </div>
  );
};

export default About;
