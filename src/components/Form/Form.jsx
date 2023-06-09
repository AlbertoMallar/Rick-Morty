import React from "react"
import { useState } from "react"
import validate from "../Validation";
import styles from './Form.module.css'
import { useNavigate } from "react-router-dom";



export default function Form(){

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email:'',
        password:''
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
    
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        });
    
        setErrors(
            validate({
                ...userData,
                [e.target.name]: e.target.value,
        }))
      }

    function submitHandler(event) {
        event.preventDefault();
        const inputErrors = validate(userData);
        setErrors(inputErrors);

        if (Object.keys(inputErrors).length === 0) {
            navigate('/Home')
      }
    }



    return (
        <div>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <label className={styles.words}>Email</label>
                    <input
                    type="text"
                    placeholder="Ingresa tu correo"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    />
                    <span className={styles.alertMessages}>{errors.email}</span>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.words}>Password</label>
                    <input
                    type="password"
                    placeholder="Ingresa tu password"
                    value={userData.password}
                    name="password"
                    onChange={handleChange}
                    />
                    <span className={styles.alertMessages}>{errors.password}</span>
                </div>
                {errors.email || errors.password ? null : (
                <button className={styles.words} type="submit">Ingresa</button>
        )}
            </form>
        </div>
    )
}