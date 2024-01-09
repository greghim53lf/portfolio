import ReactMapGL, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocoder from 'components/Geocoder'
import { useState } from 'react'

export default function Map() {
  const [longitude, latitude] = [3.32776, 6.64151]
  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 15,
    pitch: 50,
  })

  const mapStyle = "mapbox://styles/mapbox/streets-v9"
  
  return (
    <ReactMapGL
      initialViewState={viewState}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={mapStyle}
    >
        <NavigationControl />
        <GeolocateControl trackUserLocation/>
      <FullscreenControl />
      <Marker longitude={longitude} latitude={latitude} />
      <Geocoder setState={setViewState}/>
    </ReactMapGL>
  )
}
