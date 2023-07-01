import style from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';                                                                                                                                                                                                                                                                                                                                                             

export  function Card (props) {
   const {character, onClose, myFavorites, addFav, removeFav} = props;
   const [isFav, setIsFav] = useState(false);
  const [closeButton, setCloseBtn] = useState(true);

  useEffect(() => {
   if (!onClose) {
     setCloseBtn(false);
   }
   }, []);


   useEffect(() => {
      if (myFavorites && character && character.id) {
         myFavorites.forEach((fav) => {
            if (fav.id === character.id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites, character]);

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
      <div>
         <div className={style.container}>
            <img 
               className={style.cardImage} 
               src={character.image} 
               alt='{props.name}'
            />
            {
               isFav ? (
                  <button onClick={handleFavorite} className={style.favoriteButton}>❤️</button>
                     ) : (
                  <button onClick={handleFavorite} className={style.favoriteButton}>🤍</button>
                  )
            }
            <Link to={`/detail/${character.id}`} >
               <h2 className={style.cardWords}>{character.name}</h2>
            </Link>
            {closeButton && (
            <button
               className={style.cardButton}
               onClick={() => {
                  onClose(character.id);
               }}
               >
                  X
            </button>
            )}
         </div>
         
      </div>
   );
}
/*
         <div className={style.atributes}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
*/


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

