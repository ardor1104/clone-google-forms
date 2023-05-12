import { FormsViewOutputSerializer } from 'api/serializer.type';

export type StateType = {
  viewType: 'goBoardView' | 'listView';
  filter: 'all' | 'own' | 'notOwned';
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  keyword: string;
  listViewTitle: null | 'today' | 'week' | 'month' | 'before';
  list: undefined | Array<FormsViewOutputSerializer>;
};
