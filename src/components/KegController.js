import React from 'react';
import KegNew from './KegNew';
import KegList from './KegList';
//import KegDetail from './KegDetail';
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

  handleChangeKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({page: "edit"});
    this.setState({selectedKeg: selectedKeg});
  }

  handleKegEdit = (kegToEdit) => {
    const newKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({masterKegList: newKegList});
    this.handlePageChange("home");
  }

  render(){
    let displayedPage = null;
    if (this.state.page === "home") {
      displayedPage = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangeKeg} />
    } else if (this.state.page === "new") {
      displayedPage = <KegNew
        onKegNew={this.handleKegNew} />
    } else if ((this.state.page === "edit") && (this.state.selectedKeg != null)) {
      displayedPage = <KegEdit
        keg={this.state.selectedKeg}
        onKegEdit={this.handleKegEdit} />
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
