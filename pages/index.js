import React from "react"
import PropTypes from "prop-types"
import template from "../public/template"

const Home = (props) => (
  <div>
    {!props.children.isLoggedIn ? (
      <p>
        <b>You're not logged in yet !</b>
      </p>
    ) : (
      <b>Welcome</b>
    )}
  </div>
)

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default template(Home)
