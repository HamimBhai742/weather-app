import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-gradient-to-b from-blue-300 to-blue-600'>
      <header className='text-center py-4 text-white text-3xl font-bold'>
        World Weather Map
      </header>
      <div className='flex-1 p-4'>
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={4}
          className='w-full h-full rounded-xl shadow-xl'
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; OpenStreetMap contributors'
          />
          <Marker position={[23.8103, 90.4125]}>
            <Popup>Dhaka, Bangladesh</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
