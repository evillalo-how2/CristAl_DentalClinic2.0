import { useEffect, useMemo, useRef, useState } from "react";
import { treatments } from "../../data/procedures";

function buildReply(treatment, topic) {
  if (topic === "schedule") {
    const name = treatment?.name ? ` (${treatment.name})` : "";
    return {
      text: `Esta función aún no ha sido implementada. Por ahora, puedes usar el formulario en la sección “Agenda tu cita”${name}.`,
      cta: { label: "Ir al formulario", href: "#appointments" },
    };
  }

  if (!treatment) {
    return { text: "Elige un tratamiento para comenzar.", cta: null };
  }

  const lines = [];

  if (topic === "details") {
    lines.push(`${treatment.name}: ${treatment.short}`);
    if (treatment.bullets?.length) {
      lines.push(`Incluye: ${treatment.bullets.join(", ")}.`);
    }
    if (treatment.duration) {
      lines.push(`Duración estimada: ${treatment.duration}.`);
    }
  }

  if (topic === "price") {
    lines.push(`Rango típico: ${treatment.price || "Depende del caso."}`);
  }

  if (topic === "risks") {
    lines.push(
      "Riesgos: pueden variar según el caso. En valoración se revisan antecedentes y se explican riesgos específicos."
    );
  }

  if (topic === "aftercare") {
    lines.push(
      "Cuidados: dependen del procedimiento. En consulta se indican cuidados personalizados."
    );
  }

  lines.push(
    "Información general. La valoración clínica define el plan final y el costo exacto."
  );

  return { text: lines.join("\n"), cta: null };
}

const topics = [
  { id: "details", label: "¿En qué consiste?" },
  { id: "risks", label: "Riesgos" },
  { id: "aftercare", label: "Cuidados" },
  { id: "price", label: "Precio" },
  { id: "schedule", label: "Agendar cita" },
];

const initialMessages = [
  {
    role: "bot",
    text: "Selecciona un tratamiento y luego el tema que quieres conocer.",
    cta: null,
  },
];

export default function ChatbotWidget({ seed, onSchedule }) {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [minimized, setMinimized] = useState(true);

  const logRef = useRef(null);
  const lastSeedRef = useRef("");

  const selectedTreatment = useMemo(
    () => treatments.find((t) => t.id === selectedTreatmentId) || null,
    [selectedTreatmentId]
  );

  useEffect(() => {
    if (minimized) return;
    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, minimized]);

  function clearChat() {
    setMessages(initialMessages);
  }

  function handleSchedule(treatmentId) {
    if (typeof onSchedule === "function") {
      onSchedule(treatmentId || "");
    }
  }

  useEffect(() => {
    if (!seed) return;

    const key = JSON.stringify(seed);
    if (lastSeedRef.current === key) return;
    lastSeedRef.current = key;

    setMinimized(false);

    if (seed.treatmentId) {
      setSelectedTreatmentId(seed.treatmentId);
    }

    if (seed.topic) {
      const treatment = treatments.find((item) => item.id === seed.treatmentId) || null;
      const reply = buildReply(treatment, seed.topic);
      const topicLabel =
        topics.find((item) => item.id === seed.topic)?.label || seed.topic;

      const userLabel =
        seed.topic === "schedule"
          ? `Pregunta: ${topicLabel}`
          : `Pregunta: ${treatment?.name || "Tratamiento"} · ${topicLabel}`;

      setMessages((prev) => [
        ...prev,
        { role: "user", text: userLabel, cta: null },
        { role: "bot", text: reply.text, cta: reply.cta },
      ]);

      if (seed.topic === "schedule") {
        handleSchedule(seed.treatmentId || "");
        document
          .getElementById("appointments")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [seed]);

  function ask(topicId) {
    if (topicId !== "schedule" && !selectedTreatment) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Primero elige un tratamiento.", cta: null },
      ]);
      return;
    }

    const topicLabel = topics.find((item) => item.id === topicId)?.label || topicId;

    const userLabel =
      topicId === "schedule"
        ? `Pregunta: ${topicLabel}`
        : `Pregunta: ${selectedTreatment.name} · ${topicLabel}`;

    const reply = buildReply(selectedTreatment, topicId);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userLabel, cta: null },
      { role: "bot", text: reply.text, cta: reply.cta },
    ]);

    if (topicId === "schedule") {
      handleSchedule(selectedTreatmentId);
      document
        .getElementById("appointments")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (minimized) {
    return (
      <div className="fixed bottom-4 right-4 z-[60]">
        <button
          type="button"
          onClick={() => setMinimized(false)}
          className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-[var(--color-primary-hover)]"
          aria-label="Abrir chat"
          aria-expanded="false"
        >
          Asistente dental
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <section
        role="dialog"
        aria-label="Chat de tratamientos"
        className="w-[280px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl sm:w-[296px] lg:w-[308px]"
      >
        <header className="flex items-start justify-between gap-3 px-4 py-4">
          <div>
            <p className="text-sm font-extrabold text-[var(--color-heading)]">
              Asistente dental
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-soft)]">
              Respuestas guiadas
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearChat}
              className="rounded-2xl px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-card)]"
              aria-label="Limpiar chat"
            >
              Limpiar
            </button>

            <button
              type="button"
              onClick={() => setMinimized(true)}
              className="rounded-2xl px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-card)]"
              aria-label="Minimizar chat"
            >
              Minimizar
            </button>
          </div>
        </header>

        <div className="border-y border-[var(--color-border)] px-4 py-4">
          <label
            className="text-sm font-semibold text-[var(--color-heading)]"
            htmlFor="chat-treatment"
          >
            Tratamiento
          </label>

          <select
            id="chat-treatment"
            className="mt-2 h-11 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm text-[var(--color-heading)] shadow-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
            value={selectedTreatmentId}
            onChange={(e) => setSelectedTreatmentId(e.target.value)}
            aria-label="Seleccionar tratamiento"
          >
            <option value="">Selecciona una opción</option>
            {treatments.map((treatment) => (
              <option key={treatment.id} value={treatment.id}>
                {treatment.name}
              </option>
            ))}
          </select>

          <div className="mt-4 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => ask(topic.id)}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-[11px] font-semibold text-[var(--color-heading)] shadow-sm transition hover:bg-[var(--color-accent-light)]"
                aria-label={topic.label}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          className="max-h-[260px] space-y-4 overflow-auto bg-[var(--color-card-soft)] px-4 py-4"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${message.role === "user"
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-heading)]"
                  }`}
              >
                <div
                  className={`mb-1 text-[11px] font-bold uppercase tracking-wide ${message.role === "user"
                      ? "text-white/90"
                      : "text-[var(--color-text-soft)]"
                    }`}
                >
                  {message.role === "user" ? "Tú" : "Bot"}
                </div>

                <div className="whitespace-pre-line">{message.text}</div>

                {message.role === "bot" && message.cta ? (
                  <a
                    href={message.cta.href}
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4"
                    aria-label={message.cta.label}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSchedule(selectedTreatmentId);
                      document
                        .getElementById("appointments")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {message.cta.label}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}