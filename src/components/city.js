import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchCities } from '../Redux/Reducers/Cities';
import '../App.css';

const Cities = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const countryInfo = location.state.info;
  useEffect(() => {
    dispatch(fetchCities(countryInfo.name));
  }, [countryInfo.name, dispatch]);
  const cities = useSelector((state) => state.citiesReducer);

  return (
    <section>
      <div className="payee-container">
        <div>
          <div className="les-infos">
            <h4 className="tete-disk">{countryInfo.name}</h4>
            <p className="tete-t">
              Capital:
              {countryInfo.capital[0]}
              <br />
              No. of cities:
              {cities.data?.length}
              <br />
            </p>
            <p className="tete-ecrie">
              Region:
              {countryInfo.region}
            </p>
          </div>
        </div>
        {cities.data?.map((city) => (
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
                    countryname: countryInfo.countrycode,
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

export default Cities;
