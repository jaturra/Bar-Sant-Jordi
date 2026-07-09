import "../Admin/Admin.css"; 
import { Link } from "react-router-dom";

export default function Carta() {
  return (
    <div className="carta-fiesta" style={{ padding: "40px 20px", textAlign: "center" }}>
      <header className="carta-fiesta__header">
        <h1 style={{ color: "#233a77", marginBottom: "40px" }}>🎉 CARTA FESTA MAJOR 🎉</h1>
      </header>

      <main className="carta-fiesta__main" style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
        
        <div className="carta-fiesta__pdf-block" style={{ width: "100%", maxWidth: "300px" }}>
          <h2 style={{ marginBottom: "15px" }}>Carta de Tapes</h2>
          {/* Faltaba el '<a' justo aquí debajo 👇 */}
          <a
            href="/Fiesta_mayor_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ display: "block", width: "100%", padding: "15px" }}
          >
            📄 VEURE PDF
          </a>
        </div>

        <div className="carta-fiesta__pdf-block" style={{ width: "100%", maxWidth: "300px" }}>
          <h2 style={{ marginBottom: "15px" }}>Carta de Plats</h2>
          {/* Faltaba el '<a' justo aquí debajo 👇 */}
          <a
            href="/Fiesta_mayor_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ display: "block", width: "100%", padding: "15px" }}
          >
            📄 VEURE PDF
          </a>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link to="/" className="btn btn--ghost">
            Tornar a l'inici
          </Link>
        </div>

      </main>
    </div>
  );
}