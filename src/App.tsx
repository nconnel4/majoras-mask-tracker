import { Tracker } from "@/pages/Tracker";
import { AppProvider } from "@/providers/app.tsx";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Tracker />
    </AppProvider>
  );
}

export default App;
