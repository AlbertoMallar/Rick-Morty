import {React, useState} from 'react';
import styles from './searchBar.module.css'

export default function SearchBar(props) {

   const {onSearch, addRandom} = props;

   const [id, setId] = useState('')

   function handleChange(e) {
      let input = e.target.value;
      setId(input);
   }
   
   return (
      <div className={styles.searchBarContainer}>
         <input 
         className={styles.searchBarInput} 
         onChange={handleChange} 
         value={id} 
         name='search' 
         type='search'
         placeholder="Ingrese ID del personaje"
          />
         <button 
         className={styles.searchBarButton} 
         onClick={() => onSearch(id)}>
            Show
         </button>
         <button 
         className={styles.searchBarButton}
         onClick={() => addRandom()}
         >
            Random
         </button>
      </div>
   );
}
