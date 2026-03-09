import { useEffect, useMemo, useRef, useState } from "react";
import { treatments } from "../../data/procedures";

function buildReply(treatment, topic) {
    if (topic === "schedule") {
        const name = treatment?.name ? ` (${treatment.name})` : "";
        return {
            text: `Esta función aun no ha sido implementada. Por ahora, puedes usar el formulario en la sección “Agenda tu cita”${name}.`,
            cta: { label: "Ir al formulario", href: "#cita" }
        };
    }

    if (!treatment) return { text: "Elige un tratamiento para comenzar.", cta: null };

    const lines = [];

    if (topic === "details") {
        lines.push(`${treatment.name}: ${treatment.short}`);
        if (treatment.bullets?.length) lines.push(`Incluye: ${treatment.bullets.join(", ")}.`);
        if (treatment.duration) lines.push(`Duración estimada: ${treatment.duration}.`);
    }

    if (topic === "price") lines.push(`Rango típico: ${treatment.price || "Depende del caso."}`);

    if (topic === "risks") {
        lines.push(
            "Riesgos: pueden variar según el caso. En valoración se revisan antecedentes y se explican riesgos específicos."
        );
    }

    if (topic === "aftercare") {
        lines.push("Cuidados: dependen del procedimiento. En consulta se indican cuidados personalizados.");
    }

    lines.push("Información general. La valoración clínica define el plan final y el costo exacto.");
    return { text: lines.join("\n"), cta: null };
}

const topics = [
    { id: "details", label: "¿En qué consiste?" },
    { id: "risks", label: "Riesgos" },
    { id: "aftercare", label: "Cuidados" },
    { id: "price", label: "Precio" },
    { id: "schedule", label: "Agendar cita" }
];

const initialMessages = [
    { role: "bot", text: "Selecciona un tratamiento y luego el tema que quieres conocer.", cta: null }
];

export default function ChatbotWidget({ seed, onSchedule }) {
    const [selectedTreatmentId, setSelectedTreatmentId] = useState("");
    const [messages, setMessages] = useState(initialMessages);

    const logRef = useRef(null);
    const lastSeedRef = useRef("");

    const selectedTreatment = useMemo(
        () => treatments.find((t) => t.id === selectedTreatmentId) || null,
        [selectedTreatmentId]
    );

    useEffect(() => {
        logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    function clearChat() {
        setMessages(initialMessages);
    }

    function handleSchedule(treatmentId) {
        if (typeof onSchedule === "function") onSchedule(treatmentId || "");
    }

    useEffect(() => {
        if (!seed) return;
        const key = JSON.stringify(seed);
        if (lastSeedRef.current === key) return;
        lastSeedRef.current = key;

        if (seed.treatmentId) setSelectedTreatmentId(seed.treatmentId);

        if (seed.topic) {
            const t = treatments.find((x) => x.id === seed.treatmentId) || null;
            const reply = buildReply(t, seed.topic);
            const topicLabel = topics.find((x) => x.id === seed.topic)?.label || seed.topic;

            const userLabel =
                seed.topic === "schedule"
                    ? `Pregunta: ${topicLabel}`
                    : `Pregunta: ${t?.name || "Tratamiento"} · ${topicLabel}`;

            setMessages((prev) => [
                ...prev,
                { role: "user", text: userLabel, cta: null },
                { role: "bot", text: reply.text, cta: reply.cta }
            ]);

            if (seed.topic === "schedule") {
                handleSchedule(seed.treatmentId || "");
                document.getElementById("cita")?.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [seed]);

    function ask(topicId) {
        if (topicId !== "schedule" && !selectedTreatment) {
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "Primero elige un tratamiento.", cta: null }
            ]);
            return;
        }

        const topicLabel = topics.find((x) => x.id === topicId)?.label || topicId;

        const userLabel =
            topicId === "schedule"
                ? `Pregunta: ${topicLabel}`
                : `Pregunta: ${selectedTreatment.name} · ${topicLabel}`;

        const reply = buildReply(selectedTreatment, topicId);

        setMessages((prev) => [
            ...prev,
            { role: "user", text: userLabel, cta: null },
            { role: "bot", text: reply.text, cta: reply.cta }
        ]);

        if (topicId === "schedule") {
            handleSchedule(selectedTreatmentId);
            document.getElementById("cita")?.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="fixed bottom-5 right-5 left-auto z-[60]">
            <section
                role="dialog"
                aria-label="Chat de tratamientos"
                className="w-[340px] sm:w-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            >
                <header className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                        <p className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                            Asistente dental
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Respuestas guiadas</p>
                    </div>

                    <button
                        type="button"
                        onClick={clearChat}
                        className="rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
                        aria-label="Limpiar chat"
                    >
                        Limpiar
                    </button>
                </header>

                <div className="border-y border-slate-200 px-5 py-4 dark:border-slate-800">
                    <label className="text-sm font-semibold" htmlFor="chat-treatment">
                        Tratamiento
                    </label>

                    <select
                        id="chat-treatment"
                        className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                        value={selectedTreatmentId}
                        onChange={(e) => setSelectedTreatmentId(e.target.value)}
                        aria-label="Seleccionar tratamiento"
                    >
                        <option value="">Selecciona una opción</option>
                        {treatments.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                        {topics.map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                onClick={() => ask(t.id)}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/70"
                                aria-label={t.label}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    ref={logRef}
                    role="log"
                    aria-live="polite"
                    aria-relevant="additions"
                    className="max-h-[320px] space-y-4 overflow-auto bg-slate-50 px-5 py-4 dark:bg-slate-950"
                >
                    {messages.map((m, idx) => (
                        <div
                            key={idx}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${m.role === "user" ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900": "bg-white text-slate-900 dark:bg-slate-900/70 dark:text-slate-100"
                                    }`}
                            >
                                <div
                                    className={`mb-1 text-[11px] font-bold uppercase tracking-wide ${m.role === "user"
                                            ? "text-white/80"
                                            : "text-slate-500 dark:text-slate-400"
                                        }`}
                                >
                                    {m.role === "user" ? "Tú" : "Bot"}
                                </div>

                                <div className="whitespace-pre-line">{m.text}</div>

                                {m.role === "bot" && m.cta ? (
                                    <a
                                        href={m.cta.href}
                                        className="mt-3 inline-flex text-sm font-semibold text-brand-700 underline underline-offset-4 dark:text-brand-300"
                                        aria-label={m.cta.label}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSchedule(selectedTreatmentId);
                                            document.getElementById("cita")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        {m.cta.label}
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