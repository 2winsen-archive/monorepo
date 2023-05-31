// @ts-nocheck
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
const Rfq = React.lazy(() => import('rfq/Rfq'));
const Component = React.lazy(() => import('shared_ui_components/Component'));

const RemoteWrapper = ({ children }) => (
  <ErrorBoundary>
    <React.Suspense>{children}</React.Suspense>
  </ErrorBoundary>
);

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '20em' }}>
      <div style={{ flex: 1, backgroundColor: '#146C94' }}>
        <h1>Shell</h1>
      </div>
      <RemoteWrapper>
        <Rfq />
      </RemoteWrapper>
      <RemoteWrapper>
        <Component />
      </RemoteWrapper>
    </div>
  );
}

export default App;
