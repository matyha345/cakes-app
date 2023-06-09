import styles from '../styles.module.scss'

const InstagramSocial = () => {
	return (
		<>
			<a
				className={styles.social}
				href='https://www.instagram.com/penguin_family_cakes/'
				target='_blank'
			>
				<img width='40' height='40' src='/svg/footer/instagram.svg' />
				instagram
			</a>
		</>
	)
}

export default InstagramSocial
