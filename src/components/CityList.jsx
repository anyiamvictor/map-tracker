import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Messsage from './Message';


function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner/>
  }
  if (!cities.length) {
    return <Messsage messgae= 'No cities yet Add a city by clicking on a city'/>
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <li key={city.id}>
         <CityItem city={city} />
        </li>
      ))}
    </ul>
  )
}

export default CityList