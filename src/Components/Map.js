import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const Map = () => {

    return (
        <MapContainer center={[51.454514, -2.587910]} style={{height: '100%', width: '100%'}} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map;
