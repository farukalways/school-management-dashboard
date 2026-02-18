import Dashboard from "./dashboard/dashboardContent/Dashboard";
import Sidebar from "./dashboard/sideber/Sidebar";
import { ThemeProvider } from "./provider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex h-[96vh] overflow-hidden">
        <div className="w-1/5 h-full border-r border-gray-200 overflow-y-auto p-4">
          <Sidebar />
        </div>

        <div className="w-4/5 h-full overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
