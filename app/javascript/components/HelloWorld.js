import React from "react"
import PropTypes from "prop-types"

import {Button} from 'reactstrap';



class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <Button color="danger">Danger!</Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
