import React from 'react'

const Weather = ({temperature =20}) => {
  return (
    <div>
        <h2>Weather Component</h2>
        {console.log(temperature)}
        {temperature < 15 && <h1>It's Cold Outside</h1>}
        {temperature >= 15 && temperature < 25 && <h1>It's nice Outside</h1>}
        {temperature >= 25 && <h1>It's Hot Outside</h1>}
    </div>
  )
}

export default Weather