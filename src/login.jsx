import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormInput } from "./components";
import './index.css';


const initialUserData = {
	email: '',
	password: ''
};


function Login() {
	const [userData, setUserData] = useState(initialUserData);
	const navigate = useNavigate();
	const storedDetails = useRef();


	useEffect(() => {
		storedDetails.current = JSON.parse(localStorage.getItem("details"));
	}, [storedDetails]);


	function handleChange(e) {
		const data = {
			...userData,
			[e.target.id]: e.target.value
		};

		setUserData(data);		
	}


	function handleSubmit() {

		if (storedDetails.current) {
			const item = storedDetails.current.find(item => item.email == userData.email);

            // item can be null if the localStorage is empty            
			if (item && item.password == userData.password) {
				alert('User loggedIn successfully!');
				navigate('/home', {state: item});
				return;
			} 

			alert("Incorrect Password");
			return;
		}
			
		alert("User account not found. Register first to login");
	}

	return (
		<div className="form-wrapper">
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="heading">Login</h1>
				<FormInput name='Email'  onInputChange={handleChange} />                
				<FormInput name='Password' inputType="password" onInputChange={handleChange} />

				<div className="row">
					<button type='submit' className="btn btn-primary col-sm-6">Login</button>
					<p className="col-sm-6">Don't have an account <Link to='/signup'>sign up?</Link> </p>
				</div>			
			</form>
		</div>
	)
}


export { Login as default };