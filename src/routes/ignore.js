import React, { Component } from 'react';

const image =
  'https://vignette.wikia.nocookie.net/glee/images/3/31/Jeff_IEP20162.jpeg/revision/latest?cb=20160727230349';

const VisibleContext = React.createContext('hidden');

class Example1 extends React.Component {
  render() {
    return (
        <VisibleContext.Provider value="visible">
          <ImageContainer />
        </VisibleContext.Provider>
    );
  }
}

function ImageContainer(props) {
  return (
    <div>
      <Image />
    </div>
  );
}

function Image(props) {
  return (
    <VisibleContext.Consumer>
      {visibility => <img {...props} src={image} visibility={visibility} />}
    </VisibleContext.Consumer>
  );
}

export default Example1;
