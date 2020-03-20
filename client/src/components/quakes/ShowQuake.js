import React from "react";
import { RowCenter, Title, Button } from "../../styles/Global";
import axios from "axios";
import Shock from "./Shock";
import SForm from "./SForm";

class ShowQuake extends React.Component {
  state = { quake: {}, shocks: [], showForm: false };

  componentDidMount() {
    axios.get(`/api/quakes/${this.props.match.params.id}`).then(res => {
      this.setState({ quake: res.data });
    });
    axios.get(`/api/quakes/${this.props.match.params.id}/shocks`).then(res => {
      this.setState({ shocks: res.data });
    });
  }

  renderShocks = () => {
    return this.state.shocks.map(shock => (
      <div style={{ margin: "0em 1em" }}>
        <Shock {...shock} editShock={this.editShock} deleteShock={this.deleteShock}/>
      </div>
    ));
  };

  addShock = shock => {
    axios.post(`/api/quakes/${this.state.quake.id}/shocks`, shock).then(res => {
      this.setState({ shocks: [res.data, ...this.state.shocks] });
    });
  };

  editShock = (id, shock) => {
    axios
      .put(`/api/quakes/${this.state.quake.id}/shocks/${id}`, shock)
      .then(res => {
        const newShocks = this.state.shocks.map(shock => {
          if (shock.id === id) return res.data;
          return shock;
        });
        this.setState({ newShocks });
      });
  };

  deleteShock = (id) => {
    axios.delete(`/api/quakes/${this.state.quake.id}/shocks/${id}`).then(res => {
        this.setState({shocks: this.state.shocks.filter(shock => shock.id !== id)})
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const { quake, showForm } = this.state;
    return (
      <div>
        <RowCenter>
          <Title>{quake.location}</Title>
        </RowCenter>
        <RowCenter>
          <Button onClick={this.toggleForm}>Add Shock</Button>
        </RowCenter>
        {showForm ? (
          <SForm addShock={this.addShock} toggle={this.toggleForm} />
        ) : (
          <></>
        )}
        <RowCenter>{this.renderShocks()}</RowCenter>
      </div>
    );
  }
}

export default ShowQuake;
