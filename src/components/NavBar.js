import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar() {
	return (
		<div>
			<Navbar bg='light' variant='light'>
				<Navbar.Brand href='#home'>Dunder Mifflin Employee Directory</Navbar.Brand>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-primary'>Search</Button>
				</Form>
			</Navbar>
		</div>
	);
}
