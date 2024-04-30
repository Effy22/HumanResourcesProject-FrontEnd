import './Login.css';
import { useRef, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Login(){

	const sign_in_btn = useRef(null);
    const sign_up_btn = useRef(null);
    const container = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/*const login = () => {
		dispatch(fetchLogin ({username, password})). then(() => {
			navigate.call(null, '/admin-panel');
		});
	} */


    useEffect(() => {
        const signInBtn = document.querySelector("#sign-in-btn");;
        const signUpBtn = document.querySelector("#sign-up-btn");
        const containerRef = document.querySelector(".container");

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
				<form action="#" class="sign-in-form">
					<h2 className="title">Sign in</h2>
					<div className="input-field">
						<i class="fas fa-user"></i>
						<input onChange={(evt) => {setEmail(evt.target.value)}} type="text" placeholder="E-Mail" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input onChange={(evt) => {setPassword(evt.target.value)}} type="password" placeholder="Password" />
					</div>
					<input type="submit" value="Login" className="btn solid" />
					
				</form>

				<form action="#" className="sign-up-form">
					<h2 className="title">Sign up</h2>

                    <div className="input-field">
						<i className="fas fa-envelope"></i>
						<input type="text" placeholder="Name Surname" />
					</div>
				
					<div className="input-field">
						<i className="fas fa-envelope"></i>
						<input type="email" placeholder="Email" />
					</div>

                    <div className="input-field">
						<i className="fas fa-envelope"></i>
						<input type="text" placeholder="Company Name" />
					</div>

                    <div className="input-field">
						<i className="fas fa-envelope" ></i>
							<select name="title" id="title"  >
								<option >Membership Plan</option>
								<option value="month">119.99 TRY/month</option>
								<option value="year">96.99 TRY/month</option>
							</select>
        			</div>

					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="Password" />
					</div>

                    <div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="RePassword" />
					</div>
					<input type="submit" className="btn" value="Sign up" />
					
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
					<button className="btn transparent" id="sign-up-btn">
						Sign up
					</button>
				</div>
				<img  src="https://lovepik.com/images/png-employee.html" className="image" alt="" />
			</div>
			<div className="panel right-panel">
				<div className="content">
					<h3>One of Our Valued Members</h3>
					<p>
						Thank you for being part of our community. Your presence enriches our
          shared experiences. Let's continue this journey together!
					</p>
					<button className="btn transparent" id="sign-in-btn">
						Sign in
					</button>
				</div>
				<img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"  className="image" alt="" />
			</div>
		</div>

		

    </div>           
    </>
           
    )
}

export default Login;