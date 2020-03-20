import React from "react";
import { Form, Button } from "../../styles/Global";

class SForm extends React.Component {
  state = {
    duration: "",
    location: ""
  };

  componentDidMount() {
    if (this.props.toggleEdit) {
      const { location, duration } = this.props;
      this.setState({ duration: duration, location: location });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const shock = { ...this.state };
    if (this.props.toggleEdit) {
      this.props.editShock(this.props.id, shock)
      this.props.toggleEdit()
    } else {
      this.props.addShock(shock);
    }
    // this.props.toggleForm();
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
    const { duration, location } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          placeholder="duration!!!!"
          style={styles.input}
          onChange={this.handleChange}
          value={duration}
          name="duration"
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

export default SForm;

const styles = {
  input: {
    padding: "1em",
    border: "solid 1px brown"
  }
};
