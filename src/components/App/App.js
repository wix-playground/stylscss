import React from 'react';
import {Input as CoreInput} from '../Core/Input';
import {Input as BackofficeInput} from '../Backoffice/Input';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Components</h1>
        <h2>
          Core Input
        </h2>
        <CoreInput/>
        <hr/>
        <h2>
          Backoffice Input
        </h2>
        <h3>
          All
        </h3>
        <BackofficeInput size="small" placeholder="This is small"/>
        <BackofficeInput size="medium" placeholder="This is medium"/>
        <BackofficeInput size="large" placeholder="This is large"/>
        <h3>
          Disabled
          <BackofficeInput size="small" disabled placeholder="This is disabled"/>
        </h3>
      </div>
    );
  }
}

export default App;
