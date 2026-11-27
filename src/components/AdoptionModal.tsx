import { FormEvent, useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PETS, Pet } from '../data/pets';

interface AdoptionModalProps {
  isOpen: boolean;
  initialPet: Pet | null;
  onClose: () => void;
}

export function AdoptionModal({
  isOpen,
  initialPet,
  onClose,
}: AdoptionModalProps) {
  const [selectedPetId, setSelectedPetId] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedPetId(initialPet ? initialPet.id : 'advice');
      setError(null);
      setSubmitted(false);
    }
  }, [isOpen, initialPet]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedPet = PETS.find((p) => p.id === selectedPetId) ?? null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const digitsCount = phone.replace(/\D/g, '').length;

    if (trimmedName.length < 2) {
      setError('Будь ласка, вкажіть ваше ім’я.');
      return;
    }

    if (digitsCount < 10 || digitsCount > 15) {
      setError('Будь ласка, вкажіть номер телефону з 10–15 цифр.');
      return;
    }

    setError(null);
    const application = [
      'Вітаю! Хочу дізнатися про прилаштування тварини.',
      'Ім’я: ' + trimmedName,
      'Телефон: ' + phone.trim(),
      'Тварина: ' + (selectedPet ? selectedPet.name + ' (' + selectedPet.speciesLabel + ')' : 'Порадьте улюбленця'),
      message.trim() ? 'Коментар: ' + message.trim() : '',
    ].filter(Boolean).join('\n');
    const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(application);
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!whatsappWindow) {
      setError('Браузер заблокував відкриття WhatsApp. Дозвольте спливаючі вікна або відкрийте WhatsApp вручну й вставте підготовлений текст.');
      return;
    }
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setFullName('');
    setPhone('');
    setMessage('');
    setError(null);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1E1C]/45 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="adoption-modal-title"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-[540px] max-h-[90vh] overflow-y-auto bg-[#FAF9F6] border border-[#E6E2D8] rounded-2xl p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Закрити форму"
          className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full text-[#524F49] hover:text-[#1F1E1C] hover:bg-[#EFECE5] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <CheckCircle2
              className="w-12 h-12 text-[#2F6B4F] mx-auto mb-4"
              strokeWidth={1.6}
            />
            <h3
              id="adoption-modal-title"
              className="font-serif text-2xl font-semibold text-[#1F1E1C]"
            >
              Заявка готова до надсилання
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#524F49]">
              Дякуємо, {fullName.trim()}! Ми відкрили WhatsApp із підготовленим повідомленням. Виберіть потрібний чат, перевірте текст і натисніть «Надіслати», щоб заявка справді надійшла.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 w-full py-3 px-6 min-h-[46px] text-[15px] font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 cursor-pointer"
            >
              Повернутися до каталогу
            </button>
          </div>
        ) : (
          <>
            <p className="text-[13px] font-medium text-[#2F6B4F]">
              Зв’язок із притулком
            </p>
            <h3
              id="adoption-modal-title"
              className="mt-1 font-serif text-2xl sm:text-[28px] font-semibold text-[#1F1E1C]"
            >
              Забрати додому
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#524F49]">
              Заповніть форму — ми підготуємо повідомлення для WhatsApp. Ви самі виберете чат і надішлете його.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="adopt-pet-select"
                  className="block text-[13px] font-medium text-[#1F1E1C] mb-1.5"
                >
                  Кого ви хочете забрати або про кого дізнатися?
                </label>
                <select
                  id="adopt-pet-select"
                  value={selectedPetId}
                  onChange={(e) => setSelectedPetId(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] focus:outline-none focus:border-[#2F6B4F]"
                >
                  <option value="advice">Порадьте мені улюбленця під мій спосіб життя</option>
                  {PETS.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name} ({pet.speciesLabel}, {pet.ageLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="adopt-name"
                  className="block text-[13px] font-medium text-[#1F1E1C] mb-1.5"
                >
                  Ваше ім’я
                </label>
                <input
                  id="adopt-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Наприклад, Олена Коваленко"
                  className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] placeholder:text-[#78746B] focus:outline-none focus:border-[#2F6B4F]"
                />
              </div>

              <div>
                <label
                  htmlFor="adopt-phone"
                  className="block text-[13px] font-medium text-[#1F1E1C] mb-1.5"
                >
                  Номер телефону
                </label>
                <input
                  id="adopt-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+38 (0__) ___-__-__"
                  className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] placeholder:text-[#78746B] focus:outline-none focus:border-[#2F6B4F] tabular-nums"
                />
              </div>

              <div>
                <span className="block text-[13px] font-medium text-[#1F1E1C] mb-1.5">
                  Надсилання заявки
                </span>
                <p className="rounded-xl border border-[#E6E2D8] bg-white px-3.5 py-3 text-sm text-[#524F49]">
                  WhatsApp відкриється з готовим текстом. Заявка буде надіслана лише після вашого підтвердження в месенджері.
                </p>
              </div>

              <div>
                <label
                  htmlFor="adopt-message"
                  className="block text-[13px] font-medium text-[#1F1E1C] mb-1.5"
                >
                  Коментар (необов’язково)
                </label>
                <textarea
                  id="adopt-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Розкажіть коротко про вашу родину, житло або зручний день для візиту..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] rounded-xl text-sm text-[#1F1E1C] placeholder:text-[#78746B] focus:outline-none focus:border-[#2F6B4F] resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-[#A33B2A]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 min-h-[48px] text-[15px] font-semibold text-white bg-[#2F6B4F] hover:bg-[#24553E] rounded-xl transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6B4F]"
              >
                Підготувати заявку в WhatsApp
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[13px] text-[#636059]">
                <Phone className="w-3.5 h-3.5 text-[#2F6B4F]" aria-hidden="true" />
                <span>Або телефонуйте щодня з 10:00 до 19:00:</span>
                <a
                  href="tel:+380674128930"
                  className="font-semibold text-[#1F1E1C] hover:text-[#2F6B4F] tabular-nums"
                >
                  +38 (067) 412-89-30
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
