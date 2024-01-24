export const layout = () => {

  return {
    title: '',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    pwa: false,
    siderWidth: 180,
    pure: window.__POWERED_BY_QIANKUN__,
    menu: {
      type: 'sub',
      locale: false
    },
  }
}

export const qiankun = {
  async mount(masterProps: any) {
    console.log('=====microApp name=======', masterProps.name);
  }
}