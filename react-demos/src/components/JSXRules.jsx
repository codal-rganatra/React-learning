import React from 'react'

const JSXRules = props => {
    return (
        <div>
            <h1>JSX Rules</h1>
            <ul>
                <li><p>JSX must return a single parent</p></li>
                <li><p>JSX elements should be properly closed</p></li>
                <li><p>In JSX we need to use Camelcase typo for attributes (Use className instead of Class attribute, Use htmlFor in label instead of simple for)</p></li>
            </ul>
        </div>
    )
}


export default JSXRules