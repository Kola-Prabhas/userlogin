// A custom component that encapsulates form label and it's input field

function FormInput({ name, inputType = 'text', value = '', onInputChange }) {
	// Lower casing the name to use this attribute name and value for updating the state object 
	const lowerCasedName = name[0].toLowerCase() + name.slice(1); 	
	
	return (
		<div className="form-group">
			<label
				htmlFor={lowerCasedName}
				className='form-label'
			>
				{name}
			</label>

			<input
				type={inputType}
				className="form-control"
				id={lowerCasedName}
				name={lowerCasedName}
				onChange={onInputChange}
				required				
			/>
		</div>
	);
}



// This is same as FormInput but it uses additional parameter `value` to denote the value in the input field


function EditInput({ name, inputType = 'text', value = '', disabled = false, onInputChange }) {
	// Lower casing the name to use this attribute name and value for updating the state object 
	const lowerCasedName = name[0].toLowerCase() + name.slice(1);

	return (
		<div className="form-group">
			<label
				htmlFor={lowerCasedName}
				className='form-label'
			>
				{name}
			</label>

			<input
				type={inputType}
				className="form-control"
				id={lowerCasedName}
				name={lowerCasedName}
				onChange={onInputChange}
				value={value}
				disabled={disabled}
				required
			/>
		</div>
	);
}


export { FormInput, EditInput };