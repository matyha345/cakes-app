import styles from './ProductGeneration.module.scss'

import { useParams } from 'react-router-dom'
import { projectsOur } from '../../helpers/our_projects/OurProjectsList'
import Heading from '../../../layout/header/heading'
import Footer from '../../../layout/footer/Footer'
import BackLink from '../../../ui/back-link/BackLink'

const ProductGeneration = () => {
	const { id } = useParams()
	const projectId = projectsOur[id]

	return (
		<>
			<Heading />
			<section className={styles.wrapper}>
				<BackLink path='/products' component='OurProducts' />
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.images}>
							<img width={800} height={800} src={projectId.img} alt='#' />
						</div>
						<div className={styles.product}>
							<h2 className={styles.title}>{projectId.title}</h2>

							<p className={styles.text}>{projectId.text}</p>

							<div className={styles.price}>{projectId.price} ₽</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ProductGeneration
