import React, { Fragment } from 'react';
import Nav from './src/navigation';
import { Loader } from './src/component';


const App=()=> (
    <Fragment>
      <Nav />
      <Loader/>
    </Fragment>
    
);
export default App;
