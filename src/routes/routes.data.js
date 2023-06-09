import App from '../App'
import OurProducts from '../components/screens/global/our-products/OurProducts'
import ProductGeneration from '../components/screens/product/ProductGeneration'

export const routes = [
	{
		path: '/',
		component: App
		// auth: false
	},
	{
		path: '/products',
		component: OurProducts
		// auth: false
	},
	{
		path: '/product/:id',
		component: ProductGeneration
		// auth: false
	}
]
