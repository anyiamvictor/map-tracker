import React from 'react';
import AppNav from '../components/AppNav.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Map from '../components/Map.jsx';
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout