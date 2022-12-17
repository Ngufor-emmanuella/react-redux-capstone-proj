import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { airpollution } from '../Redux/Reducers/Pollution';
import '../App';

const Time = (element) => {
  const date = new Date(element.props * 1000);
  return `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
};

const Pollutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const inform = location.state;
  useEffect(() => {
    dispatch(airpollution(inform));
  }, [dispatch, inform]);
  const pollutionData = useSelector((state) => state.pollutionReducer);

  return (
    <div className="mauvais-data">
      <table>
        <div className="fin-linee">
          <thead className="trop-tete">
            <tr>
              <th>(AQI)</th>
              <th>(CO)</th>
              <th>(NO)</th>
              <th>(NO2)</th>
              <th>(O3)</th>
              <th>(SO2)</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="mauvaise-nombres">
            {pollutionData?.map((element) => (
              <tr key={uuidv4()}>
                <td className="trop-mauvais">{element.main.aqi}</td>
                <td className="trop-mauvais">{element.components.co}</td>
                <td className="trop-mauvais">{element.components.no}</td>
                <td className="trop-mauvais">{element.components.no2}</td>
                <td className="trop-mauvais">{element.components.o3}</td>
                <td className="trop-mauvais">{element.components.so2}</td>
                <td className="trop-mauvais">
                  <Time props={element.dt} />
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
      {pollutionData.length === 0 && (
        <div className="mauvaise-nombres">
          Data for this city is currently unavailable
        </div>
      )}
    </div>
  );
};

export default Pollutes;
