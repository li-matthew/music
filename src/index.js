import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const app = <BrowserRouter basename="/music">
		<App />
	</BrowserRouter>


ReactDOM.render(app, document.getElementById('root'));
