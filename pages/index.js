import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import data from '../utils/data';
import NextLink from 'next/link';
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <Card>
                  <CardActionArea>
                    <CardMedia 
                    component="img"
                    image={product.image}
                    title={product.name}
                    >
                    </CardMedia>
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </NextLink>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
 
  )
}

export default Home;