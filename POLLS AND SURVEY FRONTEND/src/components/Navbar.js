import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#eee' }}>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link to="/create-poll" style={{ marginRight: '20px' }}>Create Poll</Link>
            <Link to="/available-polls">Available Polls</Link>
        </nav>
    );
};

export default Navbar;
