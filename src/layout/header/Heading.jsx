import { useNavigate } from 'react-router-dom'
import styles from './Heading.module.scss'
import InstagramSocial from '../../ui/social/instagram/InstagramSocial'
import WhatsAppSocial from '../../ui/social/whatsapp/WhatsAppSocial'

const Heading = () => {
	const nav = useNavigate()
	return (
		<>
			<section className={styles.heading}>
				<div className={styles.container}>
					<a className={styles.logo} href='/'>
						Family Cake
					</a>
					<ul>
						<li>
							<a
								onClick={() => {
									nav('#about' && '/')
								}}
								href='#about'
							>
								О нас
							</a>
						</li>
						<li>
							<a href='/products'>Наши продукты</a>
						</li>
						<li>
							<InstagramSocial />
						</li>
						<li>
							<WhatsAppSocial />
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Heading
