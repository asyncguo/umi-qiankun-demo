import { useCallback, useEffect, useState } from "react";
import { useAppData } from "umi";

export default () => {
  const { routes = {} } = useAppData();

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const renderMenuList = []
    /**
     * 生成顶部菜单
     */
    Object.keys(routes).forEach(key => {
      const route = routes[key]
      if (route.microApp) {
        renderMenuList.push({
          path: '/' + route.microApp,
          name: route.name,
          children: []
        })
      }
    })

    setMenuList(renderMenuList)
  }, [routes]);

  const updateMenuList = useCallback(() => {
    menuList[0].children = [{
      path: 'docs',
      name: '文档',
    }]

    setMenuList([...menuList])
  }, [menuList])
  
  return {
    menuList,
    updateMenuList
  }
}