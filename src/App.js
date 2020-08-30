import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import employees from './employees';

class App extends Component {
	state = {
		employees
	};

	render() {
		return (
			<div>
				{/*Header + search bar*/}
				<NavBar />
				<Wrapper>
					{/*list of employees*/}
					{this.state.employees.map((employee) => (
						<EmployeeList
							id={employee.id}
							key={employee.id}
							name={employee.name}
							image={employee.image}
							role={employee.role}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;
