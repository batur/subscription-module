import { Component } from 'react';
import { Route, Routes } from 'react-router';

import { Layout } from 'components';
import { Home, NotFound } from 'containers';
export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
