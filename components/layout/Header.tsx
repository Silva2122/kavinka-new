import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
