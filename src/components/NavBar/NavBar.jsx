import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './NavBar.module.css'
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar({onSearch, addRandom}){

    const location = useLocation()

    if (location.pathname === '/'){
        return null;
    }
    
    return (
        <div className={styles.navBarContainer}>
            <SearchBar onSearch={onSearch} addRandom={addRandom}/>
            <NavLink className={styles.appWords} to={'./About'}
            >About</NavLink>
            <NavLink to={'./Home'}
            >Home</NavLink>
            <NavLink to={'./Favorites'}
            >Favorites</NavLink>
        </div>
    )
}
