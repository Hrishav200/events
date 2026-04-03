const navItems = [
  {
    label: "Lineup",
    to: "#lineup",
  },
  {
    label: "Schedule",
    to: "#schedule",
  },
  {
    label: "Location",
    to: "#location",
  },
  {
    label: "Sponsors",
    to: "#sponsors",
  },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
  e.preventDefault();
  const target = document.querySelector(to);
  target?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default function Header() {
  return (
    <header className="flex sticky top-0 z-50 flex-col w-full backdrop-blur-md border-b bg-black/30 border-gradient-amber">
      <div className="flex flex-row max-h-24 items-center justify-between w-full md:px-14 px-6">
        <a href="/" className="flex items-center justify-center size-32">
          <img
            src="/en-logo.png"
            alt="Logo"
            className="object-contain object-center h-full w-full"
          />
        </a>

        <nav className="flex-row gap-4 hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item.to)}
              className="text-xs text-muted uppercase tracking-[0.3em] leading-none hover:text-amber transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
