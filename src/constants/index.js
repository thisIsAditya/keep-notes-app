export const NOTES_FILTER = {
  priority: [],
  page: { key: 'page', value: 0 },
};

export const convertPxToRem = (pxValue = 0) => `${pxValue * 0.0625}rem`;

export const leftbarWidth = '5vw';

export const priorityToDataMap = {
  0: {
    name: 'Urgent and Important',
    variant: 'Danger',
  },
  1: {
    name: 'Urgent but Not Important',
    variant: 'Info',
  },
  2: {
    name: 'Important but Not Urgent',
    variant: 'Warning',
  },
  3: {
    name: 'Not Urgent and Not Important',
    variant: 'Light',
  },
};
