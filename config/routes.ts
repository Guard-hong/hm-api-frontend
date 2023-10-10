export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { name: '接口广场', icon: 'AmazonOutlined', path: '/list', component: './TableList' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    // routes: [
    //   { path: '/admin', redirect: '/admin/sub-page' },
    //   { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    // ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
