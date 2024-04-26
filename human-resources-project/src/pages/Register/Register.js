import { useRef, useEffect} from 'react';
import '../Register/Register.css'



function Register(){

    const sign_in_btn = useRef(null);
    const sign_up_btn = useRef(null);
    const container = useRef(null);

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

					<h2 className="title">Add an Employee</h2>

					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Employee Name" />
					</div>

					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Employee Surname" />
					</div>

                    <div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Phone" />
					</div> 

                    <div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Address" />
					</div> 

                    <div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="ID Number" />
					</div> 
                    <div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Occupation" />
					</div>
                    <div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Department" />
					</div>

					<input type="submit" value="Add" className="btn solid" />
					
				</form>
				
			</div>
		</div>

	
	</div>


       </>
    )
}

export default Register;