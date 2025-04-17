import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom';
    
function Map() {
   const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
      <div className={styles.mapContainer}>
      Map Data: POSITION: {lat} and {lng}
          <button
  style={{ fontSize: 30, }}
  onClick={() => setSearchParams({ lat: 3884, lng: 876766 })}
>
  Click to set
</button>
      </div>
  )
}

export default Map