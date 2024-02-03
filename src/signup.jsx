import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FormInput } from "./components";
import './index.css';



const initialUserDetails = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};


function SignUp() {
	const [userDetails, setUserDetails] = useState(initialUserDetails);
	const navigate = useNavigate();
	const storedDetails = useRef();

	useEffect(() => {
		storedDetails.current = JSON.parse(localStorage.getItem('details'));
	}, [storedDetails]);

	function handleChange(e) {
		const details = {
			...userDetails,
			[e.target.id]: e.target.value
		};

		setUserDetails(details);
	}

	function handleSubmit(e) {
		e.preventDefault();
      
		if (storedDetails.current) {
			const item = storedDetails.current.find(item => item.email == userDetails.email);

			if (item) {
				alert("User already exists!");
				return;
			} 

		}		

		const newDetails = storedDetails.current ? [...storedDetails.current, userDetails]: [userDetails];

		localStorage.setItem("details", JSON.stringify(newDetails));
		storedDetails.current = newDetails;

		alert("User registered successfully!");
		navigate('/');	
	}

	return (
		<div className="form-wrapper">
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="heading">Sign Up</h1>
				<FormInput name='FirstName' onInputChange={handleChange}/>
				<FormInput name='LastName' onInputChange={handleChange}/>
				<FormInput name='Email' inputType="email" onInputChange={handleChange}/>
				<FormInput name='Password' inputType="password" onInputChange={handleChange} />
				<div className="row">
					<button type='submit' className="btn btn-primary col-sm-6">Sign Up</button>
					<p className="col-sm-6">Already an user?  <Link to='/'>Login</Link> </p>
				</div>
			</form>
		</div>
	);
}






export { SignUp as default };