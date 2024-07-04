import { AuthProvider } from "./Pages/AuthPages/AuthChecker/AuthContext";
import AppRoutes from "../Routes";
import { DashboardProvider } from "./Dashboard/DashboardChecker/DashboardContext";
import EditAndSaveProvider from "./Dashboard/DashBoardChildren/Sites/EditAndSaveComponents/EditAndSaveContext/EditAndContext";

function App() {
  return (
    <>
      <AuthProvider>
        <DashboardProvider>
          <EditAndSaveProvider>
            <AppRoutes />
          </EditAndSaveProvider>
        </DashboardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
