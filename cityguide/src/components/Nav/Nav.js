import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div class="nav">
			<Link>Home</Link>
			<Link>Categories</Link>
			<Link>Contact Us</Link>
		</div>
	);
}

export default Nav;
