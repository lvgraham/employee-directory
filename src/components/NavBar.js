import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

export default function SearchBar(props) {
	return (
		<div>
			<Navbar bg='light' variant='light'>
				<Navbar.Brand href='#home'>Dunder Mifflin Employee Directory</Navbar.Brand>
				<Form inline>
					<FormControl onChange={props.handleInput}type='text' placeholder='Search Employee' className='mr-sm-2' />
					{/* <Button variant='outline-primary'>Search</Button> */}
				</Form>
			</Navbar>
		</div>
	);
}
