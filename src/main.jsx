import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/_index.scss'
import './assets/_reset.scss'
import Router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
