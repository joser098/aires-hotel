const fallbackImage = "/images/rooms/room.png";

const roomImages = {
  single: [
    "/images/rooms/single/1.jpeg",
    "/images/rooms/single/2.jpeg",
    "/images/rooms/single/3.jpeg"
  ],
  "triple-twin": [
    "/images/rooms/triple-twin/1.jpeg",
    "/images/rooms/triple-twin/2.jpeg",
    "/images/rooms/triple-twin/3.jpeg"
  ],
  "triple-matrimonial": [
    "/images/rooms/triple-mat/1.jpeg",
    "/images/rooms/triple-mat/2.jpeg",
    "/images/rooms/triple-mat/3.jpeg"
  ],
  cuadruple: [
    "/images/rooms/cuadruplex/1.jpeg",
    "/images/rooms/cuadruplex/2.jpeg",
    "/images/rooms/cuadruplex/3.jpeg",
    "/images/rooms/cuadruplex/4.jpeg"
  ],
  monoambiente: [
    "/images/rooms/monoambiente/1.jpeg",
    "/images/rooms/monoambiente/2.jpeg",
    "/images/rooms/monoambiente/3.jpeg",
    "/images/rooms/monoambiente/4.jpeg",
    "/images/rooms/monoambiente/5.jpeg",
    "/images/rooms/monoambiente/6.jpeg",
    "/images/rooms/monoambiente/7.jpeg",
    "/images/rooms/monoambiente/8.jpeg",
    "/images/rooms/monoambiente/9.jpeg",
    "/images/rooms/monoambiente/10.jpeg",
    "/images/rooms/monoambiente/11.jpeg"
  ]
};

function getRoomGallery(slug, fallbackSlug) {
  const direct = roomImages[slug];
  if (direct && direct.length > 0) return direct;

  if (fallbackSlug) {
    const fallback = roomImages[fallbackSlug];
    if (fallback && fallback.length > 0) return fallback;
  }

  return [fallbackImage];
}

function getHeroImage(slug, fallbackSlug) {
  return getRoomGallery(slug, fallbackSlug)[0] ?? fallbackImage;
}

export const rooms = [
  {
    slug: "single",
    eyebrow: "Aires Express",
    title: "Habitacion Single",
    heroImage: getHeroImage("single"),
    gallery: getRoomGallery("single"),
    description: [
      "La Habitacion Single esta pensada para viajes individuales que necesitan descanso eficiente, buena circulacion y una base comoda para moverse por la ciudad.",
      "El ambiente mantiene una distribucion simple y funcional, ideal para estadias cortas o viajes laborales donde importa resolver bien lo esencial sin sobrecargar el espacio.",
      "Es una opcion practica para quien prioriza ubicacion, comodidad y una experiencia directa."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 1,
    beds: "1 Cama"
  },
  {
    slug: "doble-twin",
    eyebrow: "Aires Express",
    title: "Habitacion Doble Twin",
    heroImage: getHeroImage("doble-twin", "single"),
    gallery: getRoomGallery("doble-twin", "single"),
    description: [
      "La Habitacion Doble Twin ofrece una configuracion comoda para dos huespedes que prefieren camas separadas sin resignar amplitud ni practicidad.",
      "Su distribucion facilita una estadia flexible para amigos, companeros de trabajo o familiares que necesitan compartir habitacion con independencia.",
      "Mantiene un perfil funcional, con equipamiento pensado para resolver estadias urbanas con comodidad."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 2,
    beds: "2 Camas"
  },
  {
    slug: "doble-matrimonial",
    eyebrow: "Aires Express",
    title: "Habitacion Matrimonial",
    heroImage: getHeroImage("doble-matrimonial", "single"),
    gallery: getRoomGallery("doble-matrimonial", "single"),
    description: [
      "La Habitacion Doble Matrimonial prioriza una experiencia comoda para parejas o dos huespedes que prefieren una cama de mayor tamano.",
      "El espacio esta resuelto para combinar descanso, funcionalidad y una ambientacion neutra que acompana estadias cortas o escapadas de fin de semana.",
      "Es una alternativa versatil para quienes buscan una base simple y confortable en Buenos Aires."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 2,
    beds: "1 Cama matrimonial"
  },
  {
    slug: "triple-twin",
    eyebrow: "Aires Express",
    title: "Habitacion Triple Twin",
    heroImage: getHeroImage("triple-twin"),
    gallery: getRoomGallery("triple-twin"),
    description: [
      "La Habitacion Triple Twin esta preparada para grupos pequenos que necesitan tres plazas individuales dentro de un entorno ordenado y funcional.",
      "Su configuracion ayuda a mantener comodidad de circulacion y una experiencia practica para estadias de amigos, familias o viajes compartidos.",
      "Es una opcion eficiente para sumar capacidad sin perder simplicidad."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 3,
    beds: "3 Camas"
  },
  {
    slug: "triple-matrimonial",
    eyebrow: "Aires Express",
    title: "Habitacion Triple Matrimonial",
    heroImage: getHeroImage("triple-matrimonial"),
    gallery: getRoomGallery("triple-matrimonial"),
    description: [
      "La Habitacion Triple Matrimonial combina capacidad para tres huespedes con una distribucion pensada para optimizar confort y uso diario.",
      "Es ideal para familias pequenas o grupos que necesitan una configuracion flexible manteniendo una base simple para descansar en la ciudad.",
      "Conserva el mismo enfoque del hotel: practicidad, buen descanso y resolucion clara del espacio."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 3,
    beds: "1 Cama matrimonial y 1 Individual"
  },
  {
    slug: "cuadruple",
    eyebrow: "Aires Express",
    title: "Habitacion Cuadruple",
    heroImage: getHeroImage("cuadruple"),
    gallery: getRoomGallery("cuadruple"),
    description: [
      "La Habitacion Cuadruple esta orientada a grupos o familias que necesitan mas capacidad sin complicar la experiencia de uso.",
      "La distribucion busca sostener una estadia ordenada, con espacio util para equipaje y una base comoda para compartir la habitacion.",
      "Es la alternativa de mayor capacidad dentro de este esquema reutilizable de pagina."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 4,
    beds: "1 Matrimonial y 2 Individual"
  },
  {
    slug: "monoambiente",
    eyebrow: "Aires Express",
    title: "Monoambiente",
    heroImage: getHeroImage("monoambiente"),
    gallery: getRoomGallery("monoambiente"),
    description: [
      "La Monoambiente es una opcion para aquellos que prefieren un ambiente simple y confortable, pero que no quieren tener que preocuparse por la funcionalidad.",
      "Su diseño es pensado para acomodar una estadia corta o viajes de trabajo, con una buena distribucion y un ambiente acogedor.",
      "Es una opcion ideal para aquellos que prefieren un ambiente simple y confortable, pero que no quieren tener que preocuparse por la funcionalidad."
    ],
    services: [
      "Wi-Fi",
      "TV por cable",
      "Aire acondicionado",
      "Bano privado",
      "Recepcion 24h",
      "Ropa blanca",
      "Desayuno",
      "Guardar equipaje"
    ],
    guests: 4,
    beds: "1 Matrimonial y 2 Individual"
  }
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug);
}
