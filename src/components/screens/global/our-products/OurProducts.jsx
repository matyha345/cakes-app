import { projectsOur } from '../../../helpers/our_projects/OurProjectsList'
import Footer from '../../../../layout/footer/Footer'
import styles from './OurProducts.module.scss'
import OurCard from './our_card/OurCard'
import BackLink from '../../../../ui/back-link/BackLink'
import Heading from '../../../../layout/header/Heading'


const OurProducts = () => {

	return (
		<>
			<Heading />
			<section className={styles.wrapper}>
				<BackLink />
				<div className={styles.container}>
					<h1 className={styles.title}>Наши продукты</h1>
					<div className={styles.content}>
						{projectsOur.map((project, index) => {
							return (
								<OurCard
									key={index}
									title={project.title}
									img={project.img}
									index={index}
								/>
							)
						})}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default OurProducts
