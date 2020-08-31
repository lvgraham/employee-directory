import React from 'react';
import './EmployeeList.css';

function EmployeeList(props) {
	return (
		<div className='card'>
			<div className='img-container'>
				<img alt={props.name} src={props.image} />
			</div>
			<div className='content'>
				<ul>
					<li>
						<strong>Name:</strong> {props.name}
					</li>
					<li>
						<strong>Role:</strong> {props.role}
					</li>
					<li>
						<strong>Email:</strong> {props.email}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EmployeeList;
