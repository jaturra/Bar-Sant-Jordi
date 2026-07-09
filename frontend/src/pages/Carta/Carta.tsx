import "../Admin/Admin.css"; 
import { Link } from "react-router-dom";

export default function Carta() {
  return (
    <div className="carta-fiesta" style={{ padding: "40px 20px", textAlign: "center" }}>
      <header className="carta-fiesta__header">
        <h1 style={{ color: "#233a77", marginBottom: "40px" }}>🎉 CARTA FESTA MAJOR 🎉</h1>
      </header>

      <main className="carta-fiesta__main" style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
        
        {/* 💡 SI DECIDES USAR EL JPG, QUÍTALE LOS COMENTARIOS A ESTA LÍNEA Y BORRA EL BLOQUE DEL PDF DE ABAJO */}
        {/* <img src="/Fiesta_mayor.jpg" alt="Carta Festa Major" style={{ width: "100%", maxWidth: "800px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} /> */}

        {/* --- BLOQUE DEL PDF --- */}
        <div className="carta-fiesta__pdf-block" style={{ width: "100%", maxWidth: "300px" }}>
          <h2 style={{ marginBottom: "15px" }}>Carta Completa</h2>
          <a
            href="/Fiesta_mayor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ display: "block", width: "100%", padding: "15px" }}
          >
            📄 VEURE CARTA (PDF)
          </a>
        </div>
        {/* --- FIN BLOQUE DEL PDF --- */}

        <div style={{ marginTop: "30px" }}>
          <Link to="/" className="btn btn--ghost">
            Tornar a l'inici
          </Link>
        </div>

      </main>
    </div>
  );
}