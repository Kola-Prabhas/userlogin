import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import Details from './editDetails';
import './App.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />	
			
				<Route path="/signup" element={<SignUp />} /> 
				<Route path="/home" element={<Details />} />
				
			</Routes>
			
		</Router>
	)

}


export default App
