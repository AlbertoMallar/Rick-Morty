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
        <div className={styles.formContainer}>
            <form  onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <label className={styles.words}></label>
                    <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="Users email"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    />
                    <span className={styles.alertMessages}>{errors.email}</span>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.words}></label>
                    <input
                    className={styles.inputBox}
                    type="password"
                    placeholder="Password"
                    value={userData.password}
                    name="password"
                    onChange={handleChange}
                    />
                    <span className={styles.alertMessages}>{errors.password}</span>
                </div>
                <div className={styles.buttonContainer}>
                    {errors.email || errors.password ? null : (
                    <button className={styles.button} type="submit">Log in</button>
                    )}
                </div>
            </form>
        </div>
    )
}