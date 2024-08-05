import React from 'react';
import Root from './src/root';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Root />
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
