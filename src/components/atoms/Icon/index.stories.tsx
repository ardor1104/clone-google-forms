import styled from 'styled-components';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';

import Icon from '.';
import { IconsType } from './index.type';

type NameOptionsType = { [key: string]: IconsType };

const StyledIcon = styled(Icon)<{ color: string }>`
  color: ${(props) => props.color};
`;

export default {
  title: 'atoms/Icon',
  component: Icon,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘 컴포넌트',
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof StyledIcon> = () => {
  const nameOptions: NameOptionsType = {
    Add: 'Add',
    AddCollaborator: 'AddCollaborator',
    AdditionalFunction: 'AdditionalFunction',
    AddSection: 'AddSection',
    Answer: 'Answer',
    AppsMenu: 'AppsMenu',
    Checkboxes: 'Checkboxes',
    CheckboxGrid: 'CheckboxGrid',
    Copy: 'Copy',
    Date: 'Date',
    DefaultMenu: 'DefaultMenu',
    Delete: 'Delete',
    DownArrow: 'DownArrow',
    Download: 'Download',
    DragAndDrop: 'DragAndDrop',
    Dropdown: 'Dropdown',
    File: 'File',
    FileUpload: 'FileUpload',
    Gear: 'Gear',
    GetQuestion: 'GetQuestion',
    GoogDocs: 'GoogDocs',
    GoogDrive: 'GoogDrive',
    GoogForms: 'GoogForms',
    GoogleForm: 'GoogleForm',
    GoogleLogo: 'GoogleLogo',
    GoogSheets: 'GoogSheets',
    GoogSlides: 'GoogSlides',
    Help: 'Help',
    Image: 'Image',
    Info: 'Info',
    LinearScale: 'LinearScale',
    Link: 'Link',
    ListView: 'ListView',
    MultipleChoice: 'MultipleChoice',
    MultipleChoiceGrid: 'MultipleChoiceGrid',
    OpinionOnAnAnswer: 'OpinionOnAnAnswer',
    Palette: 'Palette',
    Paragraph: 'Paragraph',
    PopoverMenu: 'PopoverMenu',
    Preview: 'Preview',
    Print: 'Print',
    Redo: 'Redo',
    ScriptEditor: 'ScriptEditor',
    Search: 'Search',
    ShortAnswer: 'ShortAnswer',
    ShortcutKey: 'ShortcutKey',
    SortOptions: 'SortOptions',
    Star: 'Star',
    Time: 'Time',
    Title: 'Title',
    Undo: 'Undo',
    Upload: 'Upload',
    Video: 'Video',
  };

  const name: any = select('name', nameOptions, 'Add');
  const width = number('width', 100);
  const fill = color('color', '#2b2b2b');

  return <StyledIcon name={name} width={width} color={fill} />;
};
