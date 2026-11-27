import { ABOUT_IMAGE } from '../data/pets';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  onOpenAdopt: () => void;
}

export function AboutSection({ onOpenAdopt }: AboutSectionProps) {
  const steps = [
    {
      num: '01.',
      title: 'Залиште заявку на сайті або зателефонуйте',
      text: 'Натисніть «Забрати додому» біля улюбленця, який відгукнувся вам у серці, або попросіть нашого координатора порадити друга під ваш ритм життя.',
    },
    {
      num: '02.',
      title: 'Приїдьте на спокійне знайомство',
      text: 'Ми запросимо вас у притулок, де ви зможете погуляти з собакою чи посидіти поруч із котиком без поспіху та тиску, щоб відчути взаємну довіру.',
    },
    {
      num: '03.',
      title: 'Забирайте додому з нашою підтримкою',
      text: 'Ми передаємо ветеринарний паспорт, рекомендації щодо харчування та залишаємося на зв’язку протягом перших тижнів адаптації у новій оселі.',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F3F1EC] border-y border-[#E6E2D8]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#E6E2D8] border border-[#DDD8CC]">
              <ResilientImage
                src={ABOUT_IMAGE}
                alt="Волонтерка притулку «Теплий Дім» лагідно гладить врятованого собаку у світлому залі"
                fallbackLabel="Турбота та любов у притулку «Теплий Дім»"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[13px] font-medium text-[#2F6B4F] mb-3">
              Про нас
            </p>
            <h2 className="font-serif text-3xl sm:text-[36px] font-semibold tracking-tight text-[#1F1E1C] leading-[1.2] text-balance">
              Простір турботи, де кожна тварина відчуває безпеку
            </h2>

            <div className="mt-5 space-y-4 text-[16px] leading-[1.7] text-[#524F49]">
              <p>
                «Теплий Дім» — це незалежний київський притулок, заснований у 2022 році командою волонтерів і ветеринарів. Ми не утримуємо тварин у тісних клітках: наші підопічні живуть у світлих просторих кімнатах, гуляють на зеленому подвір’ї та щодня отримують людську увагу.
              </p>
              <p>
                Наша мета проста — не просто дати тимчасовий дах, а підготувати кожного хвостатого до щасливого життя в родині. Перед переїздом усі тварини проходять повний медичний огляд, вакцинацію та соціалізацію.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#DDD8CC] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] tabular-nums">
                  340+
                </div>
                <p className="mt-1 text-[13px] text-[#636059]">
                  тварин уже вдома за 4 роки
                </p>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] tabular-nums">
                  100%
                </div>
                <p className="mt-1 text-[13px] text-[#636059]">
                  вакциновані та оглянуті
                </p>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] tabular-nums">
                  14 днів
                </div>
                <p className="mt-1 text-[13px] text-[#636059]">
                  підтримки під час адаптації
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to adopt steps */}
        <div
          id="how-to-adopt"
          className="mt-16 sm:mt-20 pt-14 border-t border-[#DDD8CC]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="font-serif text-2xl sm:text-[30px] font-semibold text-[#1F1E1C] text-balance">
                Як забрати улюбленця додому
              </h3>
              <p className="mt-2 text-[15px] text-[#524F49]">
                Три зрозумілі кроки від першої розмови до спільного щасливого ранку.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenAdopt}
              className="inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
            >
              Забрати додому
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#FAF9F6] border border-[#E6E2D8] rounded-2xl p-6 sm:p-7"
              >
                <span className="font-serif text-xl font-semibold text-[#2F6B4F] tabular-nums">
                  {step.num}
                </span>
                <h4 className="mt-3 text-[17px] font-semibold text-[#1F1E1C]">
                  {step.title}
                </h4>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-[#524F49]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
