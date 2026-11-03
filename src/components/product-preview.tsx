import type { PreviewVariant } from "@/data/portfolio";

const previewMeta: Record<PreviewVariant, { name: string; meta: string }> = {
  nexora: { name: "Nexora", meta: "Finance overview" },
  pos: { name: "Toko Madura", meta: "Point of sale" },
  restaurant: { name: "Restaurant System", meta: "Kitchen board" },
  reinsurance: { name: "Reinsurance", meta: "Reporting" },
};

export function ProductPreview({
  variant,
  className = "",
}: {
  variant: PreviewVariant;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${previewMeta[variant].name} interface preview`}
      className={`flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white ${className}`}
    >
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-line bg-[#fbfbfa] px-3 sm:h-9">
        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-1.5 rounded-full bg-line" />
          ))}
        </div>
        <span className="truncate font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:text-[10px]">
          {previewMeta[variant].name}
        </span>
        <span className="ml-auto hidden font-mono text-[9px] text-muted sm:block">
          {previewMeta[variant].meta}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">
        {variant === "nexora" && <NexoraPreview />}
        {variant === "pos" && <PosPreview />}
        {variant === "restaurant" && <RestaurantPreview />}
        {variant === "reinsurance" && <ReinsurancePreview />}
      </div>
    </div>
  );
}

function NexoraPreview() {
  const bars = [32, 46, 38, 56, 48, 64, 54, 74];

  return (
    <div className="flex h-full bg-[#fbfbfa]">
      <aside className="hidden w-28 shrink-0 flex-col border-r border-line bg-white p-3 sm:flex">
        <div className="flex items-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-md bg-ink font-mono text-[8px] text-white">
            N
          </span>
          <span className="text-[10px] font-medium">Nexora</span>
        </div>
        <nav className="mt-5 space-y-1" aria-hidden="true">
          {["Overview", "Transactions", "Goals", "Insights"].map((item, index) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1.5 text-[9px] ${
                index === 0 ? "bg-canvas font-medium text-ink" : "text-muted"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-lg border border-line bg-[#fbfbfa] p-2">
          <p className="text-[8px] text-muted">Financial health</p>
          <div className="mt-1.5 h-1 rounded-full bg-line">
            <div className="h-full w-2/3 rounded-full bg-accent" />
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:gap-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-muted sm:text-[9px]">
              Overview
            </p>
            <p className="text-[11px] font-medium sm:text-sm">Good morning, Robbi</p>
          </div>
          <span className="rounded-md border border-line bg-white px-2 py-1 font-mono text-[8px] text-muted">
            This month
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg bg-ink p-3 text-white">
            <p className="text-[8px] text-white/60 sm:text-[9px]">Total balance</p>
            <p className="mt-1 text-sm font-medium tracking-tight sm:text-base">
              Rp ••••••••
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[8px] text-white/55">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              All accounts connected
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-3">
            <p className="text-[8px] text-muted sm:text-[9px]">Financial health</p>
            <p className="mt-1 text-[11px] font-medium">On track</p>
            <div className="mt-2 h-1.5 rounded-full bg-line">
              <div className="h-full w-2/3 rounded-full bg-accent" />
            </div>
            <p className="mt-1.5 text-[8px] text-muted">Goals · Cash flow · Insights</p>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-2 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="flex min-h-0 flex-col rounded-lg border border-line bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-medium sm:text-[9px]">Cash flow</p>
              <span className="font-mono text-[8px] text-muted">6 months</span>
            </div>
            <div className="mt-2 flex min-h-0 flex-1 items-end gap-1">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-sm ${
                    index === bars.length - 1 ? "bg-accent" : "bg-accent/20"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="hidden min-h-0 flex-col rounded-lg border border-line bg-white p-3 sm:flex">
            <p className="text-[8px] font-medium sm:text-[9px]">Spending</p>
            <div className="mt-2.5 space-y-2">
              {[
                ["Housing", "w-3/4"],
                ["Food", "w-1/2"],
                ["Transport", "w-1/3"],
              ].map(([label, width]) => (
                <div key={label}>
                  <div className="flex justify-between text-[8px]">
                    <span>{label}</span>
                    <span className="text-muted">••</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-line">
                    <div className={`h-full rounded-full bg-accent/50 ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PosPreview() {
  const products = [
    { name: "Kopi Susu", price: "Rp 18.000", tone: "bg-amber-100" },
    { name: "Nasi Goreng", price: "Rp 25.000", tone: "bg-orange-100" },
    { name: "Roti Bakar", price: "Rp 15.000", tone: "bg-yellow-100" },
    { name: "Es Teh", price: "Rp 8.000", tone: "bg-emerald-100" },
  ];

  return (
    <div className="grid h-full grid-rows-[1fr_auto] bg-[#fbfbfa] sm:grid-cols-[1.2fr_0.8fr] sm:grid-rows-none">
      <div className="min-w-0 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-muted sm:text-[9px]">
              Toko Madura
            </p>
            <p className="text-[11px] font-medium sm:text-sm">Point of sale</p>
          </div>
          <span className="hidden rounded-md border border-line bg-white px-2 py-1 font-mono text-[8px] text-muted sm:inline">
            Shift 01
          </span>
        </div>

        <div className="mt-3 flex gap-1.5 overflow-hidden">
          {["All", "Coffee", "Meals", "Snacks"].map((category, index) => (
            <span
              key={category}
              className={`shrink-0 rounded-md px-2 py-1 text-[8px] ${
                index === 0
                  ? "bg-ink text-white"
                  : "border border-line bg-white text-muted"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-lg border border-line bg-white p-1.5"
            >
              <div className={`h-7 rounded-md sm:h-9 ${product.tone}`} />
              <p className="mt-1.5 truncate text-[9px] font-medium">{product.name}</p>
              <p className="text-[8px] text-muted">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col border-t border-line bg-white p-2.5 sm:border-l sm:border-t-0 sm:p-4">
        <p className="hidden text-[9px] font-medium sm:block">
          Order #024{" "}
          <span className="ml-1 rounded bg-accent-soft px-1.5 py-0.5 text-[8px] text-accent">
            Dine in
          </span>
        </p>
        <ul className="mt-3 hidden space-y-2 sm:block">
          {[
            ["Kopi Susu", "1 × Rp 18.000"],
            ["Nasi Goreng", "2 × Rp 50.000"],
          ].map(([name, detail]) => (
            <li key={name} className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[9px] font-medium">{name}</p>
                <p className="text-[8px] text-muted">{detail}</p>
              </div>
              <span className="size-4 rounded border border-line" />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 sm:mt-auto sm:block sm:border-t sm:border-line sm:pt-3">
          <div className="flex items-center justify-between gap-2 text-[9px] sm:flex-col sm:items-start sm:gap-0">
            <span className="text-muted">Total</span>
            <span className="font-medium">Rp 68.000</span>
          </div>
          <div className="rounded-md bg-ink px-3 py-1 text-[8px] text-white sm:mt-2 sm:py-1.5 sm:text-center sm:text-[9px]">
            Bayar
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  const columns = [
    { title: "New", tone: "bg-line", table: "Table 04", items: "2 items" },
    { title: "Preparing", tone: "bg-amber-300", table: "Table 07", items: "3 items" },
    { title: "Ready", tone: "bg-emerald-400", table: "Table 02", items: "1 item" },
  ];

  return (
    <div className="h-full bg-[#fbfbfa] p-3 sm:p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[8px] uppercase tracking-[0.12em] text-muted sm:text-[9px]">
            Restaurant operations
          </p>
          <p className="text-[11px] font-medium sm:text-sm">Kitchen board</p>
        </div>
        <span className="hidden rounded-md border border-line bg-white px-2 py-1 font-mono text-[8px] text-muted sm:inline">
          Dine-in · QR
        </span>
      </div>

      <div className="mt-2 flex gap-1.5">
        {["Menu", "Orders", "Kitchen", "Cashier"].map((tab, index) => (
          <span
            key={tab}
            className={`rounded-md px-2 py-1 text-[8px] ${
              index === 2
                ? "bg-ink text-white"
                : "border border-line bg-white text-muted"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {columns.map((column, index) => (
          <div
            key={column.title}
            className={`rounded-lg border border-line bg-white p-2 ${
              index === 2 ? "hidden sm:block" : ""
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className={`size-1.5 rounded-full ${column.tone}`} />
              <p className="text-[9px] font-medium">{column.title}</p>
              <span className="ml-auto font-mono text-[8px] text-muted">1</span>
            </div>
            <div className="mt-2 rounded-md bg-canvas p-2 ring-1 ring-line/70">
              <p className="text-[9px] font-medium">{column.table}</p>
              <p className="text-[8px] text-muted">{column.items}</p>
              <div className="mt-2 space-y-1">
                <div className="h-1 w-3/4 rounded-full bg-line" />
                <div className="h-1 w-1/2 rounded-full bg-line" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 hidden rounded-lg border border-line bg-white p-2.5 sm:block">
        <div className="flex items-center justify-between text-[9px]">
          <span className="font-medium">Order #A-104</span>
          <span className="text-muted">Table 07</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-[8px] text-muted">
          <span>2× Nasi Goreng</span>
          <span>1× Es Teh</span>
          <span className="ml-auto rounded bg-accent-soft px-1.5 py-0.5 text-accent">
            Preparing
          </span>
        </div>
      </div>
    </div>
  );
}

function ReinsurancePreview() {
  const rows: [string, string, string, boolean][] = [
    ["Produksi & Premi", "Rp ••••••", "Validated", true],
    ["Klaim", "Rp ••••••", "Review", false],
    ["Premi Retensi", "Rp ••••••", "Validated", true],
    ["Klaim Dibayar", "Rp ••••••", "Validated", true],
  ];

  return (
    <div className="h-full bg-[#fbfbfa] p-3 sm:p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[8px] uppercase tracking-[0.12em] text-muted sm:text-[9px]">
            Reinsurance reporting
          </p>
          <p className="text-[11px] font-medium sm:text-sm">Operational records</p>
        </div>
        <span className="rounded-md bg-ink px-2 py-1 text-[8px] text-white">
          Export Excel
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-line bg-white">
        <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-2 border-b border-line bg-[#fbfbfa] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
          <span>Record</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {rows.map(([record, amount, status, validated]) => (
          <div
            key={record}
            className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center gap-2 border-b border-line/70 px-3 py-1.5 text-[9px] last:border-0"
          >
            <span className="truncate font-medium">{record}</span>
            <span className="text-muted">{amount}</span>
            <span
              className={`justify-self-start rounded px-1.5 py-0.5 text-[8px] ${
                validated
                  ? "bg-accent-soft text-accent"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2">
        <span className="text-[8px] text-muted">Multi-sheet Excel export</span>
        <span className="rounded bg-ink px-2 py-1 text-[8px] text-white">.xlsx</span>
      </div>
    </div>
  );
}
