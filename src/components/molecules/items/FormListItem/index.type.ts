import { FormsViewOutputSerializer } from 'api/serializer.type';

export interface FormListItemType
  extends Pick<FormsViewOutputSerializer, 'id' | 'title' | 'owner'> {
  date: string;
  isShowDateAsTime?: boolean;
}
