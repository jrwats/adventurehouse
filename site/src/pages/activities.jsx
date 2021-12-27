import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

const Activities = () => {
  return (
    <div>
      <Header />
      <div>
        <Link to="/hikes">Hikes</Link>
      </div>
      <div>
        <Link to="/dining">Dining</Link>
      </div>
    </div>
  );
};

export default Activities;
