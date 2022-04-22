import Header from "./components/Layout/Header";
import TraductorCh from "./components/TraductorFrToCh/TraductorFrToCh";
import TraductorEs from "./components/TraductorFrToEs/TraductorFrToEs";


function App() {
  return (
    <>
      <Header />
      <TraductorEs />
      <TraductorCh />
    </>
  );
}

export default App;
