import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm opacity-70">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
