import styles from './Menu.module.scss'

const Menu = () => {
	return (
		<>
			<section className={styles.menu}>
				<div className={styles.container}>
					<div className={styles.left}>
						<h1 className={styles.label}>Распространите немного радости</h1>
						<p>
							<span>Penguin Family Cakes</span> смешивает вкусы с намерением. Мы
							знаем, что еда - это не просто питание, это опыт. В тёплом кексе
							есть утешение, в сладких каплях - радость, а в мягкой подушечке
							хлеба - счастье. Мы предлагаем свежеиспеченную выпечку, которая
							призвана вызывать улыбки наших клиентов. Мы с нетерпением ждём что
							сможем испечь вам счастье!
						</p>

						<p className={styles.text}>
							Мы с нетерпением ждём что сможем испечь вам счастье!
						</p>
					</div>
					<div
						data-aos='zoom-in-left'
						data-aos-duration='900'
						className={styles.right}
					>
						<img width={650} height={500} src='/public/menuPhoto.jpeg' alt='photoMenu' />
					</div>
				</div>
			</section>
		</>
	)
}

export default Menu
