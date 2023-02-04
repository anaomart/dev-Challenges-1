import React from 'react';

const NavOverlay = ({setMenu}) => {
    return (
        <div>
            <nav>
            <ul className="nav navOverlay" onClick={()=> setMenu(false)} >
                <span className='x'>&#10005;</span>
                <li><a href='/' >Home</a></li>
                <li><a href='/' >Collection</a></li>
                <li><a href='/' >About</a></li>
                <li><a href='/' >Contact</a></li>
            </ul>
          </nav>
        </div>
    );
}

export default NavOverlay;
