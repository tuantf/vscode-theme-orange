// @ts-nocheck
import { type FC, useState } from "react";

type CounterProps = {
  label: string;
  initial?: number;
};

export const Counter: FC<CounterProps> = ({ label, initial = 0 }) => {
  const [count, setCount] = useState(initial);

  return (
    // @ts-ignore
    <div className="mx-auto flex max-w-sm flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-5 shadow-lg shadow-black/40">
      <header className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-100">
          {label}
        </h2>
        <p className="text-sm text-neutral-500">
          Small interactive example with Tailwind utilities.
        </p>
      </header>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-900"
          onClick={() => setCount(initial)}
        >
          Reset
        </button>
        <span className="ml-auto tabular-nums text-sm font-medium text-neutral-400">
          {count}
        </span>
      </div>
    </div>
  );
};
