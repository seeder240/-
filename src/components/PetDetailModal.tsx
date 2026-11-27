import { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Pet } from '../data/pets';
import { ResilientImage } from './ResilientImage';

interface PetDetailModalProps {
  pet: Pet | null;
  onClose: () => void;
  onAdopt: (pet: Pet) => void;
}

export function PetDetailModal({ pet, onClose, onAdopt }: PetDetailModalProps) {
  useEffect(() => {
    if (!pet) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pet, onClose]);

  if (!pet) return null;

  const traits = [
    pet.friendlyWithKids ? 'Дружній до дітей' : 'Краще підійде в тиху родину без маленьких дітей',
    pet.friendlyWithPets ? 'Ладнає з іншими тваринами' : 'Краще бути єдиним улюбленцем у домі',
    pet.apartmentReady ? 'Комфортно почувається у квартирі' : 'Потребує активних прогулянок або подвір’я',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1E1C]/45 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pet-detail-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[780px] max-h-[90vh] overflow-y-auto bg-[#FAF9F6] border border-[#E6E2D8] rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити вікно"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF9F6]/90 border border-[#E6E2D8] text-[#1F1E1C] hover:bg-white transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6 aspect-[4/3] md:aspect-auto md:min-h-[380px] bg-[#EFECE5]">
            <ResilientImage
              src={pet.image}
              alt={pet.imageAlt}
              fallbackLabel={pet.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#636059]">
                <span>{pet.speciesLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{pet.ageLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{pet.sizeLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{pet.genderLabel}</span>
              </div>

              <h3
                id="pet-detail-title"
                className="mt-2 font-serif text-3xl font-semibold text-[#1F1E1C]"
              >
                {pet.name}
              </h3>

              <p className="mt-1 text-sm text-[#636059]">
                {pet.breed} · {pet.arrivedDate}
              </p>

              <p className="mt-4 text-[15px] leading-[1.65] text-[#42403B]">
                {pet.fullStory}
              </p>

              <ul className="mt-5 space-y-2 text-[14px] text-[#42403B]">
                {traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2F6B4F] mt-0.5 shrink-0" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 pt-4 border-t border-[#E6E2D8] text-[13px] text-[#636059]">
                {pet.careNote}
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => onAdopt(pet)}
                className="w-full py-3 px-6 min-h-[46px] text-[15px] font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
              >
                Забрати {pet.name} додому
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
