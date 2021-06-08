import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
   <>
   <Header></Header>
   <main>
     <Meals></Meals>
   </main>
   </>
  );
}

export default App;
