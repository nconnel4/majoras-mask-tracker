import "./App.css";

import { Tracker } from "@/pages/Tracker";
import { AppProvider } from "@/providers/app.tsx";

function App() {
  return (
    <AppProvider>
      <Tracker />
    </AppProvider>
  );
}

export default App;
