import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Next Shop</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Next Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout
