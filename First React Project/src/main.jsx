import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <h1>My Custom App!</h1>
    )
}
// can't call this object as component cause of syntax
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me!'
// }

// can call this object as component
const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit Google</a>
)

const anotherUser = "Faiqa Batool"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'Visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
 
)
