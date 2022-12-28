import { RouteObject } from "react-router-dom";
import DHome from "../pages/dashboard/DHome";
import DLayout from "../pages/dashboard/DLayout";
import DRoom from "../pages/dashboard/DRooom";

 const routeDashboard: RouteObject[] =[

  {
    path: '/dashboard',
    element: <DLayout />,
    children: [
      {
        path: '',
        element: <DHome />
      },
      {
        path: 'room',
        element: <DRoom />
      },
    ]
  },
]

export default routeDashboard