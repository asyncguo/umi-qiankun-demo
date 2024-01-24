import { useModel } from 'umi'

export const layout = () => {
  const { menuList } = useModel('menuModel')

  return {
    title: '',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    splitMenus: true,
    colorWeak: false,
    siderWidth: 180,
    pwa: false,

    menu: {
      type: 'sub',
      locale: false
    },
    menuDataRender: () => menuList,
  }
}

export const qiankun = async() => {
  console.log('🪝 [runtime stage]: qiankun');

  return {
    apps: [
      {
        name: 'app1',
        entry: 'http://localhost:8081',
      },
      {
        name: 'app2',
        entry: 'http://localhost:8081',
      }
    ]
  }
}

export const useQiankunStateForSlave = () => {
  const { updateMenuList } = useModel('menuModel')

  const getMicroAppRoutes = () => {
    updateMenuList()
  }

  return {
    getMicroAppRoutes
  }
}