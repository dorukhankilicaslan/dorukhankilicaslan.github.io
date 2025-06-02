// app/contacts/page.tsx
import Navbar from "../../components/Navbar";

export default function Contacts() {
    return (
        <>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl font-bold">Contacts</h1>
            </main>
        </>
    );
}
