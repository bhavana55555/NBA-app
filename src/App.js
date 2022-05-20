import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import Criteria1 from './components/criteria1';


function App() {
	return (
		<Router>
			<Navbar />
		
			<div className="container">
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" component={EditExercise} />
				<Route path="/create" component={CreateExercise} />
				<Route path="/user" component={CreateUser} />
				<Route path="/criteria1" component={Criteria1} />
			</div>
		</Router>
	);
}

// export default function Page1(){
// 	return(
// 		<div>
// 			<ExercisesList/>
// 			<UsersList/>
// 			<VisionsList/>
// 		</div>
// 	);
// }
export default App;
