import Askim from "./Askim";
import MySection from "./MySection";
import MyButton from "./MyButton";

function App() {
  return (
    <div>
      <div>
        <Askim />
        <p>
          Hello, <strong>JSX</strong>
        </p>

        <h1>HTML Etiketleri JSX Icinde</h1>

        <button title="Tikla">Bana Tikla</button>

        <p>Bu bir <code>inline code</code> ornegidir</p>
        <input type="text" placeholder="Adinizi Girin ULAN" />

        <ul>
          <li>Liste Elemani 1</li>
          <li>Liste Elemani 2</li>
          <li>Liste Elemani 3</li>
        </ul>
      </div>

      <div>
        <MySection>
          <MyButton />
        </MySection>
      </div>
    </div>
  );
}

export default App;
