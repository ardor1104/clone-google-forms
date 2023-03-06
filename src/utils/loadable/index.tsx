import { lazy, Suspense, memo } from 'react';

const loadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/function-component-definition
  return memo(function response(props: any) {
    return (
      <Suspense fallback={<div />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  });
};

export default loadable;
