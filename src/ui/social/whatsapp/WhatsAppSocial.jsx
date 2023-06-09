import styles from '../styles.module.scss'

const WhatsAppSocial = () => {
	return (
		<>
			<a
				className={styles.social}
				href='https://wa.me/79673503435'
				target='_blank'
			>
				<img width='40' height='40' src='public/svg/footer/whatsapp.svg' />
				WhatsApp
			</a>
		</>
	)
}

export default WhatsAppSocial
