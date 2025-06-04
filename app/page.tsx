// app/page.tsx
"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Text3D from "../components/3DText/Text3D";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="font-bold mainPageMainText">
          <p>Merhaba, ben Dorukhan KILIÇASLAN.</p>
          <p>Ben İstanbul&#39;da yaşayan bir grafik tasarımcısıyım.</p>
          <p>Marka, kullanıcı arayüzü (UI) tasarımı, <span className="text3d-inline-wrapper"><Text3D /></span> Modelleme üzerine odaklanıyorum.</p>
        </h1>
      </main>
      <Footer />
    </>
  );
}
