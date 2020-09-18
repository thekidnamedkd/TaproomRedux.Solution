import React from "react";
import KegList from "./KegList";
import KegAdd from "./KegAdd";
import KegDetail from "./KegDetail";
import KegEdit from "./KegEdit";

class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleChangingSelectedKeg = (kegId) => {
    const selectedKeg = this.state.masterKegList
      .filter(keg => keg.kegId === kegId)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  };

  handleAddKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList
    .concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  };

  handleDeletingKeg = (kegId) => {
    const newMasterKegList = this.state.masterKegList
      .filter(keg => keg.kegId !== kegId);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handlePintSold = (kegId) => {
    const pintsLeft = this.state.masterKegList
      .filter(pintsLeft => pintsLeft.kegId === kegId)[0];
    if (pintsLeft.kegAmt > 0) {
      pintsLeft.kegAmt --;
    }
    const editedMasterKegList = this.state.masterKegList
      .filter(pintsLeft => pintsLeft.kegId !== this.state.selectedKeg.kegId)
      .concat(pintsLeft);
    this.setState({
      masterKegList: editedMasterKegList,
    });
  } 

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.kegId !== this.state.selectedKeg.kegId)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = (
      <KegEdit 
        keg = {this.state.selectedKeg} 
        onKegEdit = {this.handleEditingKeg}
        />
      );
      buttonText = "Return to Keg List";
    
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
      <KegDetail 
        keg = {this.state.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onPintSold={this.handlePintSold}
      />
      );
      buttonText = "Return to Keg List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <KegAdd 
          onKegAddCreation={this.handleAddKegToList} 
        />
      );
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState = ( 
        <KegList 
          keg = {this.state.selectedKeg}
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default KegController;