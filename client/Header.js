import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div id='title'>
        <h1>YourDiaries</h1>
      </div>
      <div id='navbar'>
        <ul>
          <Link to="/"><li>My Homepage</li></Link>
          <Link to="/journals"><li>My Journals</li></Link>
          <Link to="/entries"><li>My Entries</li></Link>
          <Link to="/support"><li>Support</li></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;