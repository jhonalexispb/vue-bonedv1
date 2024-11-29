export interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  subCaption?: string;
  class?: string;
  extraclass?: string;
  type?: string;
}

const horizontalItems: menu[] = [
  {
    title: 'Sample Page',
    icon: 'custom-sample',
    to: '/'
  },
  {
    title: 'Menu levels',
    icon: 'custom-level-1',
    to: '#',
    children: [
      {
        title: 'Level 1',
        icon: 'custom-level-1',
        to: ''
      },
      {
        title: 'Level 1',
        icon: 'custom-level-1',
        to: '',
        children: [
          {
            title: 'Level 2',
            to: ''
          },
          {
            title: 'Level 2',
            to: '/2.2level',
            children: [
              {
                title: 'Level 3',
                to: ''
              }
            ]
          }
        ]
      }
    ]
  }
];

export default horizontalItems;
