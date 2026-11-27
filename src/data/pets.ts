export type PetSpecies = 'dog' | 'cat';
export type PetAgeGroup = 'puppy' | 'young' | 'adult';
export type PetSize = 'small' | 'medium' | 'large';
export type PetGender = 'male' | 'female';

export interface Pet {
  id: string;
  name: string;
  species: PetSpecies;
  speciesLabel: string;
  breed: string;
  ageLabel: string;
  ageGroup: PetAgeGroup;
  size: PetSize;
  sizeLabel: string;
  gender: PetGender;
  genderLabel: string;
  image: string;
  imageAlt: string;
  shortBio: string;
  fullStory: string;
  careNote: string;
  friendlyWithKids: boolean;
  friendlyWithPets: boolean;
  apartmentReady: boolean;
  arrivedDate: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_shelter_friends_1795797735265.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_shelter_care_1795797735947.jpg';

export const PETS: Pet[] = [
  {
    id: 'luna',
    name: 'Луна',
    species: 'dog',
    speciesLabel: 'Собака',
    breed: 'Метис золотистого ретривера',
    ageLabel: '2 роки',
    ageGroup: 'young',
    size: 'medium',
    sizeLabel: 'Середній',
    gender: 'female',
    genderLabel: 'Дівчинка',
    image: '/src/assets/images/pet_luna_dog_1795797736901.jpg',
    imageAlt: 'Луна — світло-золотиста собака сидить біля сонячного вікна',
    shortBio:
      'Ніжна й урівноважена дівчинка, яка обожнює неспішні ранкові прогулянки та тихі вечори поруч із людиною.',
    fullStory:
      'Луна потрапила до нас після того, як її знайшли на околиці парку розгубленою, але дивовижно довірливою. Вона миттєво вивчила базові команди, спокійно ходить на повідку і зовсім не галасує вдома. Луна чудово ладнає з дітьми та іншими спокійними собаками, любить м’які лежаки й обійми.',
    careNote: 'Вакцинована · Стерилізована · Чипована',
    friendlyWithKids: true,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з вересня',
  },
  {
    id: 'murchyk',
    name: 'Мурчик',
    species: 'cat',
    speciesLabel: 'Кіт',
    breed: 'Пухнастий метис',
    ageLabel: '3 роки',
    ageGroup: 'young',
    size: 'medium',
    sizeLabel: 'Середній',
    gender: 'male',
    genderLabel: 'Хлопчик',
    image: '/src/assets/images/pet_murchyk_cat_1795797738239.jpg',
    imageAlt: 'Мурчик — рудий пухнастий кіт із білими лапками сидить на дерев’яній лавці',
    shortBio:
      'Сонячний рудий кіт із теплим характером. Зустрічає гостей біля дверей і тихо муркоче, щойно почує лагідний голос.',
    fullStory:
      'Мурчик — справжній хранитель затишку. Він любить спостерігати за птахами з підвіконня, акуратно користується лотком і кігтеточкою. Не нав’язливий, але завжди поруч, коли ви читаєте книгу або працюєте за столом.',
    careNote: 'Вакцинований · Кастрований · Привчений до лотка',
    friendlyWithKids: true,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з серпня',
  },
  {
    id: 'borys',
    name: 'Борис',
    species: 'dog',
    speciesLabel: 'Собака',
    breed: 'Метис вівчарки',
    ageLabel: '4 роки',
    ageGroup: 'adult',
    size: 'large',
    sizeLabel: 'Великий',
    gender: 'male',
    genderLabel: 'Хлопчик',
    image: '/src/assets/images/pet_borys_dog_1795797736238.jpg',
    imageAlt: 'Борис — чорно-рудий пес із розумним поглядом сидить у сонячному дворі',
    shortBio:
      'Розумний, гідний і безмежно відданий пес. Ідеальний компаньйон для людей, які цінують спокій та прогулянки на природі.',
    fullStory:
      'Борис має витримку дорослого, мудрого друга. Він уважно слухає людину, знає команди «сидіти», «поруч» та «чекай», чудово їздить в автомобілі. Найкраще почуватиметься в родині з активними прогулянками або в будинку з подвір’ям.',
    careNote: 'Вакцинований · Кастрований · Чипований',
    friendlyWithKids: true,
    friendlyWithPets: false,
    apartmentReady: false,
    arrivedDate: 'У притулку з червня',
  },
  {
    id: 'sonya',
    name: 'Соня',
    species: 'cat',
    speciesLabel: 'Кішка',
    breed: 'Британський метис',
    ageLabel: '4 роки',
    ageGroup: 'adult',
    size: 'small',
    sizeLabel: 'Маленький',
    gender: 'female',
    genderLabel: 'Дівчинка',
    image: '/src/assets/images/pet_sonya_cat_1795797737910.jpg',
    imageAlt: 'Соня — сіро-біла кішка мирно дрімає на світлому в’язаному пледі',
    shortBio:
      'Тиха та ласкава кішка для спокійної оселі. Найбільше щастя для неї — теплий плед, сонячний промінь і ваша рука поруч.',
    fullStory:
      'Соня раніше жила в літньої пані й дуже сумує без домашнього тепла. Вона делікатна, ніколи не випускає кігтики та любить тишу. Якщо ви шукаєте спокійну подругу для затишної квартири, Соня стане найніжнішою співмешканкою.',
    careNote: 'Вакцинована · Стерилізована · Привчена до лотка',
    friendlyWithKids: false,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з жовтня',
  },
  {
    id: 'keks',
    name: 'Кекс',
    species: 'dog',
    speciesLabel: 'Собака',
    breed: 'Метис золотистого спанієля',
    ageLabel: '5 місяців',
    ageGroup: 'puppy',
    size: 'small',
    sizeLabel: 'Маленький',
    gender: 'male',
    genderLabel: 'Хлопчик',
    image: '/src/assets/images/pet_keks_puppy_1795797738651.jpg',
    imageAlt: 'Кекс — руденьке цуценя з м’якими вушками сидить на світлій дерев’яній підлозі',
    shortBio:
      'Життєрадісний малюк, який щодня відкриває світ із відкритим серцем. Любить м’які іграшки, навчання за смаколики та обійми.',
    fullStory:
      'Кекса разом із братиками знайшли в картонній коробці на початку осені. Сьогодні він здоровий, кмітливий і дуже орієнтований на людину. Виросте приблизно до 12–14 кг, тож комфортно житиме і в міській квартирі.',
    careNote: 'Перші щеплення зроблені · Оброблений від паразитів',
    friendlyWithKids: true,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з жовтня',
  },
  {
    id: 'olivka',
    name: 'Олівка',
    species: 'cat',
    speciesLabel: 'Кішка',
    breed: 'Триколірна короткошерста',
    ageLabel: '10 місяців',
    ageGroup: 'puppy',
    size: 'small',
    sizeLabel: 'Маленький',
    gender: 'female',
    genderLabel: 'Дівчинка',
    image: '/src/assets/images/pet_olive_cat_1795797738622.jpg',
    imageAlt: 'Олівка — триколірна молода кішка сидить на світлому підвіконні на тлі саду',
    shortBio:
      'Допитлива й витончена триколірна кішечка, яка приносить у дім легкість і радість. Любить гратися з пір’їнкою та сидіти на плечі.',
    fullStory:
      'Олівка виросла в нашому притулку під наглядом волонтерів, тож зовсім не боїться людей. Вона дуже контактна, швидко подружиться з іншим котиком або доброзичливим собакою, а ввечері сама приходить спати в ноги.',
    careNote: 'Вакцинована · Стерилізована · Привчена до лотка',
    friendlyWithKids: true,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з липня',
  },
  {
    id: 'marsel',
    name: 'Марсель',
    species: 'dog',
    speciesLabel: 'Собака',
    breed: 'Метис тер’єра',
    ageLabel: '2 роки',
    ageGroup: 'young',
    size: 'small',
    sizeLabel: 'Маленький',
    gender: 'male',
    genderLabel: 'Хлопчик',
    image: '/src/assets/images/pet_marsel_dog_1795797739185.jpg',
    imageAlt: 'Марсель — невеликий біло-пісочний кудлатий песик сидить на світлій кам’яній підлозі',
    shortBio:
      'Чарівний кудлатий джентльмен із добрими очима. Легко адаптується до міського ритму й обожнює кав’ярні pet-friendly.',
    fullStory:
      'Марсель важить усього 8 кг і має золотий характер: він веселий на вулиці та дуже делікатний у приміщенні. Добре залишається сам удома, не псує речі й завжди готовий підтримати прогулянку в будь-яку погоду.',
    careNote: 'Вакцинований · Кастрований · Чипований',
    friendlyWithKids: true,
    friendlyWithPets: true,
    apartmentReady: true,
    arrivedDate: 'У притулку з вересня',
  },
];
