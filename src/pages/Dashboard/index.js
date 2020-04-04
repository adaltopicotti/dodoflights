import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [islands, setIslands] = useState([]);

  useEffect(() => {
    async function loadIslands() {
      const response = await api.get('/islands');
      setIslands(response.data);
    }

    loadIslands();
  }, [])

  return (
    <div className="islands-container">
      <Link className="link-register" to="/new">
        <button className="btn">Register Island</button>
      </Link>
        <ul className="list-islands">
          {islands.map(island => (
            <li key={island._id} >
              {/* <header style={{ backgroundImage: `url(${island.fruit_url})` }}> */}
              <strong>Island</strong>
              <p>{island.island}</p>
              <strong>Owner</strong>
              <p>{island.owner}</p>
              <strong>Hemisphere</strong>
              <p>{island.hemisphere}</p>
              <strong>Turnip Price</strong>
              <p>{island.turnipPrice} bells</p>
              <strong>Dodo Code</strong>
              <p id="code">{island.dodoCode}</p>
                <img id="fruit" src={island.fruit_url} alt={island.fruit} />
            </li>
          )).reverse()}
        </ul>
    </div>
  );
}
