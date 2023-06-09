import styles from './ContactInner.module.scss'

const ContactInner = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.blog}>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						data-aos-duration='900'
						className={styles.imageOne}
					>
						<img src='/public/contact_one.jpeg' alt='one' />
					</div>
					<div className={styles.content}>
						<h2>Тестовая кухня"</h2>
						<p>
							Наша команда постоянно готовит что-то новое на нашей тестовой
							кухне, чтобы мы могли предложить сезонные специальности наряду с
							нашими хитами продаж.
						</p>
					</div>
				</div>
				<div className={styles.blog}>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						data-aos-duration='900'
						className={styles.imageTwo}
					>
						<img src='/public/contact_two.jpeg' alt='one' />
					</div>
					<div className={styles.content}>
						<h2>Продуктов питания</h2>
						<p>
							Наша команда постоянно готовит что-то новое на нашей тестовой
							кухне, чтобы мы могли предложить сезонные специальности наряду с
							нашими хитами продаж.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactInner
