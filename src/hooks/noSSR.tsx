import dynamic from 'next/dynamic';
import React from 'react';

// eslint-disable-next-line react/jsx-no-useless-fragment
// eslint-disable-next-line react/destructuring-assignment

function NoSSRWrapper(props: { children: any }) {
  const { children } = props;
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
