export const adSlots = {
  mainTop: { blockId: 'R-A-15762893-1', label: 'Главная — верх' },
  mainBottom: { blockId: 'R-A-15762893-2', label: 'Главная — низ' },
  faqInline: { blockId: 'R-A-15762893-3', label: 'FAQ — в тексте' },
  sidebar: { blockId: 'R-A-15762893-4', label: 'Сайдбар' },
};

export type AdSlotId = keyof typeof adSlots; 

// Полноэкранные блоки РСЯ. Заполните актуальными blockId из кабинета.
export const fullscreenAds = {
  desktop: { blockId: 'R-A-15762893-10' },
  touch: { blockId: 'R-A-15762893-11' },
};

