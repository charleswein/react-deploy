import React from 'react'
import PropTypes from 'prop-types';
class Button extends React.Component{
 render(){
  return <button className='btn btn-primary' onClick={this.props.onClick}>{this.props.text}</button>
 }
}
export default Button;

Button.propTypes = {
 onClick: PropTypes.func.isRequired,
 text: PropTypes.string.isRequired
}
