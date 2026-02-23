"use client";

import { useEffect, useMemo, useState } from "react";

type Med = {
  name: string;
  orderedDose: string;
  concentration: string;
  frequency: string;
  reason: string;
  orderInstructions: string;
  recommended: string;
};

const meds: Med[] = [
  {
    name: "Ondansetron (Zofran)",
    orderedDose: "4 mg = 2 mL",
    concentration: "2 mg/1 mL",
    frequency: "Every 8 hours PRN",
    reason: "Nausea and vomiting",
    orderInstructions: "Administer over 3 minutes.",
    recommended: "May be given undiluted. Preferably administer 4 mg over 3 minutes.",
  },
  {
    name: "Famotidine (Pepcid)",
    orderedDose: "20 mg = 5 mL",
    concentration: "4 mg/1 mL",
    frequency: "Every 12 hours",
    reason: "Gastric reflux",
    orderInstructions: "Dilute to concentration ≤ 4 mg/mL prior to administration.",
    recommended: "Dilute to concentration no greater than 4 mg/mL. Administer over 2 minutes.",
  },
  {
    name: "Hydromorphone (Dilaudid)",
    orderedDose: "4 mg = 1 mL",
    concentration: "4 mg/1 mL",
    frequency: "Every 4 hours PRN",
    reason: "Pain",
    orderInstructions: "",
    recommended: "May be given undiluted. Administer 4 mg over 2 minutes.",
  },
  {
    name: "Furosemide (Lasix)",
    orderedDose: "30 mg = 3 mL",
    concentration: "10 mg/1 mL",
    frequency: "Every 12 hours",
    reason: "Fluid volume excess",
    orderInstructions: "Administer over 1.5 minutes.",
    recommended: "May be given undiluted. Administer no faster than 20 mg/minute.",
  },
  {
    name: "Pantoprazole (Protonix)",
    orderedDose: "40 mg = 10 mL",
    concentration: "4 mg/1 mL",
    frequency: "Every 24 hours",
    reason: "Gastric reflux",
    orderInstructions: "Administer over 2 minutes.",
    recommended: "Reconstitute to 4 mg/mL. Administer 40 mg over 2 minutes.",
  },
  {
    name: "Methylprednisolone (Solu-Medrol)",
    orderedDose: "80 mg = 2 mL",
    concentration: "40 mg/1 mL (after reconstitution)",
    frequency: "Every 12 hours",
    reason: "Inflammation",
    orderInstructions: "Reconstitute with provided solution.",
    recommended: "Reconstitute with provided solution. Administer over 3 minutes.",
  },
  {
    name: "Ketorolac (Toradol)",
    orderedDose: "30 mg = 1 mL",
    concentration: "30 mg/1 mL",
    frequency: "Every 6 hours",
    reason: "Pain",
    orderInstructions: "Do not exceed 120 mg every 24 hours.",
    recommended: "May be given undiluted. Administer over 1 minute.",
  },
  {
    name: "Bumetanide (Bumex)",
    orderedDose: "1 mg = 4 mL",
    concentration: "0.25 mg/mL",
    frequency: "Every 6 hours",
    reason: "Renal impairment",
    orderInstructions: "Administer over 1 minute.",
    recommended: "May be given undiluted. Administer slowly over 1 minute.",
  },
  {
    name: "Phenytoin (Dilantin)",
    orderedDose: "150 mg = 3 mL",
    concentration: "50 mg/1 mL",
    frequency: "Every 8 hours",
    reason: "Prevent seizures",
    orderInstructions: "Administer over 3 minutes.",
    recommended: "Give undiluted. Administer no faster than 50 mg/minute.",
  },
  {
    name: "Lorazepam (Ativan)",
    orderedDose: "4 mg = 2 mL",
    concentration: "4 mg/1 mL (after dilution)",
    frequency: "Every 15 minutes PRN",
    reason: "Active seizure",
    orderInstructions:
      "Dilute with equal amount of normal saline. Notify physician if seizure continues after two doses.",
    recommended: "Dilute with equal volume of diluent. Administer over 2 minutes.",
  },
];

function AnalogClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 50);
    return () => clearInterval(id);
  }, []);

  const ms = now.getMilliseconds();
  const sec = now.getSeconds() + ms / 1000;
  const min = now.getMinutes() + sec / 60;
  const hr = (now.getHours() % 12) + min / 60;

  const secondDeg = sec * 6;
  const minuteDeg = min * 6;
  const hourDeg = hr * 30;

  return (
    <div className="relative h-44 w-44 rounded-full border-4 border-zinc-900 bg-white shadow">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-[78px] rounded bg-zinc-700"
          style={{ transform: `translate(-50%, -78px) rotate(${i * 30}deg)` }}
        />
      ))}

      <div
        className="absolute left-1/2 top-1/2 h-10 w-1 -translate-x-1/2 -translate-y-full rounded bg-zinc-900"
        style={{ transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`, transformOrigin: "50% 100%" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-14 w-0.5 -translate-x-1/2 -translate-y-full rounded bg-zinc-700"
        style={{ transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`, transformOrigin: "50% 100%" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-16 w-0.5 -translate-x-1/2 -translate-y-full rounded bg-red-600"
        style={{ transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`, transformOrigin: "50% 100%" }}
      />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900" />
    </div>
  );
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [showRef, setShowRef] = useState(false);
  const current = meds[index];
  const progress = useMemo(() => `${index + 1} / ${meds.length}`, [index]);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_280px]">
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">IV Medication Simulation</h1>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium">{progress}</span>
          </div>

          <h2 className="text-xl font-semibold">{current.name}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Info label="Ordered Admin Dose" value={current.orderedDose} />
            <Info label="Concentration" value={current.concentration} />
            <Info label="Frequency" value={current.frequency} />
            <Info label="Reason" value={current.reason} />
          </div>

          <div className="mt-6 rounded-xl border border-zinc-200 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Administration Instructions</p>
            <p className="mt-2 text-zinc-800">{current.orderInstructions || "See recommended administration details."}</p>
          </div>

          {showRef && (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Recommended Administration</p>
              <p className="mt-2 text-emerald-900">{current.recommended}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setShowRef((v) => !v)}
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-100"
            >
              {showRef ? "Hide Reference" : "Show Reference"}
            </button>
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="rounded-xl bg-zinc-800 px-4 py-2 text-sm font-semibold text-white enabled:hover:bg-zinc-700 disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() => {
                setShowRef(false);
                setIndex((i) => Math.min(meds.length - 1, i + 1));
              }}
              disabled={index === meds.length - 1}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white enabled:hover:bg-blue-500 disabled:opacity-40"
            >
              Next Push
            </button>
          </div>
        </section>

        <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
          <h3 className="text-base font-semibold">Working Clock</h3>
          <p className="mt-1 text-sm text-zinc-600">Sweeping second hand for timing simulation.</p>
          <div className="mt-6 flex justify-center">
            <AnalogClock />
          </div>
        </aside>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900">{value}</p>
    </div>
  );
}
