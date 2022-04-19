import React from 'react'
import Card from './Card'
import Header from './Header'
import './App.css'
import Sdata from './Sdata'

function ncard(val){
  return(
    <Card 
      title={val.title}
      image={val.image}
      link={val.link}
      />
  )
}

const App = () => {
  return (
<>
    
      <Header />
      <div className='div' >
    {Sdata.map(ncard)}

    </div>
    </>
  )
}

export default App