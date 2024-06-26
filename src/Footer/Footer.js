import React from 'react';
import styles from './Footer.module.css';
import { UseSelector, useSelector } from 'react-redux';
import { selectToggle } from '../Header/HeaderSlice';

const Footer = () => {
    const toggle = useSelector(selectToggle);
    return (
        <footer className={`${ toggle.isVisible ? styles.footer_container : styles.night}`}> 
            <h1>Footer :)</h1>
            <p>I'd like to use this section of the web app to put any final thoughts and possibly leave room for the footer.<br></br>
            I'd like to use this part of the web app for closing thoughts and possible future projects.</p>
            <button onClick={() => window.scrollTo({top: 0, left:0, behavior:'smooth'})} className={styles.to_top}>Back to top</button>
        </footer>
    )
}

export default Footer;