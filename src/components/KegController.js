import React from 'react';
import KegNew from './KegNew';
import KegList from './KegList';
import KegDetails from './KegDetails';
import KegEdit from './KegEdit';

class KegController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      selectedKeg: null,
      masterKegList: []
    };
  }

  handlePageChange = (arg) => {
    this.setState({page: arg});
    this.setState({selectedKeg: null});
  }

  handleKegNew = (newKeg) => {
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newKegList});
    this.handlePageChange("home");
  }

  handleChangeKeg = (id, page) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({page: page});
    this.setState({selectedKeg: selectedKeg});
  }

  handleKegDelta = (id, delta) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    selectedKeg.pints += (selectedKeg.pints+delta>=0) ? delta : 0;
    this.handleKegEdit(selectedKeg);
  }

  handleKegEdit = (kegToEdit) => {
    const newKegList = this.state.masterKegList
      .filter(keg => keg.id !== kegToEdit.id)
      .concat(kegToEdit);
    this.setState({masterKegList: newKegList});
    this.handlePageChange("home");
  }

  handleKegDelete = (id) => {
    const newKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newKegList});
    this.handlePageChange("home");
  }

  render(){
    let displayedPage = null;
    if (this.state.page === "home") {
      displayedPage = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangeKeg}
        onKegDelete={this.handleKegDelete}
        onKegDelta={this.handleKegDelta} />
    } else if (this.state.page === "new") {
      displayedPage = <KegNew
        onKegNew={this.handleKegNew} />
    } else if ((this.state.page === "edit") && (this.state.selectedKeg != null)) {
      displayedPage = <KegEdit
        keg={this.state.selectedKeg}
        onKegEdit={this.handleKegEdit} />
    } else if ((this.state.page === "details") && (this.state.selectedKeg != null)) {
      displayedPage = <KegDetails
        keg={this.state.selectedKeg}
        onKegSelection={this.handleChangeKeg}
        onKegDelete={this.handleKegDelete}
        onKegDelta={this.handleKegDelta} />
    }

    return (
      <React.Fragment>
        <button onClick={() => this.handlePageChange("home")}>Home</button>
        <button onClick={() => this.handlePageChange("new")}>New</button>
        {displayedPage}
      </React.Fragment>
    );
  }
}

export default KegController;
