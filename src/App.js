import Data from './data/machineSite.json';
import Layer from './data/layer.json'
import rice from './assets/rice.png'

import { MapContainer, TileLayer, Marker,Polyline,Popup, Tooltip, LayersControl, Polygon } from 'react-leaflet'
import L from 'leaflet';
import { useEffect, useState } from 'react';


function App() {
    const position = [13.824869, 109.146137]
    const myIcon = L.icon({
      iconUrl: rice,
      iconRetinaUrl: rice,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [50, 50],
  });



    return (
      
        <MapContainer style={{ height: '100vh', width: '100wh' }} center={position} zoom={12} scrollWheelZoom={true}>
        
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright"></a> contributors'
            url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
          />

            {Data.map(data =>(
                <Marker  key={data.id}  icon={myIcon} center={[data.gps.latitude,data.gps.longtitude]} position={[data.gps.latitude,data.gps.longtitude]} radius={800}>
                  <Popup>
                    {data.name}
                 </Popup>
                 {/* <Tooltip direction="center" style={{fontSize:10}} fontSize={10} opacity={10} permanent>
                  {data.name}
                </Tooltip> */}
                </Marker>
            ))}
              
             
            {Layer.map(data =>(
                <Polyline key={data.id} pathOptions={data.style} positions={data.coordinates}>
              <Popup>
                    {data.name}
                 </Popup>
                </Polyline>
            ))}
            <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>
            </LayersControl>
        </MapContainer>
         
    );
  }

  export default App;
