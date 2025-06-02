// app/about/page.tsx
import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl font-bold">About Page</h1>
            </main>
        </>
    );
}
