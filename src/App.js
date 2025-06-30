import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
//import Navbar from './components/Navbar';
import { Provider } from "react-redux";
import { store } from './redux/store';

import { Navbarwithfilter } from './components/Navbarwithfilter';

function App() {
  return (

    <>
    <Provider store={store}>
      <Navbarwithfilter />
      <div className="mt-[51px]">
        <Grid/>
      </div>
    </Provider>
    </>

  );
}

export default App;
