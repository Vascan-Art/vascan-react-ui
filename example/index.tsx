import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'vascan-component-library-tsdx';
import 'vascan-component-library-tsdx/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Button variant="primary">Button up</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
