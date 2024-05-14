import './ChangePassword.css';
import React, { useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import { fetchChangePassword } from '../../store/feautures/authSlice';



function ChangePassword(){
    const container = useRef(null);
    const save_change = useRef(null);

    /*const [email,setEmail] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');


    const changePassword = () =>{
        alert("ChangePassword çalıştı.")
        console.log("işlem.. ",authController.changePassword);

        fetch(authController.changePassword,{
            method: 'PUT',
            headers:{'Content-Type' : 'application/json'

            },
            body: JSON.stringify({
                'email' : email,
                'oldPassword' : oldPassword,
                'newPassword' : newPassword,
                'confirmPassword' : confirmPassword
            })     
    }).then(data=>data.json())
    .then(data=>{
    console.log(data);
    if(data.status === 200){
        alert(data.message);
        window.location.href = '/login';
    }
    })
    .catch(error => {
        console.error('Hata:', error);
    });
    }

    useEffect(() => {
        const saveChange = save_change.current;
        const containerRef = container.current;

        if (saveChange && containerRef) {
            saveChange.addEventListener("click", () => {
                containerRef.classList.remove("save-change-mode");
            });
        }
    },[]);*/

    const dispatch=useDispatch();

    const[password, setPassword] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const changePassword = () =>{
        setPassword({
            ...password
        });
        dispatch(fetchChangePassword(password));
    };

    return (
        <>
        <div className="container">
            <div className="forms-container">
                <div className="change-password">
                    <form action="#" className="changepassword-form">

                        <h2 className="title">Change Password</h2>

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input onChange={(evt) =>{
                                setPassword({
                                    ...password,
                                    email: evt.target.value
                                });
                            }} type="email" placeholder="E-Mail" />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input  onChange={(evt) =>{
                                setPassword({
                                    ...password,
                                    oldPassword: evt.target.value
                                });
                                }} type="text" placeholder="Old Password" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input onChange={(evt) =>{
                                setPassword({
                                    ...password,
                                    newPassword: evt.target.value
                                });
                                }} type="email" placeholder="New Password" />
                        </div> 

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input onChange={(evt) =>{
                                setPassword({
                                    ...password,
                                    confirmPassword: evt.target.value
                                });
                                }} type="text" placeholder="Confirm Password" />
                        </div> 

                        <input onClick={changePassword} type="button" value="Change Password" className="btn solid" />
                        
                    </form>
                    
                </div>
            </div>

        
        </div>
   </>
    )
}

export default ChangePassword;