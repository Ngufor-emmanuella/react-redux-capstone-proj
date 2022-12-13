import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchTown } from '../redux/reducers/town';
import '../App.css';

function City() {
  const dispatch = useDispatch();
  const location = useLocation();
  const infoCountry = location.state.info;
  useEffect(() => {
    dispatch(fetchTown(infoCountry.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const citys = useSelector((state) => state.townReducer);

  return (
    <div className="dispay-country">
      <div>
        <div className="display">
          <h4 className="card-name">{infoCountry.name}</h4>
          <p className="card-msg">
            Capital:
            {infoCountry.capital[0]}
            <br />
            No. of. cities:
            {citys.data?.length}
            <br />
          </p>
          <p className="card-msg">
            Region:
            {infoCountry.region}
          </p>
        </div>
      </div>
      {citys.data?.map((city) => (
        <div className="main-city" key={uuidv4()}>
          <div className="city-house">
            <h2 className="heading">{city}</h2>
          </div>

          <div className="btn-data">
            <button type="submit">
              <NavLink
                className="nav-nav-link"
                to="/pollutants"
                state={{
                  cityname: city,
                  countryname: infoCountry.countrycode,
                }}
              >
                Load Data
              </NavLink>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
export default City;
