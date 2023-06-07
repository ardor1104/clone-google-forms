export interface ModalType<name, props = null> {
  name: name;
  props: props;
}

export type EditFormsTitleType = ModalType<
  'editFormsTitle',
  {
    formsId: string;
    formsTitle: string;
  }
>;

export type ModalsType = EditFormsTitleType;

export type StateType = Array<ModalsType>;
