const links = [
  { label: "Imprint", href: "/home/imprint.pdf" },
  { label: "Data protection", href: "/home/Data-protection.pdf" },
  { label: "Withdrawal Policy", href: "/home/Withdrawal-policy.pdf" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row">
        <p className="text-[13px] text-neutral-400">© 2025 BA DIGITAL SELLING</p>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
