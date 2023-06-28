import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './routes';
import store from './store/store';

const persistor = persistStore(store);

function App() {
  return (
    <main className="h-full min-w-360px min-h-screen flex flex-col">
      <Suspense fallback={null}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </Suspense>
    </main>
  );
}

export default App;
