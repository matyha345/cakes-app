import styles from './Philosophy.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

const Philosophy = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.texts}>
						<span></span>
						<h1
							data-aos='zoom-in-left'
							data-aos-duration='900'
							className={styles.text}
						>
							Свежеиспеченные выпечка, чтобы вызвать у вас улыбку
						</h1>
					</div>
				</div>
			</section>
		</>
	)
}

export default Philosophy
