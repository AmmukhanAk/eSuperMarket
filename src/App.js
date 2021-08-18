import {Provider} from "react-redux"
import { configStore } from "./state/store/configStore";
import logo from './logo.svg';
import './App.css';
import {Home} from "./components/Home.jsx"
function App() {
  const LocalStore = configStore()
  return (
    <div>
      <Provider store={LocalStore}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
