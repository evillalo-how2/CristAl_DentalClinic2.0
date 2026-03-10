export const treatments = [
  {
    id: "operatoria",
    name: "Operatoria",
    short: "Restauraciones con resina para tratar caries, fracturas pequeñas o desgaste dental de forma estética y funcional.",
    duration: "30–60 min",
    price: "$800–$1,600 MXN",
    imageKey: "operatoria",
    imageAlt: "Procedimiento de operatoria dental con instrumental clínico",
    bullets: [
      "Resinas estéticas del color del diente",
      "Procedimiento conservador y funcional",
      "Ideal para caries y fracturas pequeñas"
    ],
    faqs: [
      {
        question: "¿La operatoria dental duele?",
        answer:
          "En la mayoría de los casos se realiza con anestesia local cuando es necesario, por lo que el procedimiento suele ser cómodo para el paciente."
      },
      {
        question: "¿Cuánto dura una resina dental?",
        answer:
          "Depende del tamaño de la restauración, tus hábitos y la higiene oral. Con buenos cuidados y revisiones periódicas puede mantenerse en buen estado por años."
      },
      {
        question: "¿Se nota la resina?",
        answer:
          "No debería notarse demasiado. El objetivo es igualar lo mejor posible el tono y forma natural del diente."
      }
    ],
    guide: [
      "Se revisa la pieza dental y se confirma el diagnóstico.",
      "Se limpia la zona afectada y se prepara el diente.",
      "Se coloca y modela la resina estética.",
      "Se ajusta la mordida y se pule para un acabado natural."
    ],
    ctaText: "Agendar valoración",
    ctaHref: "#appointment"
  },
  {
    id: "coronas",
    name: "Coronas dentales",
    short: "Rehabilitación para recuperar dientes debilitados, muy restaurados o tratados previamente, devolviendo forma, resistencia y función.",
    duration: "2 citas / 60–120 min c/u",
    price: "$3,500–$6,500 MXN",
    imageKey: "coronas",
    imageAlt: "Corona dental y material de rehabilitación oral",
    bullets: [
      "Recupera función y estética",
      "Opciones según material y caso clínico",
      "Requiere valoración y plan personalizado"
    ],
    faqs: [
      {
        question: "¿Cuándo se necesita una corona dental?",
        answer:
          "Suele recomendarse cuando el diente ha perdido mucha estructura, tiene fracturas, recibió endodoncia o necesita mayor protección."
      },
      {
        question: "¿Todas las coronas son iguales?",
        answer:
          "No. El precio y el resultado pueden variar según el material, la zona de la boca, la estética requerida y la complejidad del caso."
      },
      {
        question: "¿Cuánto tiempo dura una corona?",
        answer:
          "Con buena higiene, revisiones periódicas y una mordida estable, una corona puede durar muchos años."
      }
    ],
    guide: [
      "Se realiza valoración clínica y radiográfica.",
      "Se prepara el diente para recibir la corona.",
      "Se toman registros o escaneo para fabricar la pieza.",
      "Se coloca la corona final y se ajusta la mordida."
    ],
    ctaText: "Cotiza tu caso",
    ctaHref: "#appointment"
  },
  {
    id: "blanqueamiento",
    name: "Blanqueamiento dental",
    short: "Tratamiento estético para mejorar el tono de los dientes con protocolos seguros y recomendaciones personalizadas.",
    duration: "45–90 min",
    price: "$1,700–$4,200 MXN",
    imageKey: "blanqueamiento",
    imageAlt: "Procedimiento de blanqueamiento dental en clínica",
    bullets: [
      "Aclara varios tonos según el caso",
      "Puede requerir limpieza previa",
      "Resultados dependen de hábitos y cuidados"
    ],
    faqs: [
      {
        question: "¿El blanqueamiento daña el esmalte?",
        answer:
          "Cuando se realiza con supervisión profesional y en pacientes seleccionados correctamente, es un procedimiento seguro."
      },
      {
        question: "¿Provoca sensibilidad?",
        answer:
          "Algunos pacientes presentan sensibilidad temporal, pero normalmente disminuye en poco tiempo con los cuidados indicados."
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "Depende de hábitos como café, vino, tabaco e higiene. Los resultados suelen mantenerse mejor con buenos cuidados y revisiones."
      }
    ],
    guide: [
      "Se evalúa el estado general de dientes y encías.",
      "Se revisa si necesitas limpieza o tratamiento previo.",
      "Se aplica el protocolo de blanqueamiento indicado.",
      "Se comparten cuidados para mantener el resultado."
    ],
    ctaText: "Agendar sesión",
    ctaHref: "#appointment"
  },
  {
    id: "exodoncias",
    name: "Exodoncias",
    short: "Extracción dental indicada cuando una pieza no puede conservarse o representa un riesgo para tu salud bucal.",
    duration: "20–60 min",
    price: "$700–$3,500 MXN",
    imageKey: "exodoncias",
    imageAlt: "Extracción dental con instrumental quirúrgico",
    bullets: [
      "Desde extracción simple hasta quirúrgica",
      "Incluye indicaciones postoperatorias",
      "El costo depende de la complejidad del caso"
    ],
    faqs: [
      {
        question: "¿Siempre duele una extracción?",
        answer:
          "No debería doler durante el procedimiento, ya que se utiliza anestesia local. Después puede haber molestia controlable según el caso."
      },
      {
        question: "¿Por qué cambia tanto el precio?",
        answer:
          "No cuesta lo mismo una extracción simple que una quirúrgica o una muela del juicio. La posición del diente y la dificultad influyen mucho."
      },
      {
        question: "¿Cuánto tarda la recuperación?",
        answer:
          "La recuperación inicial suele ser de pocos días, aunque depende del tipo de extracción y de seguir bien los cuidados posteriores."
      }
    ],
    guide: [
      "Se realiza valoración clínica y, si hace falta, radiográfica.",
      "Se define si la extracción será simple o quirúrgica.",
      "Se aplica anestesia local y se realiza el procedimiento.",
      "Se explican cuidados de recuperación y señales de alerta."
    ],
    ctaText: "Consultar mi caso",
    ctaHref: "#appointment"
  },
  {
    id: "valoracion",
    name: "Valoración",
    short: "Consulta inicial para revisar tu salud bucal, resolver dudas y definir un plan de tratamiento realista y personalizado.",
    duration: "30–45 min",
    price: "$350–$750 MXN",
    imageKey: "valoracion",
    imageAlt: "Consulta dental de valoración inicial",
    bullets: [
      "Diagnóstico inicial y prioridades",
      "Plan de tratamiento personalizado",
      "Explicación de tiempos, opciones y costos"
    ],
    faqs: [
      {
        question: "¿En la valoración ya me dicen qué tengo?",
        answer:
          "Sí. La idea es detectar el problema principal, revisar el estado general de tu boca y orientarte sobre las mejores opciones de tratamiento."
      },
      {
        question: "¿Incluye radiografías?",
        answer:
          "Depende de la clínica y del caso. Algunas las incluyen en promociones o paquetes, y en otras se cotizan por separado."
      },
      {
        question: "¿La valoración se descuenta del tratamiento?",
        answer:
          "En algunas clínicas sí sucede, pero no siempre. Eso depende de la política de cada consultorio."
      }
    ],
    guide: [
      "Se recopila tu motivo de consulta y antecedentes relevantes.",
      "Se realiza exploración clínica de dientes, encías y mordida.",
      "Si es necesario, se sugieren estudios complementarios.",
      "Se entrega una propuesta inicial de tratamiento y costos."
    ],
    ctaText: "Agendar cita",
    ctaHref: "#appointment"
  }
];