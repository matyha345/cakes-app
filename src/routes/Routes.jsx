import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { routes } from './routes.data'
import ScrollToTop from '../utils/scrollToTop'


const Router = () => {
	return (
		<BrowserRouter> 
			<ScrollToTop />
			<Routes >
				{routes.map(hyperborea => {
					return (
						<Route
							key={hyperborea.path}
							path={hyperborea.path}
							element={<hyperborea.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
