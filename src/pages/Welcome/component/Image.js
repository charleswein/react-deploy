import React from 'react'

class Image extends React.Component{
 render(){
  return <img className={this.props.className} src={this.props.url} alt={this.props.alt} key={this.props.key}/>
 }
}
export default Image