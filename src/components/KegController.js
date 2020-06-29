import React from 'react';
import KegNew from './KegNew';
import KegList from './KegList';
//import KegDetail from './KegDetail';
//import KegEdit from './KegEdit';

class KegController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleKegNew = (newKeg) => {
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newKegList});
  }

  render(){

    return (
      <React.Fragment>
        <KegNew
          onKegNew={this.handleKegNew} />
        <KegList
          kegList={this.state.masterKegList} />
      </React.Fragment>
    );
  }
}

export default KegController;
