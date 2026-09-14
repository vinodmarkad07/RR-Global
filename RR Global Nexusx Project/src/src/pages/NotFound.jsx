import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-8xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}