// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold mb-2">404: This page could not be found</h1>
      <p className="text-slate-600 mb-6">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-md px-4 py-2 bg-black text-white hover:opacity-90"
      >
        Go home
      </Link>
    </main>
  );
}
