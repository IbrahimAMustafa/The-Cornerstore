'use client';

import { APIProvider, Map, InfoWindow, useMapsLibrary, Marker } from '@vis.gl/react-google-maps';
import React, { useState, useEffect, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import PlaceInfoCard from './placeInfoCard';

const BUSINESS_LOCATION = { lat: 41.4675342, lng: -81.7423991 };
const PLACE_ID = 'ChIJ2-af79bxMIgRKA7C0jJWwkA';

const MapElement = () => {
  // Center coordinates (e.g., New York City)
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <APIProvider apiKey="AIzaSyDZ8mRIICNrwqMnaJ3Z4182OxvzmrRcwI8" libraries={['places']} version='beta'>
        <Map
          defaultCenter={BUSINESS_LOCATION}
          defaultZoom={13}
          mapId="7ad0d4864611dc6eb909f661"
        >
          <PlaceInfoCard placeId={PLACE_ID} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapElement;