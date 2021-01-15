import React, { FunctionComponent } from 'react';
import './styles.scss';

interface Props {
  isTrue: boolean;
  fallback?: any;
}

const RenderIf: FunctionComponent<Props> = (props) => {
  const {
    children,
    isTrue,
    fallback,
  } = props;

  if (isTrue) {
    return children;
  }
  if (fallback) {
    if (typeof fallback === 'string') {
      return (
        <div className="render-if__fallback-wrapper">
          {fallback}
        </div>
      );
    }
    return fallback;
  }
  return null;
};

export default RenderIf;
