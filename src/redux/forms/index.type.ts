export type StateType = {
  viewType: 'listView' | 'goBoardView';
  filter: 'all' | 'own' | 'notOwned';
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  list: Array<{
    id: string;
    title: string;
    opened_at: string;
    updated_at: string;
    thumbnail: string;
  }>;
};
