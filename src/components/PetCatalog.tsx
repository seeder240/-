import { useMemo, useState } from 'react';
import { Search, RotateCcw, Heart } from 'lucide-react';
import { PETS, Pet, PetAgeGroup, PetSize, PetSpecies } from '../data/pets';
import { ResilientImage } from './ResilientImage';

interface PetCatalogProps {
  onSelectPetForAdoption: (pet: Pet) => void;
  onOpenPetDetails: (pet: Pet) => void;
}

type SpeciesFilter = 'all' | PetSpecies;
type AgeFilter = 'all' | PetAgeGroup;
type SizeFilter = 'all' | PetSize;

export function PetCatalog({
  onSelectPetForAdoption,
  onOpenPetDetails,
}: PetCatalogProps) {
  const [species, setSpecies] = useState<SpeciesFilter>('all');
  const [age, setAge] = useState<AgeFilter>('all');
  const [size, setSize] = useState<SizeFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [kidsFriendlyOnly, setKidsFriendlyOnly] = useState(false);
  const [apartmentOnly, setApartmentOnly] = useState(false);

  const hasActiveFilters =
    species !== 'all' ||
    age !== 'all' ||
    size !== 'all' ||
    searchQuery.trim() !== '' ||
    kidsFriendlyOnly ||
    apartmentOnly;

  const filteredPets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PETS.filter((pet) => {
      if (species !== 'all' && pet.species !== species) return false;
      if (age !== 'all' && pet.ageGroup !== age) return false;
      if (size !== 'all' && pet.size !== size) return false;
      if (kidsFriendlyOnly && !pet.friendlyWithKids) return false;
      if (apartmentOnly && !pet.apartmentReady) return false;
      if (query) {
        const haystack = `${pet.name} ${pet.breed} ${pet.shortBio} ${pet.speciesLabel}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [species, age, size, searchQuery, kidsFriendlyOnly, apartmentOnly]);

  const resetFilters = () => {
    setSpecies('all');
    setAge('all');
    setSize('all');
    setSearchQuery('');
    setKidsFriendlyOnly(false);
    setApartmentOnly(false);
  };

  return (
    <section id="catalog" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-[36px] font-semibold tracking-tight text-[#1F1E1C] text-balance">
              Наші улюбленці чекають на вас
            </h2>
            <p className="mt-2.5 text-[16px] text-[#524F49] max-w-[54ch]">
              Скористайтеся фільтрами, щоб знайти друга за характером, віком та умовами вашого дому.
            </p>
          </div>
          <p className="text-sm text-[#636059] tabular-nums whitespace-nowrap shrink-0">
            Показано {filteredPets.length} з {PETS.length}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#F3F1EC] border border-[#E6E2D8] rounded-2xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            {/* Species Segmented Control */}
            <div
              role="group"
              aria-label="Вид тварини"
              className="inline-flex items-center p-1 bg-[#FAF9F6] border border-[#E6E2D8] rounded-xl shrink-0 self-start"
            >
              {(
                [
                  { value: 'all', label: 'Усі' },
                  { value: 'dog', label: 'Собаки' },
                  { value: 'cat', label: 'Коти' },
                ] as const
              ).map((tab) => {
                const active = species === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setSpecies(tab.value)}
                    aria-pressed={active}
                    className={`px-4 py-2 min-h-[40px] text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#2F6B4F] ${
                      active
                        ? 'bg-[#2F6B4F] text-white'
                        : 'text-[#524F49] hover:text-[#1F1E1C]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <Search
                className="w-4 h-4 text-[#636059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Пошук за ім’ям або описом..."
                aria-label="Пошук улюбленця за ім’ям або описом"
                className="w-full min-h-[48px] pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] placeholder:text-[#78746B] focus:outline-none focus:border-[#2F6B4F] transition-colors duration-150"
              />
            </div>

            {/* Age Select */}
            <select
              value={age}
              onChange={(e) => setAge(e.target.value as AgeFilter)}
              aria-label="Фільтр за віком"
              className="min-h-[48px] px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] focus:outline-none focus:border-[#2F6B4F] cursor-pointer"
            >
              <option value="all">Будь-який вік</option>
              <option value="puppy">Малюки (до 1 року)</option>
              <option value="young">Молоді (1–3 роки)</option>
              <option value="adult">Дорослі (3+ роки)</option>
            </select>

            {/* Size Select */}
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as SizeFilter)}
              aria-label="Фільтр за розміром"
              className="min-h-[48px] px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] focus:outline-none focus:border-[#2F6B4F] cursor-pointer"
            >
              <option value="all">Будь-який розмір</option>
              <option value="small">Маленькі</option>
              <option value="medium">Середні</option>
              <option value="large">Великі</option>
            </select>
          </div>

          {/* Secondary Quick Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setKidsFriendlyOnly((v) => !v)}
                aria-pressed={kidsFriendlyOnly}
                className={`px-3.5 py-2 min-h-[40px] text-[13px] font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F] ${
                  kidsFriendlyOnly
                    ? 'bg-[#2F6B4F]/10 border-[#2F6B4F] text-[#2F6B4F]'
                    : 'bg-[#FAF9F6] border-[#E6E2D8] text-[#524F49] hover:text-[#1F1E1C]'
                }`}
              >
                Дружні до дітей
              </button>

              <button
                type="button"
                onClick={() => setApartmentOnly((v) => !v)}
                aria-pressed={apartmentOnly}
                className={`px-3.5 py-2 min-h-[40px] text-[13px] font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F] ${
                  apartmentOnly
                    ? 'bg-[#2F6B4F]/10 border-[#2F6B4F] text-[#2F6B4F]'
                    : 'bg-[#FAF9F6] border-[#E6E2D8] text-[#524F49] hover:text-[#1F1E1C]'
                }`}
              >
                Підходять для квартири
              </button>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-[13px] font-medium text-[#524F49] hover:text-[#1F1E1C] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F] rounded-lg"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Скинути фільтри</span>
              </button>
            )}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredPets.length === 0 ? (
          <div className="bg-[#F3F1EC] border border-[#E6E2D8] rounded-2xl p-12 text-center">
            <Heart className="w-9 h-9 text-[#2F6B4F]/70 mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold text-[#1F1E1C]">
              За цими фільтрами поки нікого не знайдено
            </h3>
            <p className="mt-2 text-sm text-[#524F49] max-w-[44ch] mx-auto">
              Спробуйте змінити параметри пошуку або скиньте фільтри, щоб побачити всіх мешканців нашого притулку.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-lg transition-colors duration-150 cursor-pointer"
            >
              Показати всіх улюбленців
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {filteredPets.map((pet) => (
              <article
                key={pet.id}
                className="group flex flex-col bg-white border border-[#E6E2D8] rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <button
                  type="button"
                  onClick={() => onOpenPetDetails(pet)}
                  className="block w-full aspect-[4/3] overflow-hidden bg-[#EFECE5] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#2F6B4F]"
                  aria-label={`Дізнатися більше про ${pet.name}`}
                >
                  <ResilientImage
                    src={pet.image}
                    alt={pet.imageAlt}
                    fallbackLabel={pet.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[13px] text-[#636059]">
                    <span>{pet.speciesLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{pet.ageLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pet.sizeLabel}</span>
                  </div>

                  <div className="mt-1.5 flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-[22px] font-semibold text-[#1F1E1C]">
                      <button
                        type="button"
                        onClick={() => onOpenPetDetails(pet)}
                        className="hover:text-[#2F6B4F] transition-colors duration-150 text-left cursor-pointer"
                      >
                        {pet.name}
                      </button>
                    </h3>
                    <span className="text-[13px] text-[#636059] shrink-0">
                      {pet.genderLabel}
                    </span>
                  </div>

                  <p className="mt-2.5 text-[15px] leading-[1.6] text-[#524F49] flex-1">
                    {pet.shortBio}
                  </p>

                  <p className="mt-4 text-[12px] text-[#636059]">
                    {pet.careNote}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E6E2D8] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectPetForAdoption(pet)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
                    >
                      Забрати додому
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenPetDetails(pet)}
                      className="inline-flex items-center justify-center px-4 py-2.5 min-h-[42px] text-sm font-medium text-[#524F49] hover:text-[#1F1E1C] hover:bg-[#F3F1EC] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
                    >
                      Історія
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
