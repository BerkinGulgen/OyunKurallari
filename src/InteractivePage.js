import React, { useState } from "react";

const figures = [
  { id: 1, title: "Figür 1", description: "Bu figür oyunun başlangıcını temsil eder." },
  { id: 2, title: "Figür 2", description: "Bu figür oyuncunun ilerlemesini gösterir." },
  { id: 3, title: "Figür 3", description: "Bu figür düşmanla karşılaşmayı temsil eder." },
  { id: 4, title: "Figür 4", description: "Bu figür özel bir eşyayı temsil eder." },
  { id: 5, title: "Figür 5", description: "Bu figür tehlikeyi işaret eder." },
  { id: 6, title: "Figür 6", description: "Bu figür oyunun sonuna yaklaşmayı simgeler." },
];

export default function InteractivePage() {
  const [openFigure, setOpenFigure] = useState(null);

  const handleClick = (id) => {
    setOpenFigure(openFigure === id ? null : id);
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Oyun Figürleri</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Bir figüre tıklayarak ne anlama geldiğini öğrenebilirsiniz.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1rem" }}>
        {figures.map((fig) => (
          <div key={fig.id}>
            <button
              onClick={() => handleClick(fig.id)}
              style={{
                width: "100%",
                padding: "1rem",
                background: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {fig.title}
            </button>
            {openFigure === fig.id && (
              <div
                style={{
                  marginTop: "0.5rem",
                  background: "#fff8dc",
                  padding: "0.5rem",
                  borderRadius: "4px",
                }}
              >
                {fig.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
