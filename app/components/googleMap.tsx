'use client';

import { APIProvider, Map, AdvancedMarker, InfoWindow, useMapsLibrary } from '@vis.gl/react-google-maps';
import React, { useState, useEffect } from 'react';

const BUSINESS_LOCATION = { lat: 41.4675342, lng: -81.7423991 };
const PLACE_ID = 'ChIJRV3z7tbxMIgRnm-0UIuQhWk';

const MapElement = () => {
  // Center coordinates (e.g., New York City)
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <APIProvider apiKey="AIzaSyDZ8mRIICNrwqMnaJ3Z4182OxvzmrRcwI8">
        <Map
          defaultCenter={BUSINESS_LOCATION}
          defaultZoom={13}
          mapId="7ad0d4864611dc6eb909f661"
        >
        
        <BusinessMarker placeId={PLACE_ID} position={BUSINESS_LOCATION} />
        
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapElement;

interface BusinessMarkerProps {
  placeId: string;
  position: object;
}

function BusinessMarker({ placeId, position }: BusinessMarkerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [businessData, setBusinessData] = useState(null);
  const placesLibrary = useMapsLibrary('places'); // Load Google Places Library

  useEffect(() => {
    if (!placesLibrary || !placeId) return;

    // Initialize the Places Service
    const div = document.createElement('div');
    const service = new placesLibrary.PlacesService(div);

    // Request required Business Profile fields
    service.getDetails(
      {
        placeId: placeId,
        fields: ['name', 'formatted_address', 'rating', 'photos', 'url', 'user_ratings_total']
      },
      (place, status) => {
        if (status === placesLibrary.PlacesServiceStatus.OK) {
          setBusinessData(place);
        }
      }
    );
  }, [placesLibrary, placeId]);

  if (!businessData) return null;

  // Extract the first photo thumbnail safely
  const photoUrl = businessData.photos && businessData.photos.length > 0 
    ? businessData.photos[0].getUrl({ maxWidth: 300, maxHeight: 150 }) 
    : null;

  return (
    <>
      <AdvancedMarker 
        position={position} 
        onClick={() => setIsOpen(true)} 
        title={businessData.name}
      />

      {isOpen && (
        <InfoWindow position={position} onCloseClick={() => setIsOpen(false)}>
          {/* Custom Stylized Business Card container */}
          <div style={styles.card}>
            {photoUrl && <img src={photoUrl} alt={businessData.name} style={styles.image} />}
            <div style={styles.body}>
              <h3 style={styles.title}>{businessData.name}</h3>
              <div style={styles.ratingRow}>
                <span style={styles.ratingStar}>★</span>
                <span style={styles.ratingScore}>{businessData.rating}</span>
                <span style={styles.reviews}>({businessData.user_ratings_total} reviews)</span>
              </div>
              <p style={styles.address}>{businessData.formatted_address}</p>
              <a href={businessData.url} target="_blank" rel="noreferrer" style={styles.button}>
                View on Google Maps
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

// Inline Styles for the Business Card UI
const styles = {
  card: {
    maxWidth: '240px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  image: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '4px 4px 0 0',
  },
  body: {
    padding: '8px 4px 4px 4px',
  },
  title: {
    margin: '0 0 4px 0',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px',
  },
  ratingStar: {
    color: '#fbbc04',
    marginRight: '2px',
    fontSize: '14px',
  },
  ratingScore: {
    fontWeight: 'bold',
    fontSize: '13px',
    marginRight: '4px',
  },
  reviews: {
    color: '#70757a',
    fontSize: '12px',
  },
  address: {
    fontSize: '12px',
    color: '#4a4a4a',
    margin: '0 0 10px 0',
    lineHeight: '1.4',
  },
  button: {
    display: 'inline-block',
    padding: '6px 12px',
    backgroundColor: '#1a73e8',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '4px',
    textAlign: 'center',
  }
};

