import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: themes[0],
    };
  }

  handleChangeTheme = (themeId) => {
  this.setState({ currentTheme: themes.find((t) => t.id == themeId) });
};


  render() {
    const { currentTheme } = this.state;

    const contextValue = {
      themes,
      currentTheme,
      changeTheme: this.handleChangeTheme,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <div className="p-3">
          <div className="mb-3">
            <ThemeSwitcher />
          </div>
          <Tabs defaultActiveKey="login" id="theme-tabs" className="mb-3">
            <Tab eventKey="login" title="Login">
              <Home />
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <Profile />
            </Tab>
          </Tabs>
        </div>
      </ThemeContext.Provider>
    );
  }
  // END
}

export default App;
