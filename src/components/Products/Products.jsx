import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './productsStyles'

const products = [
	{
		id: 1,
		name: 'Shoes',
		description: 'Running Shoes',
		price: '$5',
		image:
			'https://www.tennisnuts.com/images/product/full/Nike-Zoom-Vomero-9-Mens-Running-Shoe-642195_003_A_PREM.jpg',
	},
	{
		id: 2,
		name: 'Macbook',
		description: 'Apple Macbook',
		price: '$10',
		image:
			'https://cdn.idropnews.com/wp-content/uploads/2019/08/07094923/16-inch-macbook-pro.jpeg',
	},
]

const Products = () => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	)
}

export default Products
