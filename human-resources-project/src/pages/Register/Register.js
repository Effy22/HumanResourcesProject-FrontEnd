import React, { useRef, useEffect, useState} from 'react';
import './Register.css';
import authController from '../../config/AuthController';





function Register(){

    const sign_in_btn = useRef(null);
    const sign_up_btn = useRef(null);
    const container = useRef(null);

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [company,setCompany] = useState('');
    const [taxNumber,setTaxNumber] = useState('');



    const register = () =>{
        alert("Register çalıştı.")
        console.log("işlem.. ",authController.registerManager);

        fetch(authController.registerManager,{
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name' : name,
                'surname' : surname,
                'email' : email,
                'phone': phone,
                'address': address,
                'company' : company,
                'taxNumber' : taxNumber 
            })
        }).then(data=> data.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
    } 



    useEffect(() => {
        const signInBtn = sign_in_btn.current;
        const signUpBtn = sign_up_btn.current;
        const containerRef = container.current;

        if (signInBtn && signUpBtn && containerRef) {
            signInBtn.addEventListener("click", () => {
                containerRef.classList.remove("sign-up-mode");
            });

            signUpBtn.addEventListener("click", () => {
                containerRef.classList.add("sign-up-mode");
            });
        }

        return () => {
            if (signInBtn && signUpBtn) {
                signInBtn.removeEventListener("click", () => {
                    containerRef.classList.remove("sign-up-mode");
                });

                signUpBtn.removeEventListener("click", () => {
                    containerRef.classList.add("sign-up-mode");
                });
            }
        };
    }, []);
    
    return(
       <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">

                            <h2 className="title">Register</h2>

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setName(evt.target.value);
                                }} type="text" placeholder="Name" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input  onChange={(evt) =>{
                                    setSurname(evt.target.value); }} type="text" placeholder="Surname" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setEmail(evt.target.value); }} type="email" placeholder="E-Mail" />
                            </div> 

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setPhone(evt.target.value); }} type="text" placeholder="Phone Number" />
                            </div> 

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setAddress(evt.target.value); }} type="text" placeholder="Address" />
                            </div> 
                            
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setCompany(evt.target.value); }} type="text" placeholder="Company Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input onChange={(evt) =>{
                                    setTaxNumber(evt.target.value); }} type="text" placeholder="Tax Number" />
                            </div>

                            <input onClick={register} type="button" value="Get an Offer" className="btn solid" />
                            
                        </form>
                        
                    </div>
                </div>

            
            </div>
       </>
    )
}

export default Register;