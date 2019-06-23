/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { HelloMessage } from './App'
import {  Message } from './App'
 
 
import registerServiceWorker from './registerServiceWorker'
const element = <HelloMessage />
const element2 = <Message name = "Julia" />  
 
 

ReactDOM.render(<App />, document.getElementById('root')) // this gets overridden by the next line
ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(element2, document.getElementById('root'))
 

registerServiceWorker()