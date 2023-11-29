import { Inventory } from "@/features/items";
import { AppProvider } from "@/providers/app.tsx";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Inventory />
    </AppProvider>
  );
}

export default App;
