// app/page.tsx
import { ThemeProvider } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import Test from "../components/Test";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Hoşgeldiniz</h1>
        <p className="mt-2 text-gray-700">Portföyüme göz atabilirsiniz.</p>
      </main>
    </>
  );
}
