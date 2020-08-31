import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import employees from './employees';

class App extends Component {
	state = {
		employees,
		searchEmployee: ''
	};
	
	//handling input into search bar
	handleInput = (e) => {
		console.log(e.target.value)
		this.setState({ searchEmployee: e.target.value})
	}

	render() {
		//creating search functionality
		let filteredEmployees = this.state.employees.filter((employee) => {
			return employee.name.toLowerCase().includes(this.state.searchEmployee)
			
		})

		return (
			<div>
				{/*Header + search bar*/}
				<NavBar handleInput={this.handleInput}/>
				<Wrapper>
					{/*list of employees*/}
					{filteredEmployees.map((employee) => (
						<EmployeeList
							id={employee.id}
							key={employee.id}
							name={employee.name}
							image={employee.image}
							role={employee.role}
							email={employee.email}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;
