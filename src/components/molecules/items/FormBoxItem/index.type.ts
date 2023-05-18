import { FormsViewOutputSerializer } from 'api/serializer.type';

export interface FormBoxItemType
  extends Pick<FormsViewOutputSerializer, 'id' | 'title' | 'thumbnail'> {
  date: string;
}
