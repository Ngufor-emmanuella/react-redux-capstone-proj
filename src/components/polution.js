import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Polute } from '../redux/reducers/polute';
import '../App';

function Time(elmt) {
  const date = new Date(elmt.props * 1000);
  return `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
}

const Polls = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const inform = location.state;
  useEffect(() => {
    dispatch(Polute(inform));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const pollsData = useSelector((state) => state.polsReducer);

  return (
    <div className="table-gas">
      <table>
        <div className="table-end">
          <thead className="table-headings">
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
          <tbody className="table-color-body">
            {pollsData?.map((elmt) => (
              <tr key={uuidv4()}>
                <td className="gas-pollution">{elmt.main.aqi}</td>
                <td className="gas-pollution">{elmt.components.co}</td>
                <td className="gas-pollution">{elmt.components.no}</td>
                <td className="gas-pollution">{elmt.components.no2}</td>
                <td className="gas-pollution">{elmt.components.o3}</td>
                <td className="gas-pollution">{elmt.components.so2}</td>
                <td className="gas-pollution">
                  <Time props={elmt.dt} />
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
      {pollsData.lenght === 0 && (
        <div className="color-text">
          Data for this city is currently unavailable
        </div>
      )}
    </div>
  );
};

export default Polls;
