import React, { useEffect, useState } from 'react';
import { 
  AdvancedMarker, 
  InfoWindow, 
  useMap, 
  useMapsLibrary, 
  useAdvancedMarkerRef 
} from '@vis.gl/react-google-maps';

export default function PlaceInfoCard({ placeId, toggled }: {placeId : any, toggled:boolean}) {
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
  
    const [placeDetails, setPlaceDetails] = useState<placeProps>();
    const place = new placesLibrary.Place({
        id: placeId,
        requestedLanguage: "en",
    });

    // Fetch Place Details when the library loads
    useEffect(() => {
        if (!placesLibrary || !map || !placeId) return;

        // Use the new Places Service
        // const service = new placesLibrary.PlacesService(map);

        const fetchData = async () => {
            // Call fetchFields, passing the needed data fields.
            await place.fetchFields({
                fields: ["displayName", "formattedAddress", "location", "rating"],
            });
            console.log(place)
        }
        fetchData();
        
        
        // service.getDetails(
        //     {
        //         placeId: placeId,
        //         // Request only the fields you need to optimize billing costs
        //         fields: ['name', 'formatted_address', 'rating', 'photos', 'geometry']
        //     },
        //     (place:any, status:any) => {
        //         if (status === placesLibrary.PlacesServiceStatus.OK && place) {
        //         setPlaceDetails(place);
        //         }
        //     }
        // );
    });
    // }, [placesLibrary, map, placeId]);

    // if (!placeDetails) return null;

    // const position = {
    //     lat: placeDetails.geometry.location.lat(),
    //     lng: placeDetails.geometry.location.lng()
    // };

    return (
        <>
        {/* 1. The Pin/Marker on the Map */}
        <AdvancedMarker
            id="storeMarker"
            clickable={true}
            ref={markerRef}
            position={place.location}
            title={place.displayName}
        />

        {/* 2. The Custom Info Card Overlay */}
        {toggled && (
            <InfoWindow
            anchor={marker}
            options={{ disableAutoPan: true, headerDisabled: true }}
            >
            <div style={{ maxWidth: '200px', fontFamily: 'sans-serif', padding: '4px' }}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>{place.displayName}</h3>
                {place.rating && (
                <p style={{ margin: '0 0 6px 0', fontSize: '12px', color: '#e7711b' }}>
                    ★ {place.rating} / 5
                </p>
                )}
                <p style={{ margin: '0', fontSize: '12px', color: '#555' }}>
                {place.formattedAddress}
                </p>
            </div>
            </InfoWindow>
        )}
        </>
    );
}
