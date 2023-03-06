import { ChildrenPropType } from 'components/globalType';

export type ErrorBoundaryPropsType = {
  children: ChildrenPropType;
};

export type ErrorBoundaryStateType = { hasError: boolean; chunkError: boolean };
