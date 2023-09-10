import React, { useState } from 'react';

import NavbarContext from '../context/NavbarContext';

const NavbarProvider = (props) => {
    const [activePage, setActivePage] = useState();
    return (
        <NavbarContext.Provider value={{ activePage, setActivePage }}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider;