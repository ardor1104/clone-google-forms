import * as CSS from 'csstype';

export type ChildrenPropType = JSX.Element | Array<JSX.Element>;

interface CSSPropertiesType extends CSS.Properties, CSS.PropertiesHyphen {}

export interface DefaultOverridesType {
  css?: string | CSSPropertiesType;
}

export interface DefaultOverridesComponentPropsType {
  cssStyle?: string;
}
