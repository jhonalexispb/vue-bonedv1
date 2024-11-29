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
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Starterkit' },
  {
    title: 'Sample Page',
    icon: 'custom-sample',
    to: '/'
  },
  { header: 'Others' },
  {
    title: 'Menu levels',
    icon: 'custom-level-1',
    to: '#',
    children: [
      {
        title: 'Level 1',
        to: ''
      },
      {
        title: 'Level 1',
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
  },
  {
    title: 'Sub Caption Levels',
    icon: 'custom-level',
    subCaption: 'Caption Collapse',
    to: ''
  },
  {
    title: 'Disabled Menu',
    icon: 'custom-disabled',
    disabled: true,
    to: ''
  },
  {
    title: 'Oval Chip',
    icon: 'custom-info-circle',
    to: '',
    chip: 'Fire',
    chipColor: 'error',
    chipVariant: 'outlined'
  },
  {
    title: 'Documentation',
    icon: 'custom-support',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/',
    type: 'external',
    chip: 'gitbook',
    chipColor: 'info',
    chipVariant: 'flat'
  },
  {
    title: 'Road Map',
    icon: 'custom-roadmap',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap',
    type: 'external'
  }
];

export default sidebarItem;
