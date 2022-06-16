import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >

    <p style={{ textAlign: "center", fontWeight: "bold" }}>
      Hakan Ünal
      <br />
      Sr. Software Developer at Devtagon
    </p>


    <img
      onClick={() => window.location.href = "https://github.com/Hakan-unal"}
      alt="image"
      height={50}
      style={{ margin: 0, cursor: "pointer" }}
      src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
    />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
