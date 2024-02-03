import { EditInput } from "./components";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



function EditDetails() {
	const location = useLocation();
	const savedUserDetails = location.state;

	const [userDetails, setUserDetails] = useState(savedUserDetails);
	
	const storedDetails = useRef();    
	const navigate = useNavigate();


	useEffect(() => {
		storedDetails.current = JSON.parse(localStorage.getItem("details"));
	})
	

	function handleSubmit(e) {
		e.preventDefault();

		const newDetails = storedDetails.current.map(item => {
			if (item.email == userDetails.email) {
				return userDetails;
			}

			return item;
		});
			

		localStorage.setItem('details', JSON.stringify(newDetails));

		alert("Details updated successfully");
		navigate("/");
	}

	function handleChange(e) {
		const details = {
			...userDetails,
			[e.target.id]: e.target.value,
		};

		setUserDetails(details);
	}

	// This check is used to prevent the user from entering the edit page without logging in

	if (!savedUserDetails) return <h1>User not logged In!</h1>
	




	return (
		<div className="form-wrapper">
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="heading">Edit Details</h1>
				<EditInput name='FirstName' onInputChange={handleChange} value={userDetails.firstName} />
				<EditInput name='LastName' onInputChange={handleChange} value={userDetails.lastName} />
				<EditInput name='Email' inputType="email" onInputChange={handleChange} value={userDetails.email} disabled={true} />
				<EditInput name='Password' inputType="password" onInputChange={handleChange} value={userDetails.password} />
				<div className="row">
					<button type='submit' className="btn btn-primary col-sm-6">Save</button>
				</div>
			</form>
		</div>
	);
}

export { EditDetails as default };