import './Login.css'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchLogin} from '../../store/feautures/authSlice';
import {useNavigate} from 'react-router-dom';


function Login(){

	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

  // Kullanıcı giriş yapmışsa ve rolüne göre yönlendirme yap
  const login = () => {
    dispatch(fetchLogin({ email, password })).then((response) => {
        console.log(response); // Yanıtı konsola yazdır
        if (response.payload && response.payload.data && response.payload.data.token) {
            const token = response.payload.data.token;
			const email = response.payload.data.email;
            localStorage.setItem('jwtToken', token);
			localStorage.setItem('email', email);
			const gelenRol = response.payload.data.role;
            if (gelenRol === 'MANAGER') {
                navigate('/manager');
            } else if (gelenRol === 'EMPLOYEE') {
                navigate('/register');
            }else if (gelenRol === 'ADMIN'){
				navigate('/company');
			}
        } else {
            console.error('Yanıtta token bulunamadı.');
        }
    });
}


    return(
      <>
			<div className="container">
				<div className="forms-container">
					<div className="signin-signup">
						<form action="#" class="sign-in-form">
							<h2 className="title">Login</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input onChange={(evt) => {setEmail(evt.target.value)}} type="text" placeholder="E-Mail" />
							</div>
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input onChange={(evt) => {setPassword(evt.target.value)}} type="password" placeholder="Password" />
							</div>
							<input onClick={login} type="button" value="Login" className="btn solid" />
							
						</form>

				
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>New to our community ?</h3>
							<p>
							Workforce Solutions offers opportunities as a platform specialized in human 
							resources management! Join now and take part in a dynamic environment!
							</p>
							<button  onClick={() => { window.location.href = '/register'; }}className="btn transparent" id="sign-up-btn">
								Register
							</button>
						</div>
					</div>
				
				</div>

				

			</div>           
    </>
           
    )
}

export default Login;