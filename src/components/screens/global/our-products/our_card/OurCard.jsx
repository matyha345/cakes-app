import { NavLink } from 'react-router-dom'
import styles from './OurCard.module.scss'

const OurCard = ({ title, img, index }) => {
	return (
		<NavLink to={`/product/${index}`} backLink='/'>
			<ul className={styles.cards}>
				<li className={styles.cards_link}>
					<div className={styles.link}>
						<img width={300} height={300} src={img} alt={title} />
						<h2 className={styles.name}>{title}</h2>
					</div>
				</li>
			</ul>
		</NavLink>
	)
}

export default OurCard
