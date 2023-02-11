import { useState } from 'react';

export default function Form() {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');




const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};


const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};


const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};



const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || Number === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};


const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Fitness Club Registration</h1>
	</div>

	{}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Phone Number</label>
		<input onChange={handlePassword} className="input"
		value={password} type="Number" />

        <label className="label">Adress</label>
		<input onChange={handlePassword} className="input"
		value={password} type="Adress" />

		<button onClick={handleSubmit} className="btn" type="Add member">
		Add member
		</button>

        <button onClick={handleSubmit} className="btn" type="View Member List">
		View Member List
		</button>
	</form>
	</div>
);
}
