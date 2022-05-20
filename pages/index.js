import React from "react"
import PropTypes from "prop-types"
import template from "../public/template"
import Profile from "../comps/Profile"

const Home = (props) => (
  <div>
    {!props.children.isLoggedIn && (
      <p>
        <b>You're not logged in yet !</b>
      </p>
    )}
    <Profile />
  </div>
)

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default template(Home)
