import React, { useEffect, useState } from 'react'
import "./Home.css";
import axios from 'axios';
import { Col, Container, Image, Row } from "react-bootstrap";

const Board3 = () => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const planetName = 'Mercury';
        // const response = await axios.get(`http://localhost:3001/${planetName}`);
        const response = await axios.get('http://localhost:3001/planet');
        const mercuryData = response.data;
        setPlanet(mercuryData);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    };

    fetchPlanetData();
  }, []);
  return (
    <div className="App">
      <h1>Planet Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Order from Sun</th>
            <th>Has Rings</th>
            <th>Main Atmosphere</th>
            <th>Min Surface Temperature (°C)</th>
            <th>Max Surface Temperature (°C)</th>
            <th>Mean Surface Temperature (°C)</th>
          </tr>
        </thead>
        <tbody>
          {planet?.map((planet) => (
            <tr key={planet._id}>
              <td>{planet.name}</td>
              <td>{planet.orderFromSun}</td>
              <td>{planet.hasRings ? 'Yes' : 'No'}</td>
              <td>{planet.mainAtmosphere.join(', ')}</td>
              <td>{planet.surfaceTemperatureC.min}</td>
              <td>{planet.surfaceTemperatureC.max}</td>
              <td>{planet.surfaceTemperatureC.mean}</td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Board3