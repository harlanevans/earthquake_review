import React from "react";
import { RowCenter, Title, Paragraph, ShockCard, Button } from "../../styles/Global";
import SForm from './SForm'

class Shock extends React.Component {
  state = { showEdit: false,}

  toggle = () => {
    this.setState({showEdit: !this.state.showEdit})
  }

  render() {
    const { id, deleteShock, editShock, location, duration} = this.props;
    return (
      <ShockCard>
        <Paragraph>Location: {location}</Paragraph>
        <Paragraph>Duration: {duration}</Paragraph>
        {/* edit form */}
        <Button onClick={() => deleteShock(id)}>Delete Shock</Button>
        <Button onClick={this.toggle}>Edit Shock</Button>
        {this.state.showEdit ? (
          <SForm toggleEdit={this.toggle} {...this.props} editShock={editShock}/>
        ) : (
          <></>
        )}
      </ShockCard>
    );
  }
}

export default Shock;
