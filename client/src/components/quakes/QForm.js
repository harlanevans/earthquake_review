import React from "react";
import { Form, Button } from "../../styles/Global";

class QForm extends React.Component {
  state = {
    intensity: "",
    location: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const quake = { ...this.state };
    this.props.addQuake(quake);
    this.props.toggleForm();
    // this.props.history.push("/quakes");
  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
    console.log(e);
  };

  render() {
    const { intensity, location } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          placeholder="Intensity!!!!"
          style={styles.input}
          onChange={this.handleChange}
          value={intensity}
          name="intensity"
        />
        <input
          placeholder="Location"
          style={styles.input}
          onChange={this.handleChange}
          value={location}
          name="location"
        />
        <div>
          <Button onSubmit={this.handleSubmit}>Submit</Button>
        </div>
      </Form>
    );
  }
}

export default QForm;

const styles = {
  input: {
    padding: "1em",
    border: "solid 1px brown"
  }
};
