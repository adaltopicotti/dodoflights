import React, { useState } from "react";
import { FiChevronDown, FiBriefcase } from "react-icons/fi";

import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import api from "../../services/api";

export default function Bar() {
  const authorization = localStorage.getItem("@token");
  const [gate, setGate] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          authorization,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [authorization]);

  function handleOpen() {
    setGate(!gate);
  }
  return (
    <>
      <div className="user-info" style={gate ? { background: "#18E04F" } : {}}>
        <p>Satsui | SW 4445-3446-7655</p>
        <Link to="/new" className="avatar">
          <span> PASSPORT </span>
          <FiChevronDown size={20} />
        </Link>
      </div>
      <div className="bar-container">
        <div className="airport-info">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/cherry.png?alt=media&token=73d3ff4f-b517-4c89-8ff5-0d709e7da995"
            alt=""
          />
          {/* <div className="island">
            <label>Island</label>
            <p>Raindrop</p>
          </div> */}
          <div className="form-item">
            <label htmlFor="island">Island</label>
            <input id="island" type="text" value="Raindrop" disabled />
          </div>
          <div className="form-item">
            <label htmlFor="price">Turnip</label>
            <input id="price" type="text" autoFocus />
          </div>
          <div className="form-item">
            <label htmlFor="code">Dodo Code</label>
            <input id="code" type="text" />
          </div>
          <div className="form-item">
            <button
              style={gate ? { background: "#e02041" } : {}}
              onClick={handleOpen}
            >
              {gate ? "CLOSE" : "OPEN"}
            </button>
          </div>
        </div>
      </div>
      <div className="sinalizer" style={gate ? { background: "#18E04F" } : {}}>
        <p>AIRPORT {!gate ? "CLOSED" : "OPEN"}</p>
      </div>
    </>
  );
}
