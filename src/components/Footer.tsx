import { MapPin, Phone, Clock, Mail } from 'lucide-react';

interface FooterProps {
  onOpenAdopt: () => void;
}

export function Footer({ onOpenAdopt }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#FAF9F6] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-white border border-[#E6E2D8] rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] text-balance">
              Завітайте до нас познайомитися
            </h2>
            <p className="text-[15px] text-[#524F49] max-w-[48ch]">
              Ми завжди раді гостям. Попередній дзвінок або заявка допоможуть нам виділити час саме для вашої зустрічі з майбутнім другом.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#42403B]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#2F6B4F] shrink-0" aria-hidden="true" />
                <span>м. Київ, вул. Садова, 18Б</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2F6B4F] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">Щодня, 10:00 – 19:00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2F6B4F] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+380674128930"
                  className="hover:text-[#2F6B4F] transition-colors tabular-nums"
                >
                  +38 (067) 412-89-30
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F6B4F] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@teplyidim.org.ua"
                  className="hover:text-[#2F6B4F] transition-colors"
                >
                  hello@teplyidim.org.ua
                </a>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenAdopt}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 min-h-[48px] text-[15px] font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
            >
              Забрати додому
            </button>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#636059]">
          <div className="flex items-center gap-3">
            <span className="font-serif font-semibold text-[#1F1E1C] text-base">
              Теплий Дім
            </span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} Притулок для тварин</span>
          </div>

          <nav aria-label="Навігація у підвалі" className="flex items-center gap-6">
            <a href="#catalog" className="hover:text-[#1F1E1C] transition-colors">
              Каталог
            </a>
            <a href="#about" className="hover:text-[#1F1E1C] transition-colors">
              Про нас
            </a>
            <a href="#how-to-adopt" className="hover:text-[#1F1E1C] transition-colors">
              Як забрати
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
