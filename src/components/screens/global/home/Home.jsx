import Heading from '../../../../layout/header/Heading'
import Button from '../../../../ui/button/Button'

import styles from './Home.module.scss'

const Home = () => {
	return (
		<>
			<Heading />
			<section className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.home__item}>
						<div className={styles.home__left}>
							<img
								width={440}
								height={700}
								src='public/home.jpeg'
								alt='photo'
							/>
						</div>
						<div className={styles.text}>
							<p>Мы здесь чтобы испечь вам счастье</p>
							<Button />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
