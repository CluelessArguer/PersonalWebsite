import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage/Homepage';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV==='PRODUCTION') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Homepage />
);
