import './App.css';
import Starsite from './interface/startsite.js';
import TeamInfo from './TeamInfo/TeamInfo.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starsite />,
  },
  {
    path: "/t",
    element: <TeamInfo />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
