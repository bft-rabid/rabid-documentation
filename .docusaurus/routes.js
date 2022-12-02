import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rabid-documentation/markdown-page',
    component: ComponentCreator('/rabid-documentation/markdown-page', '7f3'),
    exact: true
  },
  {
    path: '/rabid-documentation/',
    component: ComponentCreator('/rabid-documentation/', 'cc0'),
    routes: [
      {
        path: '/rabid-documentation/',
        component: ComponentCreator('/rabid-documentation/', '9c4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/rabid-documentation/category/user-manual',
        component: ComponentCreator('/rabid-documentation/category/user-manual', 'b7e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/rabid-documentation/user-manual/athlete',
        component: ComponentCreator('/rabid-documentation/user-manual/athlete', '712'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/rabid-documentation/user-manual/connect',
        component: ComponentCreator('/rabid-documentation/user-manual/connect', '3a8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/rabid-documentation/user-manual/nft',
        component: ComponentCreator('/rabid-documentation/user-manual/nft', '2c1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/rabid-documentation/user-manual/wallet',
        component: ComponentCreator('/rabid-documentation/user-manual/wallet', '891'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
