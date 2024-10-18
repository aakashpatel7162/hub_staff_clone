import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import AllCards from './card/Allcards';
import ProductSection from '../component/ProductSection';
import Solutions from '../component/Solutions';
import Resources from '../component/Resources';
import Contactus from '../component/Contactus'
const Home = () => {
  useEffect(() => {
    let userActivities = [];

    const handleClick = (event) => {
      userActivities.push({
        action: 'click',
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      });
    };

    const takeSnapshot = async () => {
      const canvas = await html2canvas(document.body);
      const snapshotData = canvas.toDataURL('image/png');

      userActivities.push({
        action: 'screenshot',
        snapshot: snapshotData,
        timestamp: Date.now(),
      });
    };

    const storeActivities = () => {
      const storedActivities = JSON.parse(localStorage.getItem('userActivities')) || [];
      const updatedActivities = [...storedActivities, ...userActivities];

      if (updatedActivities.length >8) {
        updatedActivities.splice(0, updatedActivities.length - 8);
      }

      localStorage.setItem('userActivities', JSON.stringify(updatedActivities));
      userActivities = []; 
    };

    const initialCapture = async () => {
      await takeSnapshot(); 
      document.addEventListener('click', handleClick); 

      storeActivities();
    };

    initialCapture(); 

    const intervalId = setInterval(async () => {
      await takeSnapshot(); 
      storeActivities(); 
    }, 600000); 

    return () => {
      document.removeEventListener('click', handleClick);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <AllCards />
      <ProductSection />
      <Solutions />
      <Resources />
      <Contactus/>
    </div>
  );
};

export default Home;
