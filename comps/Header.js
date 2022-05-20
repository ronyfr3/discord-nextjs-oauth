import React from "react"
import PropTypes from "prop-types"
import * as settings from "../settings"

class Header extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  UNSAFE_componentWillMount() {
    if (this.props.isLoggedIn) {
      return (this.isLoggedIn = this.props.isLoggedIn)
    } else {
      if (this.props.children)
        return (this.isLoggedIn = this.props.children.isLoggedIn)
    }
  }

  render() {
    return (
      <nav style={{boxShadow: "0 0 5px rgba(0,0,0,0.5)", padding: "10px 0"}}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            textDecoration: "none",
            listStyle: "none",
          }}
        >
          <li>
            <a
              href={`https://discordapp.com/api/oauth2/authorize?client_id=${settings.clientID}&redirect_uri=${settings.redirect_uri}&response_type=code&scope=guilds%20identify`}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
