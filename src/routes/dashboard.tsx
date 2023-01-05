import { redirect, RouteObject } from "react-router-dom";
import DHome from "../pages/dashboard/DHome";
import DLayout from "../pages/dashboard/DLayout";
import DRoom from "../pages/dashboard/DRooom";
import { getProfile } from "../services/auth.service";

const routeDashboard: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DLayout />,
    loader: async () => {
      const response = await getProfile();
      if (!response?.data.data.user) {
        throw redirect("/login");
      }
      return response.data.data.user;
    },
    children: [
      {
        path: "",
        element: <DHome />,
      },
      {
        path: "room",
        element: <DRoom />,
      },
    ],
  },
];

export default routeDashboard;
