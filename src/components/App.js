import React from 'react';
import KegController from './KegController';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div className="container text-center">
        <Header />
        <KegController />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
