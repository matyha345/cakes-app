
import EmailSocial from '../../ui/social/email/EmailSocial'
import InstagramSocial from '../../ui/social/instagram/InstagramSocial'
import PhoneCallSocial from '../../ui/social/phone-call/PhoneCallSocial'
import TelegramSocial from '../../ui/social/telegram/TelegramSocial'
import WhatsAppSocial from '../../ui/social/whatsapp/WhatsAppSocial'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.left}>
						<div>
							<img src='/public/svg/logo_footer.svg' alt='logo' />
						</div>
					</div>

					<dir className={styles.right}>
						<h1>Свяжитесь с нами!</h1>

						<ul>
							<li>
								<InstagramSocial />
							</li>

							<li>
								<TelegramSocial/>
							</li>

							<li>
								<PhoneCallSocial />
							</li>

							<li>
								<WhatsAppSocial />
							</li>

							<li>
								<EmailSocial />
							</li>
						</ul>
					</dir>
				</div>
			</div>
		</section>
	)
}

export default Footer
