import React from "react";
import {
  RowCenter,
  Title,
  Paragraph,
  QuakeCard,
  Button
} from "../../styles/Global";
import axios from "axios";
import { Link } from 'react-router-dom';

import QForm from "./QForm";

class Quakes extends React.Component {
  state = {
    quakes: [],
    showForm: false
  };

  componentDidMount() {
    axios.get("/api/quakes").then(res => {
      this.setState({ quakes: res.data });
    });
  }

  renderQuakes = () => {
    return this.state.quakes.map(quake => (
      <QuakeCard style={{ margin: "0em 1em" }}>
        <Title>Location {quake.location}</Title>
        <Paragraph>Intensity: {quake.intensity}</Paragraph>
        <Button>
          <Link to={{ pathname: `/quakes/${quake.id}` }}>View Quake</Link>
        </Button>
      </QuakeCard>
    ));
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addQuake = quake => {
    axios.post("/api/quakes", quake).then(res => {
      this.setState([res.data, ...this.state.quakes]);
    });
  };

  render() {
    return (
      <div>
        <RowCenter>
          <Title>All Quakes</Title>
        </RowCenter>
        <RowCenter style={{ padding: "2em 0em" }}>
          <Button onClick={this.toggleForm}>New Quake</Button>
        </RowCenter>
        {this.state.showForm ? (
          <QForm addQuake={this.addQuake} toggleForm={this.toggleForm} />
        ) : (
          <></>
        )}
        <RowCenter>{this.renderQuakes()}</RowCenter>
      </div>
    );
  }
}

export default Quakes;
