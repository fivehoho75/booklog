import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, BookLog, Book, NotFoundPage } from 'pages';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:mode(log|book)" component={Home} />
        <Route exact path="/logs" component={BookLog} />
        <Route exact path="/book" component={Book} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
