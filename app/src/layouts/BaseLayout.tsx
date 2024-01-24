import { useEffect } from 'react';
import { Outlet, useModel, useAppData } from 'umi';

export default function Layout() {
  const routeData = useAppData()
  const { routes } = routeData
  const qiankunStateFromMaster = useModel('@@qiankunStateFromMaster')

  useEffect(() => {
    // 同步路由到主应用，在主应用动态生成菜单
    qiankunStateFromMaster?.getMicroAppRoutes?.({
      routes
    }, { belong: true })
  }, [routes]);
  return (
    <Outlet />
  );
}
