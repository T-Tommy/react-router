import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link to='/red'>Red</Link>
      <Link to='/yellow'>Yellow</Link>
      <Link to='/blue'>Blue</Link>
    </nav>
  );
}
