import style from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

export  function Card (props) {
   const {character, onClose, myFavorites, addFav, removeFav} = props;
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      if (myFavorites && character && character.id) {
         myFavorites.forEach((fav) => {
            if (fav.id === character.id) {
               setIsFav(true);
            }
         });
      }
   }, [props.myFavorites, props.character]);

   function handleFavorite(){
      if (isFav){
         setIsFav(false);
         removeFav(character.id);
      } else {
            setIsFav(true);
            addFav(character);
         }
      }


   return (
      <div className={style.container}>
         <div className={style.imageContainer}>
            <img 
               className={style.cardImage} 
               src={character.image} 
               alt='{props.name}'
            />
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
                     ) : (
                  <button onClick={handleFavorite}>🤍</button>
                  )
            }
            <Link to={`/detail/${character.id}`} >
               <h2 className={style.cardWords}>{character.name}</h2>
            </Link>
            <button 
            className={style.cardButton} 
            onClick={() => {
               onClose(character.id);
            }}>X</button>
         </div>
         <div className={style.atributes}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
      </div>
   );
}


export function mapDispatchToProps(dispatch){
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state) {
   return {
   myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

