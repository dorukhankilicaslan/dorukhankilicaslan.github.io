// app/page.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="font-bold mainPageMainText">
          <p>Merhaba, ben Dorukhan KILIÇASLAN.</p>
          <p>Ben İstanbul&#39;da yaşayan bir grafik tasarımcısıyım.</p>
          <p>Marka, kullanıcı arayüzü (UI) tasarımı, <span className="_3dText">3D</span> Modelleme üzerine odaklanıyorum.</p>
        </h1>
      </main>
      <Footer />
    </>
  );
}
