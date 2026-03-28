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
    title: "Single",
    heroImage: getHeroImage("single"),
    gallery: getRoomGallery("single"),
    short_description: "Habitación individual con cama matrimonial y baño privado.",
    description: [
      "Habitación individual con cama matrimonial, ideal para una estadía cómoda y tranquila. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: null,
    doubleBeds: "1"
  },
  {
    slug: "doble-twin",
    eyebrow: "Aires Express",
    title: "Doble Twin",
    heroImage: getHeroImage("doble-twin", "single"),
    gallery: getRoomGallery("doble-twin", "single"),
    short_description: "Habitación para 2 personas con camas individuales y baño privado.",
    description: [
      "Habitación para 2 personas con camas individuales, ideal para una estadía cómoda y tranquila. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: "2",
    doubleBeds: null
  },
  {
    slug: "doble-matrimonial",
    eyebrow: "Aires Express",
    title: "Matrimonial",
    heroImage: getHeroImage("doble-matrimonial", "single"),
    gallery: getRoomGallery("doble-matrimonial", "single"),
    short_description: "Habitación para 2 personas con cama matrimonial y baño privado.",
    description: [
      "Habitación para 2 personas con cama Matrimonial, ideal para una estadía cómoda y tranquila. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: null,
    doubleBeds: "1"
  },
  {
    slug: "triple-twin",
    eyebrow: "Aires Express",
    title: "Triple Twin",
    heroImage: getHeroImage("triple-twin"),
    gallery: getRoomGallery("triple-twin"),
    short_description: "Habitación para 3 personas individual con camas individuales y baño privado",
    description: [
      "Habitación para 3 personas con camas Inviduales, ideal para una estadía cómoda y tranquila. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: "3",
    doubleBeds: null
  },
  {
    slug: "triple-matrimonial",
    eyebrow: "Aires Express",
    title: "Triple Matrimonial",
    heroImage: getHeroImage("triple-matrimonial"),
    gallery: getRoomGallery("triple-matrimonial"),
    short_description: "Habitación para 3 personas individual con cama matrimonial, una cama individual y baño privado.",
    description: [
      "Habitación para 3 personas con cama Matrimonial y 1 cama individual, ideal para una estadía cómoda y tranquila. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: "1",
    doubleBeds: "1"
  },
  {
    slug: "cuadruple",
    eyebrow: "Aires Express",
    title: "Cuadruple",
    heroImage: getHeroImage("cuadruple"),
    gallery: getRoomGallery("cuadruple"),
    short_description: "Habitación para 4 personas con cama matrimonial y dos camas individuales y baño privado.",
    description: [
      "Habitación para cuatro personas con una cama matrimonial y dos camas individuales, ideal para familias o grupos. Cuenta con baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año. Además, incluye conexión WiFi y televisión por cable para tu entretenimiento.",
      "Esta habitación ofrece balcón y nevera, brindando mayor comodidad durante tu estadía.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: "2",
    doubleBeds: "1"
  },
  {
    slug: "monoambiente",
    eyebrow: "Aires Express",
    title: "Monoambiente",
    heroImage: getHeroImage("monoambiente"),
    gallery: getRoomGallery("monoambiente"),
    short_description: "Habitación para cuatro personas con una cama matrimonial y dos camas individuales, ideal para familias o grupos.",
    description: [
      "Monoambiente para cuatro personas, ideal para quienes buscan mayor independencia y comodidad. Cuenta con cama matrimonial y sofá cama, además de baño privado con agua fría y caliente, toallas, secador de pelo y artículos de tocador de cortesía. Dispone de aire acondicionado y calefacción para garantizar confort en cualquier época del año, junto con conexión WiFi y televisión por cable.",
      "Incluye cocina equipada con nevera, microondas y vajilla, permitiendo una estadía más práctica y funcional. Además, cuenta con balcón, brindando un espacio adicional para disfrutar.",
      "Desayuno incluido y recepción disponible las 24 horas. Espacios comunes con jardín para relajarse durante tu estadía. Estacionamiento disponible a 150 metros con costo adicional. Ubicación estratégica con acceso a transporte público, incluyendo cercanía al subte.",
      "Rodeado de restaurantes, bares, parques y museos, ideal para disfrutar la ciudad.",
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
    singleBeds: "2",
    doubleBeds: "1"
  }
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug);
}
