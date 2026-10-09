import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      isSubmitted: false
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };

  handleRulesChange = (e) => {
    this.setState({ acceptRules: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleBack = () => {
    this.setState({ isSubmitted: false });
  };

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div>
          <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
          <table className="table">
            <tbody>
              <tr>
                <td>acceptRules</td>
                <td>{this.state.acceptRules ? 'true' : 'false'}</td>
              </tr>
              <tr>
                <td>address</td>
                <td>{this.state.address}</td>
              </tr>
              <tr>
                <td>city</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>country</td>
                <td>{this.state.country}</td>
              </tr>
              <tr>
                <td>email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>password</td>
                <td>{this.state.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <form name="myForm" onSubmit={this.handleSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            value={this.state.address}
            onChange={this.handleAddressChange}
          ></textarea>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input 
            type="text" 
            className="form-control" 
            name="city" 
            id="city" 
            value={this.state.city}
            onChange={this.handleCityChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select 
            id="country" 
            name="country" 
            className="form-control"
            value={this.state.country}
            onChange={this.handleCountryChange}
          >
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={this.state.acceptRules}
                onChange={this.handleRulesChange}
              />
              Accept Rules
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

}
// END
