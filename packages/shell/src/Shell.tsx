// @ts-nocheck
import React from 'react';
const Rfq = React.lazy(() => import('app2/Rfq'));

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '20em' }}>
      <div style={{ flex: 1, backgroundColor: 'coral' }}>Shell</div>
      <React.Suspense fallback="LOADING Rfq">
        <Rfq />
      </React.Suspense>
    </div>
  );
}

export default App;
