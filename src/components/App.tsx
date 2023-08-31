import "./App.css";
import { Cursor } from "./Cursor/Cursor";
import { Hobbies } from "./Hobbies/Hobbies";
import { Presentation } from "./Presentation/Presentation";
import { ShootingStars } from "./ShootingStars/ShootingStars";
import { Skills } from "./Skills/Skills";

const Blobs = () => {
  return (
    <section className="blobs">
      <div className="blob first-blob"></div>
      <div className="blob second-blob"></div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Blobs />
      <Cursor />
      <ShootingStars />
      <main>
        <Presentation />
        <Skills />
        <Hobbies />
      </main>
    </div>
  );
}

export default App;
