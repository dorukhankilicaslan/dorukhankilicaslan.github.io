// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen bg-gray-100 text-gray-900 p-6">
            {/* Burada navbar veya başka admin bileşenleri olabilir */}
            {children}
        </section>
    );
}
