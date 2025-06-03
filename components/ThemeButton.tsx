/* ThemeButton.tsx */
"use client";


interface ThemeButtonProps {
    theme: "light" | "dark" | undefined;
    toggleTheme: () => void;
}


export default function ThemeButton({ theme, toggleTheme }: ThemeButtonProps) {
    if (theme === undefined) return null;
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={toggleTheme}
                className="relative flex items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500 w-8 h-8 overflow-hidden"
                aria-label="Toggle theme"
                style={{ width: "auto", height: 32, marginTop: "5px", cursor: "pointer" }}
            >
                {theme === "dark" ?
                    <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out`}                            >
                        <svg
                            fill="none"
                            width="20"
                            height="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                    </span>
                    : null}

                {theme !== "dark" ?
                    <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out`}                            >
                        <svg
                            fill="true"
                            width="20"
                            height="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    </span>
                    : null}
            </button>
        </div>

    );
}