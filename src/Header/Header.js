import React, {useState, useEffect} from 'react';
import styles from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleH, toggleV } from './HeaderSlice';
import { selectToggle, isDaytime } from './HeaderSlice';

const Header = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [isScroll, setIsScroll] = useState(0);
    const [isVisible, setIsVisible] = useState(isDaytime())
    const dispatch = useDispatch();
    const toggle = useSelector(selectToggle);
    
    console.log(toggle)
    const handleVisibility = (e) => {
        dispatch(toggleV(!isVisible));
        setIsVisible(!isVisible);
    };

    const toggleHamburger = (e) => {
        dispatch( toggleH(!isToggle) );
        setIsToggle(!isToggle);
        let scroll = window.scrollY;
        setIsScroll(scroll);
        if ( !isToggle ) {
            document.body.classList.add('scrollbar-lock');
            document.body.style.overflow = "hidden";
            document.body.style.top = `${scroll * -1}px`;
        } else {
            document.body.classList.remove('scrollbar-lock');
            document.body.style.overflow = "hidden scroll";
            document.body.style.top = null;
            document.body.style.left = null;
            document.body.style.right = null;
            document.body.style.bottom = null;
            document.body.style.position = null;
            window.scrollBy(0, isScroll);
        }
    }


    return (
        <header className={`${styles.header_main_container} ${toggle.isVisible ? '': styles.night}`} id='header_main_container' >

            
            <div className={styles.title}>
                <h1 className={styles.namef}>Arian</h1>
                <h1 className={styles.namel}>Jaihooni</h1>
            </div>


            <div className={`${styles.hamburger} ${toggle.isToggle ? styles.active : "" }`} id="ham" onClick={(e) => toggleHamburger()} >
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>



            <div className={`${styles.nav} ${toggle.isToggle ? styles.nav_mobile : "" }`} id="nav" >
                <nav id='header'>
                    <ul className={`${styles.nav_ul}`}>
                        <li className={styles.nav_li_contact}>Skills</li>
                        <li className={styles.nav_li_about}>About</li>
                        <li className={styles.nav_li_projects}>Projects</li>
                    </ul>
                </nav>
            </div>

            <div className={`${isVisible ? styles.visibility : styles.nightVisibility}`} onClick={(e) => handleVisibility()}></div>

            <div className={`${toggle.isToggle ? styles.main_mobile : ""}`} onClick={(e) => toggleHamburger()}></div>
            
        </header>
    )
}

export default Header;