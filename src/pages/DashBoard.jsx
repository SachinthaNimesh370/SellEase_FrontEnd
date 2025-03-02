import * as React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

const DashBoard = () => {
  const navigate = useNavigate(); // React Router navigation

  const NAVIGATION = [
    { kind: "header", title: "Main items" },
    {
      segment: "dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      segment: "orders",
      title: "Orders",
      icon: <ShoppingCartIcon />,
      path: "/orders",
    },
    { kind: "divider" },
    { kind: "header", title: "Analytics" },
    {
      segment: "reports",
      title: "Reports",
      icon: <BarChartIcon />,
      path: "/dashboard/reports",
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <LayersIcon />,
    },
  ];

  return (
    <AppProvider navigation={NAVIGATION.map((item) => 
      item.path 
        ? { ...item, onClick: () => navigate(item.path) } 
        : item
    )}>
      <DashboardLayout>
        <PageContainer>
          <Outlet /> {/* Loads different pages here */}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
};

export default DashBoard;
