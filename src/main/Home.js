import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import AllCards from './card/Allcards';
import ProductSection from '../component/ProductSection';
import Solutions from '../component/Solutions';
import Resources from '../component/Resources';
import Contactus from '../component/Contactus'
import { useState } from 'react';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastCaptureTime, setLastCaptureTime] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('userData'); 
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
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

      if (updatedActivities.length > 8) {
        updatedActivities.splice(0, updatedActivities.length - 8);
      }

      localStorage.setItem('userActivities', JSON.stringify(updatedActivities));
      userActivities = [];
    };

    const handleInitialCapture = async () => {
      const now = Date.now();
      await takeSnapshot();
      storeActivities();
      setLastCaptureTime(now); 
    };

    handleInitialCapture();

    const intervalId = setInterval(async () => {
      const now = Date.now();
      if (!lastCaptureTime || now - lastCaptureTime >= 600000) {
        await takeSnapshot();
        storeActivities();
        setLastCaptureTime(now); 
      }
    }, 600000);

    document.addEventListener('click', handleClick); 

    return () => {
      document.removeEventListener('click', handleClick);
      clearInterval(intervalId);
    };
  }, [isLoggedIn]); 

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