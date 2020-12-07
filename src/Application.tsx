import React, { useState, useEffect } from 'react';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Axios from 'axios';

const Application = (): JSX.Element => {
    const baseUrl = 'https://restcountries.eu/rest/v2/';
    const [countriesData, setCountriesData] = useState([]);
    const position = [51.505, -0.09];

    const fetchData = () => {
        Axios.get(`${baseUrl}all`).then(
            (response) => setCountriesData(response.data)
        );
    };

    const CountriesList = () => <div className='row gap-3 justify-content-center'>
        {
            countriesData.map(
                (country: any, index: number) => <div key={index} className='col-2'>
                    <img alt={country.name} className='img-fluid' src={country.flag} />
                </div>
            )
        }
    </div>;

    const CountriesMarkerList = () => <div>
        {
            countriesData.map(
                (country: any, index: number) => {
                    const flagIcon = new L.Icon({
                        iconUrl: country.flag,
                        iconSize: [55, 25]
                    });
                    return <Marker
                        key={index}
                        icon={flagIcon}
                        position={country.latlng.length > 0 ? country.latlng : [0, 0]}>
                        <Popup>
                            <h2>{country.name}</h2>
                            <h3>Capital: {country.capital}</h3>
                            <h4>Population: {country.population}</h4>
                        </Popup>
                    </Marker>;
                }
            )
        }
    </div>;

    useEffect(fetchData, []);

    return <div>
        <MapContainer center={(position as any)} zoom={4} maxZoom={8} minZoom={3}>
            <TileLayer attribution='openstreetmap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <CountriesMarkerList />
        </MapContainer>
        <div className="container my-3">
            <CountriesList />
        </div>
    </div>;
};
export default Application;
