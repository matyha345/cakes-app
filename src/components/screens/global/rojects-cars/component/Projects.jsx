import { NavLink } from 'react-router-dom'
import styles from '../ProjectsCars.module.scss'

const Projects = ({ title, img, price }) => {
	return (
		<div data-aos='zoom-in' data-aos-duration='900' className={styles.cards}>
			<NavLink to={'/products'}>
				<div className={styles.card}>
					<img src={img} alt={title} />
					<h2>{title}</h2>
					<p>{price} ₽</p>
				</div>
			</NavLink>
		</div>
	)
}

export default Projects
