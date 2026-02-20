import "./App.css";
import SessionProvider from "./provider/session-provider";
import RootRouter from "./root-route";

function App() {
  return (
    <SessionProvider>
      <RootRouter />
    </SessionProvider>
  );
}

export default App;
