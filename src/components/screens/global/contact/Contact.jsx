import styles from './Contact.module.scss'
import ContactInner from './contactinner/ContactInner'

const Contact = () => {
	return (
		<>
			<section className={styles.wrapper} id='about'>
				<div className={styles.container}>
					<h1>В закулись</h1>
					<div className={styles.blog}>
						<div
							data-aos='fade-right'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='600'
							className={styles.images}
						>
							<img src='/w.jpeg' alt='avatar' />
						</div>
						<div className={styles.content}>
							<h2>Познакомьтесь с нами!</h2>
							<p>
								Наша команда постоянно готовит что-то новое на нашей тестовой
								кухне, чтобы мы могли предложить сезонные специальности наряду с
								нашими хитами продаж.
							</p>
						</div>
					</div>
				</div>
			</section>
			<ContactInner />
		</>
	)
}

export default Contact
