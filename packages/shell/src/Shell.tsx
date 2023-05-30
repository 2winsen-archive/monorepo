// @ts-no-check
import React from 'react';
const Rfq = React.lazy(() => import('rfq/Rfq'));
const Component = React.lazy(() => import('shared-ui-components/Component'));

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '20em' }}>
      <div style={{ flex: 1, backgroundColor: 'coral' }}>Shell</div>
      <React.Suspense fallback="LOADING Rfq">
        <Rfq />
      </React.Suspense>
      <React.Suspense fallback="LOADING Shared-ui-components">
        <Component />
      </React.Suspense>
    </div>
  );
}

export default App;
