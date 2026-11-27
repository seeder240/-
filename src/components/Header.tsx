import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAdopt: () => void;
}

export function Header({ onOpenAdopt }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#catalog', label: 'Каталог' },
    { href: '#about', label: 'Про нас' },
    { href: '#how-to-adopt', label: 'Як забрати' },
    { href: '#contact', label: 'Контакти' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E6E2D8]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#1F1E1C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6B4F] rounded-sm"
        >
          Теплий Дім
        </a>

        <nav
          aria-label="Головна навігація"
          className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#524F49]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1F1E1C] underline-offset-4 hover:underline decoration-[#2F6B4F]/60 transition-colors duration-150 whitespace-nowrap shrink-0 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6B4F] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenAdopt}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
          >
            Забрати додому
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1F1E1C] hover:bg-[#EFECE5] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E2D8] bg-[#FAF9F6] px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-[#1F1E1C] hover:bg-[#EFECE5] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdopt();
              }}
              className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-lg transition-colors duration-150 cursor-pointer"
            >
              Забрати додому
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
