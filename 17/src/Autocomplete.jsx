import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      countries: [],
    };
  }

  handleChangeText = async (e) => {
    const term = e.target.value;
    this.setState({ term });

    if (term.length === 0) {
      this.setState({ countries: [] });
      return;
    }

    const res = await axios.get('/countries', { params: { term } });
    this.setState({ countries: res.data });
  };

  render() {
    const { term, countries } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            value={term}
            onChange={this.handleChangeText}
          />
        </form>
        {countries.length > 0 && (
          <ul>
            {countries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
// END
