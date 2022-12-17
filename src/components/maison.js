import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { fetchOfCountries, filteredByCountries } from '../Redux/Reducers/Countries';

const Maison = () => {
  let countrysNames;

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(fetchOfCountries());
  }, [dispatch]);

  return (
    <div className="maison">
      <div className="regarde-out">
        <input
          className="payee-regarde"
          type="text"
          placeholder="Name of country"
          value={countrysNames}
          onChange={(e) => {
            countrysNames = e.target.value;
          }}
        />
        <Button
          type="button"
          onClick={async () => {
            await dispatch(fetchOfCountries());
            dispatch(filteredByCountries(countrysNames));
          }}
        >
          Search
        </Button>
      </div>
      <div className="maison-pars">
        <header>
          <div className="map-map">
            <img src="./africa.png" alt="African map" />
          </div>
          <div className="tete-map">
            <h2>
              Quality of air in
              <br />
              Africa.
            </h2>
          </div>
        </header>
      </div>

      <Container className="payee-tout">
        {countries.map((country) => (
          <div key={uuidv4()} className="les-infos">
            <div className="tete-t">
              <div className="card-home-carding">{country.name}</div>
              <div className="tete-corpes">
                {country.countrycode}
                <br />
                {country.region}
              </div>
              <button type="submit">
                <NavLink
                  className="like"
                  to="/villes"
                  state={{
                    info: country,
                  }}
                >
                  Visit Cities
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Maison;
