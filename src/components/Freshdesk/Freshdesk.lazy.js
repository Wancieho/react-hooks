import React, { lazy, Suspense } from 'react';

const LazyFreshdesk = lazy(() => import('./Freshdesk'));

const Freshdesk = props => (
  <Suspense fallback={null}>
    <LazyFreshdesk {...props} />
  </Suspense>
);

export default Freshdesk;
