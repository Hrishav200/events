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
      <div className="flex flex-row items-center justify-between w-full py-7 md:px-14 px-6">
        <h1 className="text-shadow-sm text-2xl font-bold text-amber font-bebas uppercase tracking-[2px] leading-none">
          The Encore
        </h1>

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
