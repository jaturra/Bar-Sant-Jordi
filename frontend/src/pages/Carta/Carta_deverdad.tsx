import "../Admin/Admin.css"; 
import { Link } from "react-router-dom";

export default function Carta() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f4f6f8", // Fondo gris muy suave para que la tarjeta destaque
      padding: "40px 20px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>
      
      {/* TARJETA PRINCIPAL */}
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(35, 58, 119, 0.08)",
        maxWidth: "600px",
        width: "100%",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "6px solid #233a77" // Borde azul superior corporativo
      }}>
        
        {/* ENCABEZADO */}
        <h3 style={{ color: "#d7b45a", margin: 0, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "700" }}>
          Bar Sant Jordi
        </h3>
        <h1 style={{ color: "#233a77", margin: "10px 0 20px 0", fontSize: "2.2rem", fontWeight: "800" }}>
          🎉 Festa Major 🎉
        </h1>
        
        <p style={{ color: "#666", fontSize: "1.05rem", marginBottom: "30px", lineHeight: "1.5", padding: "0 10px" }}>
          Gaudeix de la nostra selecció especial per a les festes. Fes clic a continuació per veure la carta.
        </p>

        {/* 💡 SI DECIDES USAR EL JPG EN EL FUTURO, QUÍTALE LOS COMENTARIOS A ESTE BLOQUE */}
        {/* 
        <div style={{ marginBottom: "30px", borderRadius: "12px", overflow: "hidden", border: "1px solid #eaeaea", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <img src="/Fiesta_mayor.jpg" alt="Carta Festa Major" style={{ width: "100%", display: "block" }} />
        </div> 
        */}

        {/* BLOQUE DEL BOTÓN PDF */}
        <div style={{ 
          backgroundColor: "rgba(35, 58, 119, 0.04)", // Azul muy clarito de fondo 
          padding: "30px 20px", 
          borderRadius: "12px",
          marginBottom: "35px"
        }}>
          <a
            href="/Fiesta_mayor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "10px", 
              width: "100%", 
              maxWidth: "280px", 
              padding: "16px",
              fontSize: "1.1rem",
              borderRadius: "50px", // Botón redondeado moderno
              backgroundColor: "#233a77",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 14px rgba(35, 58, 119, 0.3)"
            }}
          >
            {/* Icono de un documento PDF */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Obrir Carta (PDF)
          </a>
        </div>

        {/* BOTÓN VOLVER */}
        <Link to="/" style={{ 
          color: "#233a77", 
          textDecoration: "none", 
          fontWeight: "600",
          display: "inline-block",
          padding: "10px"
        }}>
          ← Tornar a l'inici
        </Link>
        
      </div>
    </div>
  );
}