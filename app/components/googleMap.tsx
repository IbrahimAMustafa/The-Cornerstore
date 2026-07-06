'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import PlaceInfoCard from './placeInfoCard';

const BUSINESS_LOCATION = { lat: 41.4675342, lng: -81.7423991 };
const PLACE_ID = 'ChIJ2-af79bxMIgRKA7C0jJWwkA';

const MapElement = () => {
  const [isOpen, setIsOpen] = useState(true);

  ClickTracker(isOpen, setIsOpen);
  // Center coordinates (e.g., New York City)
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <APIProvider apiKey="AIzaSyDZ8mRIICNrwqMnaJ3Z4182OxvzmrRcwI8" libraries={['places']} version='beta'>
        <Map
          defaultCenter={BUSINESS_LOCATION}
          defaultZoom={13}
          mapId="7ad0d4864611dc6eb909f661"
        >
          <PlaceInfoCard placeId={PLACE_ID} toggled={isOpen} />
        </Map>
      </APIProvider>
    </div>
  );
};

function ClickTracker(isOpen:Boolean, setIsOpen:Function) {
  useEffect(() => {
    const handleGlobalClick = (event:any) => {
      const elements = event.composedPath();
    
      // Example: Find the specific buried element by its class name or data attribute
      const buriedElement = elements.find((el:any) => el.classList && (el.classList.contains('yNHHyP-marker-view') || el.classList.contains('gm-style-iw-d')));
      if(buriedElement){
        setIsOpen(true);
      }else{
        setIsOpen(false);
      }
    };

    // Add listener when component mounts
    document.addEventListener('click', handleGlobalClick);

    // Clean up listener when component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

}

export default MapElement;