import { useEffect, useState } from 'react';
import { 
  AdvancedMarker, 
  InfoWindow, 
  useMapsLibrary, 
  useAdvancedMarkerRef 
} from '@vis.gl/react-google-maps';
import NewTabIcon from './NewTabIcon';

export default function PlaceInfoCard({ placeId, toggled }: {placeId : any, toggled:boolean}) {
    const placesLibrary = useMapsLibrary('places');
    const [markerRef, marker] = useAdvancedMarkerRef();

    interface placeProps {
        displayName: any;
        rating: any;
        formattedAddress: any;
        location: any;
        opening_hours: any;
    }
  
    const [placeDetails, setPlaceDetails] = useState<placeProps>();

    useEffect(() => {
        if (!placesLibrary || !placeId) return;
        const place = new placesLibrary.Place({
            id: placeId,
            requestedLanguage: "en",
        });
        // Define the async function inside the effect
        async function fetchData() {
            // Call fetchFields, passing the needed data fields.
            await place.fetchFields({
                fields: ["displayName", "formattedAddress", "location", "rating", "currentOpeningHours"],
            });
            setPlaceDetails({displayName: place.displayName, formattedAddress: place.formattedAddress, location: place.location, rating: place.rating, opening_hours: place.currentOpeningHours})
        }

        fetchData();
    },[]); // Empty array runs this once on mount

    // 1. Show a fallback UI while the async function runs
    if (!placeDetails) {
        return <div>Loading...</div>;
    }
    console.log(placeDetails.opening_hours)

    return (
        <>
        {/* 1. The Pin/Marker on the Map */}
        <AdvancedMarker
            id="storeMarker"
            clickable={true}
            ref={markerRef}
            position={placeDetails.location}
            title={placeDetails.displayName}
        />

        {/* 2. The Custom Info Card Overlay */}
        {toggled && (
            <InfoWindow
            anchor={marker}
            options={{ disableAutoPan: true, headerDisabled: true }}
            >
                <div style={{ maxWidth: '200px', fontFamily: 'sans-serif', padding: '4px' }}>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold'}}>
                        {placeDetails.displayName}
                    </h3>
                    <p style={{ margin: '0', fontSize: '12px', color: '#555' }}>
                        {placeDetails.formattedAddress}
                    </p>
                    <a style={{position: "absolute", top: 5, right: 5}} href="https://www.google.com/maps/search/?api=1&query=41.46743%2C-81.74251&query_place_id=ChIJ2-af79bxMIgRKA7C0jJWwkA" target="_blank">
                        <NewTabIcon />
                    </a>
                </div>
            </InfoWindow>
        )}
        </>
    );
}
