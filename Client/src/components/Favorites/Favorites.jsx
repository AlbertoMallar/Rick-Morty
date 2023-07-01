import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, reset } from "../../Redux/actions/actions";
import style from './favorites.module.css'




export default function Favorites() {
   
   const dispatch = useDispatch()
   const favorites = useSelector((state) => state.myFavorites)

   
   function handleOrder(e) {
      e.preventDefault() 
      dispatch(orderCards(e.target.value));
   }

   function handleFilter(e){
      e.preventDefault()
      dispatch(filterCards(e.target.value))
   }

   function handleReset(e){
      e.preventDefault()
      dispatch(reset())
   }
   return (
      <div className={style.filterContainer}>
         <div>
            <select onChange={handleOrder} name='order' defaultValue={'DEFAULT'}>
               <option value='DEFAULT' disable>Select order</option>
               <option value='Ascendente'>Ascendente</option>
               <option value='Descendente'>Descendente</option>
            </select>
            <select onChange={handleFilter} name='filter' defaultValue={'DEFAULT'}>
               <option value='DEFAULT' disable>Select filter</option>
               <option value='Male' disable>Male</option>
               <option value='Female'>Female</option>
               <option value='Genderless'>Genderless</option>
               <option value='unknown'>unknown</option>
            </select>
            <button onClick={handleReset}>Reset</button>
         </div>
         <Cards characters={favorites}/>
      </div>
      );
};