import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchOfCities } from '../Redux/Reducers/Cities';
import '../App.css';

const Villes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const infosCountrys = location.state.info;
  useEffect(() => {
    dispatch(fetchOfCities(infosCountrys.name));
  }, [infosCountrys.name, dispatch]);
  const villes = useSelector((state) => state.citiesReducer);

  return (
    <section>
      <div className="payee-container">
        <div>
          <div className="les-infos">
            <h4 className="tete-disk">{infosCountrys.name}</h4>
            <p className="tete-t">
              Capital:
              {infosCountrys.capital[0]}
              <br />
              No. of cities:
              {villes.data?.length}
              <br />
            </p>
            <p className="tete-ecrie">
              Region:
              {infosCountrys.region}
            </p>
          </div>
        </div>
        {villes.data?.map((city) => (
          <div className="payee-blockes" key={uuidv4()}>
            <div className="ville-blo">
              <div className="ville-tete">{city}</div>
            </div>
            <div className="butn">
              <button type="submit">
                <NavLink
                  className="like"
                  to="/pollutiondata"
                  state={{
                    cityname: city,
                    countryname: infosCountrys.countrycode,
                  }}
                >
                  Load Data
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Villes;
