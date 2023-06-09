import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
//import characters from './data.js';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/About/Detail';
import Form from './components/Form/Form';
import { Favorites } from './components/Favorites';


function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(id) {

      const isCharacterAdded = characters.find((character) => character.id === Number(id));

      if (isCharacterAdded) {
         window.alert('¡La carta ya está agregada!');
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function addRandom() {
      const minId = 1;
      const maxId = 826;
      const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;;

      const isCharacterAdded = characters.find((character) => character.id === Number(randomId));
      while (isCharacterAdded) {
         // Si el personaje ya está agregado, generar un nuevo ID aleatorio
         randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;;
         isCharacterAdded = characters.find((character) => character.id === randomId);
       }

      axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      

      
   }

   function onClose(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));

      setCharacters(deleted);
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} addRandom={addRandom} />
            <Routes>
               <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path='/About' element={<About/>}/>
               <Route path='/Detail/:id' element={<Detail/>}/>
               <Route path='/' element={<Form/>} />
               <Route path='/Favorites' element={<Favorites/>}/>
            </Routes>
      </div>
   );
}

export default App;
