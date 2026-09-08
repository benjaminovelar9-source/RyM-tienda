"use client";

import { useState } from "react";
import { formatPrice } from "../lib/format";
import { demoProducts } from "../lib/products";

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);

  function addToCart(id: string) {
    setCart((current) => [...current, id]);
  }

  function sendWhatsApp() {
    const number = "5491122542430";
    const message =
      cart.length > 0
        ? `Hola RyM! Quiero consultar por ${cart.length} producto(s) de la tienda.`
        : "Hola RyM! Quiero consultar por productos de la tienda.";

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main>
      <header
        style={{
          padding: "20px",
          borderBottom: "1px solid #333",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ margin: 0, color: "#d4af37" }}>RyM</h1>
          <p style={{ margin: 0 }}>Trenzas & Insumos</p>
        </div>

        <button onClick={sendWhatsApp}>
          🛒 Carrito ({cart.length})
        </button>
      </header>

      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #151515 0%, #080808 100%)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 8vw, 70px)",
            marginBottom: "15px",
            color: "#d4af37",
          }}
        >
          RyM Trenzas & Insumos
        </h2>

        <p style={{ fontSize: "20px" }}>
          Todo lo que necesitás para tus trenzas.
        </p>

        <p>Compra online · Retiro local · Atención por WhatsApp · VERSIÓN NUEVA</p>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ color: "#d4af37" }}>Productos destacados</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {demoProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: "#151515",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3>{product.name}</h3>

              <p style={{ color: "#aaa" }}>{product.description}</p>

              <strong style={{ color: "#d4af37", fontSize: "22px" }}>
                {formatPrice(product.price)}
              </strong>

              <br />

              <button
                onClick={() => addToCart(product.id)}
                style={{ marginTop: "15px" }}
              >
                Agregar al carrito
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderTop: "1px solid #333",
          color: "#aaa",
        }}
      > 
        <p>RyM Trenzas & Insumos</p>
        <p>Pedidos: 11 2254-2430</p>
        <p>Consultas: 11 5369-2561</p>
      </footer>
    </main>
  );
}
