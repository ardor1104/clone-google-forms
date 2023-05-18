export type StateType = {
  leftMenu: {
    isVisible: boolean;
  };
  mainPage: {
    listViewTitle: null | 'today' | 'week' | 'month' | 'before';
  };
};
