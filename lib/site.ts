import type { NavItem } from "@/types";

/**
 * Единая точка правды по бренду, контактам и навигации.
 * Полная структура и тексты — docs/STRUCTURE.md
 */
export const site = {
  name: "КАВИНКА",
  fullName: "Рыболовная база «КАВИНКА»",
  // Прежний слоган «Пароль в мир дикой природы» снят заказчиком, см. docs/CALLS.md
  slogan: "Индивидуальные туры",
  description:
    "Рыболовная база «КАВИНКА» в Кавинской долине на берегу реки Тауй, на границе с Магаданским государственным заповедником.",
  coordinates: "59°47′32.61″ ● 148°16′24.23″",
  season: "10 июня — 30 сентября",
  contacts: {
    // данные от заказчика 16.09.2026 (скрин из Telegram-бота)
    phone: "+7 914 0333 555",
    phoneHref: "tel:+79140333555",
    phoneNote: "Местное время",
    phoneMoscow: "+7 938 4444 688",
    phoneMoscowHref: "tel:+79384444688",
    phoneMoscowNote: "Московское время",
    telegram: "@kavinka_bot",
    website: "www.КАВИНКА.рф",
    websiteHref: "https://кавинка.рф",
    address: "Магаданская область, Ольский район, Кавинская долина",
    coordinatesText: "59°47′32.61″ N, 148°16′24.23″ E",
    city: "г. Магадан",
  },
  // TODO: WhatsApp и MAX ведут на Telegram — нужны реальные ссылки
  links: {
    telegram: "https://t.me/KAVINKA_bot",
  },
  legal: {
    copyright: "© 2026 КАВИНКА. Все права защищены.",
    disclaimer:
      "Сайт носит информационный характер и не является публичной офертой",
  },
} as const;

/**
 * Итоговое меню — пять пунктов, утверждено Боссом 14.09.2026 (см. docs/CALLS.md).
 * «Расписание» из меню убрано.
 */
export const navigation: NavItem[] = [
  { href: "/about", label: "О туре" },
  { href: "/accommodation", label: "Размещение" },
  { href: "/pricing", label: "Выбрать тур" },
  { href: "/program", label: "Программа тура" },
  { href: "/contacts", label: "Контакты" },
];

/** Навигация в футере — тот же список, что в шапке (единое меню, 14.09.2026). */
export const footerNavigation: NavItem[] = navigation;
