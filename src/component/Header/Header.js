import React from 'react';
import Circle from '../Circle/Circle';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import './Header.css'

const Header = () => {
    return (
        <div>
             <section className='banner'>
              <Navbar></Navbar>
              <Post></Post>
              <Circle></Circle>
            </section>
        </div>
    );
};

export default Header;