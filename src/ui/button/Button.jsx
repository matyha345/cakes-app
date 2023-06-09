import styles from './button.module.scss'

//TODO: The button has been temporarily translated into a div (please pay attention).

const Button = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.btn}>Получить немного вкусняшек</div>
			</div>
		</>
	)
}

export default Button
