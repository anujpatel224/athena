'use client';

import { useEffect, useRef } from 'react';

const ClientList = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems = entry.target.querySelectorAll('li');
            listItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 200); // 200ms delay between each item
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  return (
    <div className="list-container">
      <div className="list-section">
        <ul ref={listRef}>
          <li className="slide-client">DAIMLER CHRYSLER</li>
          <li className="slide-client">BRITISH GAS</li>
          <li className="slide-client">SEVERN TRENT WATER</li>
          <li className="slide-client">O2 TELEFONICA</li>
          <li className="slide-client">SPORT ENGLAND</li>
          <li className="slide-client">EAST MIDLANDS TRAINS</li>
          <li className="slide-client">HALFORDS</li>
        </ul>
      </div>
      <div className="list-image-section">
        <img className="slide-right" src="/images/o2.jpg" alt="Dinners" />
      </div>
    </div>
  );
};

export default ClientList; 