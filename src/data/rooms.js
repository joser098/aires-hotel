export const rooms = [
  {
    slug: "single",
    eyebrow: "Aires Express",
    title: "Habitacion Single",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "1 cama"
  },
  {
    slug: "doble-twin",
    eyebrow: "Aires Express",
    title: "Habitacion Doble Twin",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "2 camas"
  },
  {
    slug: "doble-matrimonial",
    eyebrow: "Aires Express",
    title: "Habitacion Doble Matrimonial",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "1 cama matrimonial"
  },
  {
    slug: "triple-twin",
    eyebrow: "Aires Express",
    title: "Habitacion Triple Twin",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "3 camas"
  },
  {
    slug: "triple-matrimonial",
    eyebrow: "Aires Express",
    title: "Habitacion Triple Matrimonial",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "1 cama matrimonial y 1 cama"
  },
  {
    slug: "cuadruple",
    eyebrow: "Aires Express",
    title: "Habitacion Cuadruple",
    heroImage: "/images/rooms/room.png",
    gallery: Array(6).fill("/images/rooms/room.png"),
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
    beds: "4 plazas"
  }
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug);
}
