import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
  IconLock,
} from '@tabler/icons-react';

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/admin',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Tasks',
    label: '3',
    href: '/admin/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Chats',
    label: '9',
    href: '/admin/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Apps',
    label: '',
    href: '/admin/apps',
    icon: <IconApps size={18} />,
  },
  {
    title: 'Authentication',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: <IconHexagonNumber4 size={18} />,
      },
      {
        title: 'OTP',
        label: '',
        href: '/otp',
        icon: <IconHexagonNumber5 size={18} />,
      },
    ],
  },
  {
    title: 'Users',
    label: '',
    href: '/admin/users',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Requests',
    label: '10',
    href: '/admin/requests',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Trucks',
        label: '9',
        href: '/admin/trucks',
        icon: <IconTruck size={18} />,
      },
      {
        title: 'Cargos',
        label: '',
        href: '/admin/cargos',
        icon: <IconBoxSeam size={18} />,
      },
    ],
  },
  {
    title: 'Analysis',
    label: '',
    href: '/admin/analysis',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Extra Components',
    label: '',
    href: '/admin/extra-components',
    icon: <IconComponents size={18} />,
  },
  {
    title: 'Error Pages',
    label: '',
    href: '',
    icon: <IconExclamationCircle size={18} />,
    sub: [
      {
        title: 'Not Found',
        label: '',
        href: '/admin/404',
        icon: <IconError404 size={18} />,
      },
      {
        title: 'Internal Server Error',
        label: '',
        href: '/admin/500',
        icon: <IconServerOff size={18} />,
      },
      {
        title: 'Maintenance Error',
        label: '',
        href: '/admin/503',
        icon: <IconBarrierBlock size={18} />,
      },
      {
        title: 'Unauthorised Error',
        label: '',
        href: '/admin/401',
        icon: <IconLock size={18} />,
      },
    ],
  },
  {
    title: 'Settings',
    label: '',
    href: '/admin/settings',
    icon: <IconSettings size={18} />,
  },
];
