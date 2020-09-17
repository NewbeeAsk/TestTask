import React from 'react';
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const navbarStyle = makeStyles({
    active: {
        color: "gold",
    },
    nav:{
        backgroundColor: "burlywood",
    },
    link: {
        paddingLeft: "5px",
        paddingTop: "10px",
        color: "blue",
    }
})

const Navbar = (props) => {
    const classes = navbarStyle();
    return (
        <nav className={classes.nav}>
            <Grid className={classes.link} item xs={1}>
                <NavLink to="/Curiosity" activeClassName={classes.active}>Curiosity</NavLink>
            </Grid>
            <Grid className={classes.link} item xs={1}>
                <NavLink to="/Opportunity" activeClassName={classes.active}>Opportunity</NavLink>
            </Grid>
            <Grid className={classes.link} item xs={1}>
                <NavLink to="/Spirit" activeClassName={classes.active}>Spirit</NavLink>
            </Grid>
        </nav>
    );
}
export default Navbar;