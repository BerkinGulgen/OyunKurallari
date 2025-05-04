import React, { useState } from "react";
import "./App.css";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="container">
      <h1>🎲 Oyun Kuralları test</h1>
      <ul className="rules">
        <li>1. Her oyuncu sırayla oynar.</li>
        <li>2. Her turda bir kart çekilir.</li>
        <li>3. En fazla puanı toplayan kazanır.</li>
      </ul>

      <button onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? "Talimatları Gizle" : "Talimatları Göster"}
      </button>

      {showInstructions && (
        <div className="instructions">
          <h2>📋 Talimatlar</h2>
          <p>Oyunu başlatmak için kart destesini karıştırın ve ilk oyuncu bir kart çeksin.</p>
        </div>
      )}
    </div>
  );
}

export default App;
