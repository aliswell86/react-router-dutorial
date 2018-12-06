import React from 'react';
import Menu from 'components/Menu';
import {Route} from 'react-router-dom';
import {Home, About, Posts} from 'pages';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home} />
      {/*<Route exact path="/about" component={About} />*/}
      <Route path="/about/:name?" component={About} />
      <Route path="/posts" component={Posts} />
    </div>
  );
};

export default App;
