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
    // TODO: плейсхолдер из старого сайта — нужен настоящий номер
    phone: "+7 914 000-00-00",
    phoneHref: "tel:+79140000000",
    address:
      "Магаданская область, г. Магадан, 200 км на Запад, р. Тауй, рыболовная база «КАВИНКА»",
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
 * Шесть вкладок. «Индивидуальный тур» и «Экскурсии» убраны заказчиком:
 * первый стал пакетом на «Туре», вторые — пунктом программы. См. docs/CALLS.md
 */
export const navigation: NavItem[] = [
  { href: "/about", label: "О туре" },
  { href: "/accommodation", label: "Размещение" },
  { href: "/pricing", label: "Тур" },
  { href: "/schedule", label: "Расписание" },
  { href: "/program", label: "Программа тура" },
  { href: "/contacts", label: "Контакты" },
];

/** Сокращённая навигация в футере. */
export const footerNavigation: NavItem[] = navigation.filter((item) =>
  ["/about", "/accommodation", "/pricing", "/program"].includes(item.href),
);
