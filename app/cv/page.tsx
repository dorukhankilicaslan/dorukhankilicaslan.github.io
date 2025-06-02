// app/page.tsx
import Navbar from "../../components/Navbar";

export default function CV() {
    return (
        <>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl font-bold">CV</h1>
                <p className="mt-2 text-gray-700">CV Detayları.</p>
            </main>
        </>
    );
}
