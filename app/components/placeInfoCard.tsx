import React, { useEffect, useState } from 'react';
import { 
  AdvancedMarker, 
  InfoWindow, 
  useMap, 
  useMapsLibrary, 
  useAdvancedMarkerRef 
} from '@vis.gl/react-google-maps';

export default function PlaceInfoCard({ placeId }: {placeId : any}) {
    const map = useMap();
    const placesLibrary = useMapsLibrary('places');
    const [markerRef, marker] = useAdvancedMarkerRef();

    interface placeProps {
        name: any;
        photos: any;
        rating: any;
        formatted_address: any;
        geometry: any;
        opening_hours: any;
    }
  
    const [placeDetails, setPlaceDetails] = useState<placeProps>();;
    const [isOpen, setIsOpen] = useState(true);

    // Fetch Place Details when the library loads
    useEffect(() => {
        if (!placesLibrary || !map || !placeId) return;

        // Use the new Places Service
        const service = new placesLibrary.PlacesService(map);
        
        service.getDetails(
        {
            placeId: placeId,
            // Request only the fields you need to optimize billing costs
            fields: ['name', 'formatted_address', 'rating', 'photos', 'geometry']
        },
        (place:any, status:any) => {
            if (status === placesLibrary.PlacesServiceStatus.OK && place) {
            setPlaceDetails(place);
            }
        }
        );
    }, [placesLibrary, map, placeId]);

    if (!placeDetails) return null;

    const position = {
        lat: placeDetails.geometry.location.lat(),
        lng: placeDetails.geometry.location.lng()
    };

    return (
        <>
        {/* 1. The Pin/Marker on the Map */}
        <AdvancedMarker
            clickable={true}
            ref={markerRef}
            position={position}
            title={placeDetails.name}
            onClick={() => { // Prevents map clicks from bubbling up
            setIsOpen(!isOpen);
      }}
        />

        {/* 2. The Custom Info Card Overlay */}
        {isOpen && (
            <InfoWindow
            anchor={marker}
            options={{ disableAutoPan: true, headerDisabled: true }}
            >
            <div style={{ maxWidth: '200px', fontFamily: 'sans-serif', padding: '4px' }}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>{placeDetails.name}</h3>
                {placeDetails.rating && (
                <p style={{ margin: '0 0 6px 0', fontSize: '12px', color: '#e7711b' }}>
                    ★ {placeDetails.rating} / 5
                </p>
                )}
                <p style={{ margin: '0', fontSize: '12px', color: '#555' }}>
                {placeDetails.formatted_address}
                </p>
            </div>
            </InfoWindow>
        )}
        </>
    );
}
