import { useDispatch, useSelector } from "react-redux"
import Card from "./Card/Card"
import { filterCards, orderCards, reset } from "../Redux/actions/actions"






export function Favorites({onClose}) {
   //const {myFavorites} = useSelector((state) => state)
   const myFavorites = useSelector((state) => state.myFavorites)

   const dispatch = useDispatch()
   
   function handleOrder(e){
      e.preventDefault()
      const {name, value} = e.target;
      dispatch(orderCards(value));
   }

   function handleFilter(e){
      e.preventDefault()
      const {name, value} = e.target;
      dispatch(filterCards(value))
   }

   function handleReset(e){
      e.preventDefault()
      dispatch(reset())
   }
   return (
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
         {myFavorites.map((character) => ( 
            <Card key={character.id} character={character} onClose={onClose} />))
         }
      </div>
      )
}