import React from 'react'
import PropTypes from 'prop-types';

export default class Card extends React.Component {
 render(){
  return (
  <div className={this.props.className} onClick={this.props.onClick}>
   <div className="card-header">{this.props.text}</div>
   {this.props.children}
  </div>
  )
 }
};
Card.propTypes = {
 className: PropTypes.string.isRequired,
 onClick: PropTypes.func.isRequired,
 text: PropTypes.string.isRequired,
 children: PropTypes.element.isRequired
}