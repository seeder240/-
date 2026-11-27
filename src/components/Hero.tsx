import { ArrowDown } from 'lucide-react';
import { HERO_IMAGE } from '../data/pets';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onOpenAdopt: () => void;
}

export function Hero({ onOpenAdopt }: HeroProps) {
  return (
    <section
      id="top"
      className="pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#E6E2D8]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center py-2 lg:py-6">
            <p className="text-[13px] font-medium text-[#2F6B4F] mb-4">
              Притулок для тварин у Києві · Відкриті щодня
            </p>

            <h1
              className="font-serif text-[#1F1E1C] font-semibold tracking-tight leading-[1.14] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.35rem)' }}
            >
              Подаруйте дім тому, хто давно чекає на тепло
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.65] text-[#524F49] max-w-[46ch]">
              У нашому притулку живуть доглянуті, вакциновані собаки та коти. Кожен із них має свою історію й щиро готовий стати вашим вірним другом.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-[15px] font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
              >
                <span>Обрати улюбленця</span>
                <ArrowDown className="w-4 h-4" strokeWidth={2} />
              </a>

              <button
                type="button"
                onClick={onOpenAdopt}
                className="inline-flex items-center justify-center px-5 py-3.5 min-h-[48px] text-[15px] font-medium text-[#1F1E1C] hover:text-[#2F6B4F] bg-[#F3F1EC] hover:bg-[#EAE6DC] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
              >
                Забрати додому
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E6E2D8] flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#636059]">
              <span className="tabular-nums">340+ врятованих друзів знайшли родину</span>
              <span aria-hidden="true">·</span>
              <span>Знайомство без поспіху</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#EFECE5] border border-[#E6E2D8]">
              <ResilientImage
                src={HERO_IMAGE}
                alt="Золотистий пес і смугастий кіт спокійно відпочивають поруч на килимку у світлій кімнаті"
                fallbackLabel="Притулок «Теплий Дім»"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
