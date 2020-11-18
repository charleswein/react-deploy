import React from 'react'
import './Loader.scss'

const Loader = () => {
 return (
  <div className="container-loader">
   <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   <div><h1>Loading...</h1></div>
  </div>
 )
}
export default Loader