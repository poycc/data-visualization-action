import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import ErrorBoundary from '../ErrorBoundary';

const LazyLoad = (path: string) => {
  const Component = lazy(() => import(`src/pages/${path}`));
  return () => (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoad;
