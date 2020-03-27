import React, { useState, useEffect } from 'react';
import api from '../../services/api';


import './styles.css';

export default function New({ history }) {
  const [owner, setOwner] = useState('');
  const [island, setIsland] = useState('');
  const [fruit, setFruit] = useState('Apple');
  const [hemisphere, setHemisphere] = useState('Northern');
  const [turnipPrice, setTurnipPrice] = useState(0);
  const [dodoCode, setDodoCode] = useState('');


  useEffect(() => {
    if (localStorage.getItem('owner')) {
      setOwner(localStorage.getItem('owner'));
    }
    if (localStorage.getItem('island')) {
      setIsland(localStorage.getItem('island'));
    }
    if (localStorage.getItem('fruit')) {
      setFruit(localStorage.getItem('fruit'));
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('owner', owner)
    localStorage.setItem('island', island)
    localStorage.setItem('fruit', fruit)
    // const user_id = localStorage.getItem('user');

    // data.append('company', company);
    // data.append('techs', techs);
    // if(!owner || !island || !fruit || !hemisphere || !code) {
    //   return null;
    // }


    await api.post('/islands', {
        "ownerName": owner,
        "islandName": island,
        fruit,
        hemisphere,
        turnipPrice,
        dodoCode
    })
    // await api.post('/spots', data, {
    //   headers: { user_id }
    // })

    history.push('/');
  }

  function handleCancel(event) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <div className="new-island-container">

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="owner">OWNER *</label>    
        <input
          id="owner"
          placeholder="Your game name"
          value={owner}
          onChange={event => setOwner(event.target.value)}
        />

        <label htmlFor="island">ISLAND *</label>    
        <input
          id="island"
          placeholder="Your island name"
          value={island}
          onChange={event => setIsland(event.target.value)}
        />

        <label htmlFor="fruit">FRUIT *</label>    
        <select id="fruit" value={fruit} onChange={(e => setFruit(e.target.value))}>
          <option value="APPLE">Apple</option>
          <option value="CHERRY">Cherry</option>
          <option value="ORANGE">Orange</option>
          <option value="PEACH">Peach</option>
          <option value="PEAR">Pear</option>
        </select>

        <label htmlFor="hemisphere">HEMISPHERE *</label>    
        <select id="hemisphere" value={hemisphere} onChange={(e => setHemisphere(e.target.value))}>
          <option value="Northern">Northern</option>
          <option value="Southern">Southern</option>
        </select>

        <label htmlFor="price">TURNIP PRICE</label>    
        <input
          id="price"
          placeholder="Turnip price on your island (number only)"
          value={turnipPrice}
          onChange={event => setTurnipPrice(event.target.value)}
        />
        <label htmlFor="code">DODO CODE *</label>    
        <input
          id="code"
          placeholder="Your current DODO CODE"
          value={dodoCode}
          onChange={event => setDodoCode(event.target.value)}
        />
        <div className="actions">
          <button type="submit" className="btn">Register</button>
          <button type="cancel" onClick={handleCancel} className="btn" id="cancel">Cancel</button>

        </div>
      </form>
    </div>
  );
}
