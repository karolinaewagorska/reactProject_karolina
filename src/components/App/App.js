import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from "./App.module.css";

const App = () => {
  const items = [
    {
      value: "Create new app",
      isDone: true
    },
    {
      value: "Get new job",
      isDone: false
    },
    {
      value: "Find new friends",
      isDone: true
    },
    {
      value: "Learn new language",
      isDone: false
    }
  ];

  return ( 
  <div className={styles.wrap}>
    <h1 className={styles.title}>TO DO LIST</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={4} />
  </div>);
};

export default App;
