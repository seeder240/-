import { useState } from 'react';
import { Pet } from './data/pets';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PetCatalog } from './components/PetCatalog';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { AdoptionModal } from './components/AdoptionModal';
import { PetDetailModal } from './components/PetDetailModal';

export default function App() {
  const [adoptModalOpen, setAdoptModalOpen] = useState(false);
  const [adoptPet, setAdoptPet] = useState<Pet | null>(null);
  const [detailPet, setDetailPet] = useState<Pet | null>(null);

  const handleOpenAdopt = (pet: Pet | null = null) => {
    setDetailPet(null);
    setAdoptPet(pet);
    setAdoptModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1F1E1C]">
      <Header onOpenAdopt={() => handleOpenAdopt(null)} />

      <main className="flex-1">
        <Hero onOpenAdopt={() => handleOpenAdopt(null)} />
        <PetCatalog
          onSelectPetForAdoption={(pet) => handleOpenAdopt(pet)}
          onOpenPetDetails={(pet) => setDetailPet(pet)}
        />
        <AboutSection onOpenAdopt={() => handleOpenAdopt(null)} />
      </main>

      <Footer onOpenAdopt={() => handleOpenAdopt(null)} />

      <PetDetailModal
        pet={detailPet}
        onClose={() => setDetailPet(null)}
        onAdopt={(pet) => handleOpenAdopt(pet)}
      />

      <AdoptionModal
        isOpen={adoptModalOpen}
        initialPet={adoptPet}
        onClose={() => setAdoptModalOpen(false)}
      />
    </div>
  );
}
