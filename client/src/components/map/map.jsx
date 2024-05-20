import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './map.scss';
import Pin from '../pin/Pin';

const map = ({items}) => {
  return (
   

  <MapContainer center={[52.4797, -1.90269]} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
   
  </MapContainer>

  )
}

export default map