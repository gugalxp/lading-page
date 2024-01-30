import { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 500);
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
