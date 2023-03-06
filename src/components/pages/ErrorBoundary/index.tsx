import { PureComponent } from 'react';

import logger from 'utils/logger';

import { ErrorBoundaryPropsType, ErrorBoundaryStateType } from './index.type';

export default class ErrorBoundary extends PureComponent<
  ErrorBoundaryPropsType,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = {
      hasError: false,
      chunkError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    if (
      error.message.indexOf('chunk') > -1 ||
      error.message.indexOf('Chunk') > -1
    ) {
      return { chunkError: true };
    } else return { hasError: true };
  }

  override componentDidCatch(error: any) {
    logger.error(error);
    if (
      error.message.indexOf('chunk') > -1 ||
      error.message.indexOf('Chunk') > -1
    ) {
      if (window.navigator.onLine) {
        window?.location.reload();
      }
    }
  }

  override render() {
    const { children } = this.props;
    const { hasError, chunkError } = this.state;

    if (hasError) {
      return <div className='error-page'>ERROR</div>;
    } else if (chunkError) {
      return <div>CHUNK ERROR</div>;
    }

    return children;
  }
}
