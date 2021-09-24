import React from "react";
import Head from "next/head";
import NavLink from "next/link";
import { AppBar, Toolbar, Typography, Container, Link } from "@material-ui/core";
import useStyles from "../utils/styles";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NavLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Next Shop</Typography>
            </Link>
          </NavLink>
          <div className={classes.grow}></div>
          <div>
            <NavLink href="/cart" passHref>
              <Link>Cart</Link>
            </NavLink>
            <NavLink href="/login" passHref>
              <Link>Login</Link>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved. Next Shop</Typography>
      </footer>
    </div>
  );
}

export default Layout;
