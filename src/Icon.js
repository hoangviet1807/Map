import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./assets/rice.svg'),
    iconRetinaUrl: require('./assets/rice.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };