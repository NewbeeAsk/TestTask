import React from 'react';
import s from './Header.module.css';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%',
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={s.header}>
                <img className={classes.img} alt="complex" src="https://on-desktop.com/ru/images/wp.php?path=/wps/Space_Mars_planet_029860_.jpg&wp=17" />

        </div>
    );
}
export default Header;