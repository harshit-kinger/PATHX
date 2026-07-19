import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ContentArea from "./ContentArea";
import NotificationToast from "../components/common/NotificationToast";

function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <ContentArea>
          <Outlet />
        </ContentArea>

      </div>

      {/* Global Toast Notifications */}

      <NotificationToast />

    </div>
  );
}

export default MainLayout;