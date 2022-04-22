import React, { Fragment } from 'react';
import classes from "./Header.module.css";

export const Header = (props) => {

    const handleAboutMe = () => {
        alert('Eric Ciccotti ( yes indeed :D )');
    }

    return (
        <>
            <header className={classes['header']}>
                <h1>Gluxbox</h1>
                <ul>
                    <li onClick={handleAboutMe}>About me</li>
                </ul>
            </header>
        </>
    )
}

export default Header;
