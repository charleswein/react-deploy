import React from "react";
import { OPTIONS } from "../../../data/options";
import Select from "react-select";
import PropTypes from "prop-types";

class Form extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      emailText,
      selectedOption,
    } = this.props.formData;
    return (
      <div className="container">
        <form className="form">
          <label htmlFor="fn">First Name:</label>
          <input
            id="fn"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.props.onInputChange}
          />
          <label htmlFor="ln">Last Name:</label>
          <input
            id="ln"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.props.onInputChange}
          />
          <label htmlFor="em">Email:</label>
          <input
            id="em"
            type="email"
            name="emailText"
            value={emailText}
            onChange={this.props.onInputChange}
          />
          <label htmlFor="select">Difficulty:</label>
          <Select
            id="select"
            className="select"
            options={OPTIONS}
            defaultValue={selectedOption}
            value={selectedOption}
            onChange={this.props.onSelectChange}
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  formData: PropTypes.shape({
    card: PropTypes.string,
    selectedOption: PropTypes.object,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    emailText: PropTypes.string,
    dataShow: PropTypes.object
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default Form;
