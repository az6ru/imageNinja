export const adSlots = {
  mainTop: { blockId: 'R-A-15762893-1', label: 'Главная — верх' },
  mainBottom: { blockId: 'R-A-15762893-2', label: 'Главная — низ' },
  // Ниже блоки временно отключены до получения валидных ID из кабинета РСЯ
  faqInline: { blockId: '', label: 'FAQ — в тексте (отключено)' },
  sidebar: { blockId: '', label: 'Сайдбар (отключено)' },
};

export type AdSlotId = keyof typeof adSlots; 

// Полноэкранные блоки РСЯ. Используем один ID для обеих платформ (из скриншота): R-A-15762893-3
export const fullscreenAds = {
  desktop: { blockId: 'R-A-15762893-3' },
  touch: { blockId: 'R-A-15762893-3' },
};

