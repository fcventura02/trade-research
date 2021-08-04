import { useState } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

interface IProps {
  google: any;
}

export const MapContainer = ({ google }: IProps) => {
  const [maps, setMap] = useState(null);
  function searchNearby(map: any, center: any) {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (result: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(result);
      }
    });
  }
 
  function onMapReady(mapProps: any, map: any) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map google={google} 
    centerAroundCurrentLocation 
    onReady={onMapReady} 
    onRecenter={onMapReady}/>
  );
};

export default GoogleApiWrapper({
  apiKey:
    process.env.REACT_APP_GOOGLE_API_KEY === undefined
      ? " "
      : process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);
