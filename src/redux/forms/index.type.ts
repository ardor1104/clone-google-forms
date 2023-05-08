import { FormsViewOutputSerializer } from 'api/serializer.type';

export type StateType = {
  viewType: 'listView' | 'goBoardView';
  filter: 'all' | 'own' | 'notOwned';
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  listViewTitle: null | 'today' | 'week' | 'before';
  list: Array<FormsViewOutputSerializer>;
};
