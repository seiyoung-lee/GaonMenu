import React from 'react';
import './styles.scss'

import Logo from '../assets/images/gaonLogo.png';
import classNames from "classnames";


import CustomContainer from '../partials/CustomContainer';

const NavBar = (props) => {
    const { isFixed } = props;
    
    return (
            <div
            className={classNames({ "custom-navbar": true, "fixed-navbar": isFixed })}
            >
                <CustomContainer verticalPadding = {false} horizontalPadding = {true}>
                <div className="custom-navbar-content">
                    <div className="custom-navbar-logo">
                        <img src  = {Logo} alt = "Logo of Restaurant"/>
                    </div>
                </ div>
                </CustomContainer>
            </div>
    );
}



export default NavBar;