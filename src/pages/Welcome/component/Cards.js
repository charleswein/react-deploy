import React from "react";
import Card from "./Card";
import Image from "./Image";
import PropTypes from 'prop-types';

class Cards extends React.Component {

  render() {
    const { cards } = this.props;
    return (
      <div>
        <h2>Select card shirt:</h2>
        <div className="cards-container">
          {cards.map((elem) => {
            return (
              <Card
                className="card"
                text={elem.text}
                key={elem.key}
                onClick={this.props.onClick}
              >
                <Image
                  className="card-img"
                  url={process.env.PUBLIC_URL + elem.url}
                />
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.exact({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired
}
export default Cards;
