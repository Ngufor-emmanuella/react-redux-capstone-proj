import React from 'react';
import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { lookCountries, lookThroughCountries } from '../redux/reducers/country';

function Home() {
  let nameCountry;

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatch(lookCountries());
  }, [dispatch]);

  return (
    <div className="house">
      <div className="search-box">
      <input className="search"
      type="text"
      placeholder="Name of country" 
      value={nameCountry}
      onChange={(e) => {
        nameCountry = e.target.value;
      }}
      />
      <Button variant="secondary"
      type="button"
      onClick={async () => {
        await dispatch(lookCountries());
        dispatch(lookThroughCountries(nameCountry));
      }}
      >
        Search
      </Button>
    </div>
    <div className="title-home">
      <header>
        <div className="map">
          <img src="./africa.png" alt="African map" />
        </div>
        <div className="map-map">
          <h2>
            Quality of air in
            <br />
            Africa.
          </h2>
        </div>
      </header>
    </div>

    <Container className="countries-con">
      {countries.map((country) => (
        <div key={uuidv4()} className="info-info">
          <div className="carding">
            <div className="home-home-card">{country.name}</div>
            <div className="body-body">
              {country.countrycode}
              <br />
              {country.region}
            </div>
            <button type="submit">
              <NavLink
              className="nav-nav-link"
              to="/town"
              state={{
                info: country,
              }}
              >
                Visite Cities
              </NavLink>
            </button>
          </div>
        </div>
      ))}
    </Container>
    </div>
  );
}
export default Home;
