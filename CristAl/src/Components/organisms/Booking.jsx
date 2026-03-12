import { useEffect, useMemo, useState } from "react";

const serviceMeta = {
  valoracion: {
    label: "Valoración",
    duration: "30 min",
    slots: ["09:00", "09:30", "10:00", "10:30", "11:30", "12:00", "13:00", "16:00"],
  },
  operatoria: {
    label: "Operatoria",
    duration: "45 a 60 min",
    slots: ["09:00", "10:00", "11:00", "12:00", "13:00", "16:00"],
  },
  coronas: {
    label: "Coronas",
    duration: "60 a 90 min",
    slots: ["09:00", "10:30", "12:00", "16:00"],
  },
  blanqueamiento: {
    label: "Blanqueamiento",
    duration: "60 min",
    slots: ["09:30", "10:30", "11:30", "12:30", "16:30"],
  },
  exodoncias: {
    label: "Exodoncias",
    duration: "45 a 60 min",
    slots: ["09:00", "10:00", "11:30", "12:30", "16:00"],
  },
};

function formatLongDate(date) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createBaseDays() {
  const days = [];
  const today = new Date();
  let offset = 1;

  while (days.length < 10) {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    offset += 1;

    const weekDay = date.getDay();

    if (weekDay === 0) continue;

    days.push({
      id: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      isoDate: toIsoDate(date),
      date,
      shortLabel: formatShortDate(date),
      longLabel: formatLongDate(date),
      isSaturday: weekDay === 6,
    });
  }

  return days;
}

function createSlotsForDay(date, serviceId) {
  const service = serviceMeta[serviceId] || serviceMeta.valoracion;
  const baseSlots = service.slots;

  return baseSlots.map((time, index) => {
    const seed = date.getDate() + index + (serviceId?.length || 0);
    const unavailable = seed % 4 === 0 || seed % 7 === 0;

    return {
      time,
      available: !unavailable,
    };
  });
}

export default function Booking({ appointment }) {
  const [holidayDates, setHolidayDates] = useState([]);
  const [loadingHolidays, setLoadingHolidays] = useState(true);
  const [holidayError, setHolidayError] = useState("");

  const service = serviceMeta[appointment?.service] || serviceMeta.valoracion;

  const availableDays = useMemo(() => {
    const baseDays = createBaseDays();

    if (!holidayDates.length) {
      return baseDays;
    }

    return baseDays.filter((day) => !holidayDates.includes(day.isoDate));
  }, [holidayDates]);

  const [selectedDayId, setSelectedDayId] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmedSlot, setConfirmedSlot] = useState(null);

  useEffect(() => {
    async function loadMexicanHolidays() {
      try {
        setLoadingHolidays(true);
        setHolidayError("");

        const year = new Date().getFullYear();
        const response = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${year}/MX`
        );

        if (!response.ok) {
          throw new Error("No se pudieron obtener los días festivos.");
        }

        const data = await response.json();
        const dates = data.map((item) => item.date);

        setHolidayDates(dates);
      } catch (error) {
        setHolidayError("No se pudieron cargar los días festivos.");
        setHolidayDates([]);
      } finally {
        setLoadingHolidays(false);
      }
    }

    loadMexicanHolidays();
  }, []);

  useEffect(() => {
    if (!availableDays.length) {
      setSelectedDayId("");
      setSelectedTime("");
      setConfirmedSlot(null);
      return;
    }

    setSelectedDayId(availableDays[0].id);
    setSelectedTime("");
    setConfirmedSlot(null);
  }, [appointment, availableDays]);

  const selectedDay = useMemo(
    () => availableDays.find((day) => day.id === selectedDayId) || null,
    [availableDays, selectedDayId]
  );

  const timeSlots = useMemo(() => {
    if (!selectedDay) return [];
    return createSlotsForDay(selectedDay.date, appointment?.service);
  }, [selectedDay, appointment?.service]);

  function confirmBooking() {
    if (!selectedDay || !selectedTime) return;

    setConfirmedSlot({
      service: service.label,
      duration: service.duration,
      date: selectedDay.longLabel,
      time: selectedTime,
      name: appointment?.name || "Paciente",
      phone: appointment?.phone || "No especificado",
      email: appointment?.email || "No especificado",
      message: appointment?.message?.trim() || "",
    });
  }

  return (
    <section
      id="booking"
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
      aria-labelledby="booking_title"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Paso 2
        </p>

        <h3
          id="booking_title"
          className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100"
        >
          Elige fecha y hora para tu cita
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Esta agenda es una simulación visual, pero por ahora
          toma en cuenta días festivos mediante una API real.
        </p>

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Se excluyen domingos y, cuando la API responde también
          los festivos oficiales de México. En este caso el tercer lunes de marzo.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Fechas disponibles
            </p>

            {loadingHolidays ? (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Cargando días festivos...
              </p>
            ) : holidayError ? (
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                {holidayError}
              </p>
            ) : (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Domingo no disponible. Días festivos oficiales excluidos.
              </p>
            )}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {availableDays.map((day) => {
              const isSelected = selectedDayId === day.id;

              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => {
                    setSelectedDayId(day.id);
                    setSelectedTime("");
                    setConfirmedSlot(null);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                      : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                  }`}
                  aria-label={`Seleccionar ${day.longLabel}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                    {day.isSaturday ? "Sábado" : "Disponible"}
                  </p>
                  <p className="mt-1 text-sm font-bold">{day.shortLabel}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Horarios disponibles
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;

                return (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => {
                      setSelectedTime(slot.time);
                      setConfirmedSlot(null);
                    }}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      !slot.available
                        ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600"
                        : isSelected
                        ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                        : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                    }`}
                    aria-label={
                      slot.available
                        ? `Seleccionar horario ${slot.time}`
                        : `Horario ${slot.time} no disponible`
                    }
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Resumen
          </p>

          <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
            Tu solicitud
          </h4>

          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Paciente</dt>
              <dd className="font-semibold text-slate-900 dark:text-slate-100">
                {appointment?.name || "No especificado"}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 dark:text-slate-400">Servicio</dt>
              <dd className="font-semibold text-slate-900 dark:text-slate-100">
                {service.label}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 dark:text-slate-400">Duración estimada</dt>
              <dd className="font-semibold text-slate-900 dark:text-slate-100">
                {service.duration}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 dark:text-slate-400">Fecha</dt>
              <dd className="font-semibold text-slate-900 dark:text-slate-100">
                {selectedDay ? selectedDay.longLabel : "Selecciona una fecha"}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 dark:text-slate-400">Hora</dt>
              <dd className="font-semibold text-slate-900 dark:text-slate-100">
                {selectedTime || "Selecciona un horario"}
              </dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={confirmBooking}
            disabled={!selectedDay || !selectedTime}
            className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
              !selectedDay || !selectedTime
                ? "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-500"
                : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            }`}
            aria-label="Confirmar horario seleccionado"
          >
            Confirmar horario
          </button>

          {confirmedSlot ? (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Cita simulada confirmada
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {confirmedSlot.name}, tu cita de <strong>{confirmedSlot.service}</strong> quedó
                programada para el <strong>{confirmedSlot.date}</strong> a las{" "}
                <strong>{confirmedSlot.time}</strong>.
              </p>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Esta confirmación es visual y temporal. Más adelante se conectará
                con backend y agenda real.
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Teléfono:</strong> {confirmedSlot.phone}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Correo:</strong> {confirmedSlot.email}
                </p>
                {confirmedSlot.message ? (
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Motivo:</strong> {confirmedSlot.message}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}