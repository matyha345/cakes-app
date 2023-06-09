import { useNavigate } from 'react-router-dom'
import './BackLink.module.scss'

import { BsCaretLeftSquareFill } from 'react-icons/bs'

const BackLink = ({ component }) => {
	const navigate = useNavigate()

	let redirectPath = ''

	if (component === 'OurProducts') {
		redirectPath = '/products'
	} else {
		redirectPath = '/'
	}

	return (
		<button
			onClick={() => {
				navigate(redirectPath)
			}}
		>
			<BsCaretLeftSquareFill fill='#38495b' fontSize={30} />
		</button>
	)
}

export default BackLink
