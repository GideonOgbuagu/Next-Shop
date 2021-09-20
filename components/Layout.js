import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import useStyles from '../utils/styles'


function Layout({children}) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Next Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Next Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>
          All right reserved. Next Shop
        </Typography>
      </footer>
    </div>
  )
}

export default Layout
