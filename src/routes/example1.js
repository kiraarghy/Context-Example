import React, { Component } from 'react';

import Highlight from 'react-highlight';
import './boop.css';

const image =
  'https://vignette.wikia.nocookie.net/glee/images/3/31/Jeff_IEP20162.jpeg/revision/latest?cb=20160727230349';

const VisibleContext = React.createContext('hidden');

class Example1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VisibleContext.Provider value="visible">
          <ImageContainer />
        </VisibleContext.Provider>
        <Highlight className="js">
          {`import React, { Component } from 'react';

import Highlight from 'react-highlight';
import './boop.css';

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
`}
        </Highlight>
      </React.Fragment>
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
