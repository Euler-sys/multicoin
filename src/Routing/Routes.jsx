import { createBrowserRouter } from "react-router-dom";

import Wallet from "./Wallet";
import App from "../App";
import SomniaClaimPortal from "../components/somia";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/wallet", element: <Wallet /> },
  // { path: "/claim", element: <SomniaClaimPortal /> },
]);

export default router;
