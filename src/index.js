import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'

import App from './App'
import * as serviceWorker from './serviceWorker'

injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Ubuntu|Open+Sans|Montserrat:300,400,500,600&display=swap');  
 

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h2, h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    .social-icon {
        margin: 2px
    }

    .social-icon:hover {
        transform: scale(1.1);
        transition: transform 0.2s linear
    }

    @media screen and (max-width: 760px) {
        h1 {
            font-size: 1em;
            transition: font-size 1s ease-out
        }
    
        h2 {
            font-size: 1.2em;
            transition: font-size 1s ease-out
        }
    }
`

require('dotenv').config()
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
