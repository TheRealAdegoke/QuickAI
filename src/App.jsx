import { AuthProvider } from "./Pages/AuthPages/AuthChecker/AuthContext";
import AppRoutes from "../Routes";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
