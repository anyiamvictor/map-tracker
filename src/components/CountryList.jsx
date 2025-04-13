import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Messsage from './Message';


function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner/>
  }
  if (!cities.length) {
    return <Messsage messgae= 'No cities yet Add a city by clicking on a city'/>
  }

  // const countries = cities.reduce((arr, city) => { 
  //   if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji, }]
  //   else return arr;
  // }, []);
  
  const countries = Array.from(
  new Map(
    cities.map(city => [city.country, { country: city.country, emoji: city.emoji }])
  ).values()
);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
         <CountryItem country={country} />
      ))}
    </ul>
  )
}

export default CountryList