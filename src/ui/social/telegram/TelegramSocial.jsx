import styles from '../styles.module.scss'

const TelegramSocial = () => {
	return (
		<>
			<a
				className={styles.social}
				href='https://telegram.im/@irene_arrow'
				target='_blank'
			>
				<img width='40' height='40' src='/public/svg/footer/telegram.svg' />
				telegram/irene_arrow
			</a>
		</>
	)
}

export default TelegramSocial
