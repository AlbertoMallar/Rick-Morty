import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar({onSearch, addRandom}){

    const location = useLocation()

    if (location.pathname === '/' || location.pathname === '/About'){
        return null;
    }
    
    return (
        <div className={styles.navBarContainer}>
            <SearchBar onSearch={onSearch} addRandom={addRandom}/>
            <NavLink className={styles.appWords} to={'./About'}
            >About</NavLink>
            <NavLink className={styles.appWords} to={'./Home'}
            >Home</NavLink>
            <NavLink className={styles.appWords} to={'./Favorites'}
            >Favorites</NavLink>
        </div>
    )
}
