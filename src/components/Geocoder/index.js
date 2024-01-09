import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import { useControl } from "react-map-gl"
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function Geocoder({setState}) {
    const ctrl = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
        marker: false,
        collapsed: true
    })
    useControl(() => ctrl)
    ctrl.on('result', e => {
        const [longitude, latitude] = e.result.geometry.coordinates
        setState(prev => ({...prev, longitude, latitude}))
    })
  return (
    null
  )
}
