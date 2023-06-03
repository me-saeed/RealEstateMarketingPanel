import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/index.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { master } from '@/redux/store/reducers/combineReducer';
import { ToastContainer } from 'react-toastify';
import LanguageContextProvider from '@/common/contexts/LanguageContext';
import Root from '@/routes';
const queryClient = new QueryClient();
const store = createStore(master, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <LanguageContextProvider>
          <Root />
        </LanguageContextProvider> 
        <ToastContainer limit={1} />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
