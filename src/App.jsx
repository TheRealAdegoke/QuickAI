import { AuthProvider } from "./Pages/AuthPages/AuthChecker/AuthContext";
import AppRoutes from "../Routes";
import { DashboardProvider } from "./Dashboard/DashboardChecker/DashboardContext";

function App() {
  return (
    <>
      <AuthProvider>
        <DashboardProvider>
          <AppRoutes />
        </DashboardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
