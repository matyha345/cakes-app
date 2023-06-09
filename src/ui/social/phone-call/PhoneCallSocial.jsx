import styles from '../styles.module.scss'

const PhoneCallSocial = () => {
	return (
		<>
			<a className={styles.social} href='tel:+79673503435'>
				<img width='40' height='40' src='/public/svg/footer/phone-call.svg' />
				+7 967 350-34-35
			</a>
		</>
	)
}

export default PhoneCallSocial
