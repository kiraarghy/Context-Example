import React, { Component } from 'react';

import Highlight from 'react-highlight';
import './boop.css';

const image =
  'https://vignette.wikia.nocookie.net/glee/images/3/31/Jeff_IEP20162.jpeg/revision/latest?cb=20160727230349';

const visibility = {
  hide: {
    visibility: 'hidden'
  },
  show: {
    visibility: 'visible'
  }
};

const VisibleContext = React.createContext(visibility.hide);

function VisibilityButton(props) {
  return (
    <button onClick={props.changeVisibility}>
      {' '}
      Change Visibility of Jeff{' '}
    </button>
  );
}

class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: visibility.hide
    };
    this.toggleVisibility = () => {
      this.setState(stat => ({
        visibile:
          this.state.visibile === visibility.hide
            ? visibility.show
            : visibility.hide
      }));
    };
  }
  render() {
    return (
      <React.Fragment>
        <VisibleContext.Provider value={this.state.visibile}>
          <VisibilityButton changeVisibility={this.toggleVisibility} />
          <ImageContainer />
        </VisibleContext.Provider>
        <Highlight className="js">
          {`import React, {Component} from 'react';

const image =
  'https://vignette.wikia.nocookie.net/glee/images/3/31/Jeff_IEP20162.jpeg/revision/latest?cb=20160727230349';

const visibility = {
  hide: {
    visibility: 'hidden'
  },
  show: {
    visibility: 'visible'
  }
};

const VisibleContext = React.createContext(visibility.hide);

function VisibilityButton(props) {
  return (
    <button onClick={props.changeVisibility}> Change Visibility of Jeff </button>
  )
}

class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: visibility.hide
    };
    this.toggleVisibility = () => {
      this.setState(stat => ({
        visibile:
          this.state.visibile === visibility.hide
            ? visibility.show
            : visibility.hide
      }));
    };
  }
  render() {
    return (
      <VisibleContext.Provider value={this.state.visibile}>
        <VisibilityButton changeVisibility={this.toggleVisibility} />
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
      {visibility => <img {...props} src={image} style={visibility} alt={'Jeff Goldblum looking pensively at the camera'}/>}
    </VisibleContext.Consumer>
  );
}

export default Example2;

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
      {visibility => (
        <img
          {...props}
          src={image}
          style={visibility}
          alt={'Jeff Goldblum looking pensively at the camera'}
        />
      )}
    </VisibleContext.Consumer>
  );
}

export default Example2;
