import styles from '../styles.module.scss'

const EmailSocial = () => {
	return (
		<>
			<a className={styles.social} href='mailto:hello@reallygreatsite.com'>
				<img width='40' height='40' src='public/svg/footer/email.svg' />
				hello@reallygreatsite.com
			</a>
		</>
	)
}

export default EmailSocial
