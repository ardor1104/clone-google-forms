import { FormsViewOutputSerializer } from 'api/serializer.type';

export type StateType = {
  viewType: 'goBoardView' | 'listView';
  filter: 'all' | 'own' | 'notOwned';
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  keyword: string;
  list: undefined | Array<FormsViewOutputSerializer>;
};
