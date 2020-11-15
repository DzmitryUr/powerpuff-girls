import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import store from './store';

import ShowPage from './containers/ShowPage';
import EpisodeDetailsPage from './containers/EpisodeDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={ShowPage} />
        <Route path="/episodes/:id" exact component={EpisodeDetailsPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
