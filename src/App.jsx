import '../src/assets/_index.scss'
import Home from './components/screens/global/home/Home'
import Philosophy from './components/screens/global/philosophy/Philosophy'
import '../public/fonts/stylesheet.scss'
import Menu from './components/screens/global/menu/Menu'
import ProjectsCars from './components/screens/global/rojects-cars/ProjectsCars'
import Contact from './components/screens/global/contact/Contact'
import Footer from './layout/footer/Footer'

function App() {
	return (
		<>
			<Home />
			<Philosophy />
			<Menu />
			<ProjectsCars/>
			<Contact />
			<Footer />
		</>
	)
}

export default App
