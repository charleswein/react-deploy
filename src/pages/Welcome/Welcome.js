import React from "react";
import { connect } from "react-redux";

import Cards from "./component/Cards";
import Form from "./component/Form";
import Button from "./component/Button";
import {LocalWelcome} from '../../localStorage/Local';

import { dataForm } from "../../data/dataForm";
import { dataCards } from "../../data/dataCards";
import {getDataFromWelcome,getBoardData} from "../../redux/actions/actionsWelcome"
import PropTypes from 'prop-types';
import './welcome.scss'


class Welcome extends React.Component {

  state = { ...dataForm, ...dataCards };

  //form
  handleInputChange = (e) => {
    const target = e.target,
      value = target.value,
      name = target.name;
    this.setState({ [name]: value });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  //card
  handleCard = (e) => {
    const target = e.target.attributes.src.textContent;
    this.setState({ card: target });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, selectedOption, emailText, card } = this.state;
    this.setState(
      {
        card: null,
        selectedOption: null,
        firstName: "",
        lastName: "",
        emailText: "",
        showData: {
          firstN: firstName,
          lastN: lastName,
          emailT: emailText,
          selectedOpt: selectedOption.value,
          backSideCard: card,
        },
      },
      () => {
        const matchData = {...this.state.showData}
        LocalWelcome.Data = matchData;
        this.props.getDataFromWelcome(matchData)
        this.props.getBoardData(matchData.selectedOpt)
        this.props.history.push("./game");
      }
    );
  };
  render() {
    return (
      <div className="container">
        <h2>Welcome to MMG!!!</h2>
        <Form
          formData={this.state}
          onInputChange={this.handleInputChange}
          onSelectChange={this.handleChange}
        />
        <>
          <h1>Rules</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim
            debitis unde iste alias. Officiis, quaerat! Sapiente beatae, id
            similique consequatur eveniet, praesentium, eum officia dolorem eius
            aliquam velit dignissimos?
          </p>
        </>
        <Cards cards={this.state.cards} onClick={this.handleCard} />
        <Button text="Отправить" type="submit" onClick={this.onFormSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataFromWelcome: (showData) => dispatch(getDataFromWelcome(showData)),
    getBoardData: (selectedOpt) => dispatch(getBoardData(selectedOpt))
  }
}

Welcome.propTypes = {
  getDataFromWelcome: PropTypes.func.isRequired,
  getBoardData: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Welcome)

