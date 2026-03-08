import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-8 py-4 min-h-screen  gap-8">
          <h1 className="bg-linear-to-r from-blue-400 via-teal-500 to-emerald-400 text-6xl bg-clip-text text-transparent  ">
            Welcome to PhotoLoom
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span>Create an account to start sharing photos.</span>
            <Link href={"/signup"}>
              <button className="px-2 py-1 border rounded-sm bg-linear-to-r from-blue-400/50 via-teal-500/50 to-emerald-400/50 cursor-pointer hover:scale-105">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
