export type PreviewVariant = "nexora" | "pos" | "restaurant" | "reinsurance";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  preview: PreviewVariant;
  features: string[];
  technology: string[];
  problem: string;
  solution: string;
  myWork: string[];
  result?: string;
};

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const projects: Project[] = [
  {
    slug: "nexora",
    index: "01",
    title: "Nexora",
    category: "Personal Finance Platform",
    description:
      "A personal finance platform designed to make financial tracking, planning, and insights easier to understand.",
    preview: "nexora",
    technology: ["React", "TypeScript", "Tailwind CSS", "AI-assisted development"],
    problem:
      "Personal financial information is often fragmented and difficult to interpret, making it harder to understand spending, savings progress, and overall financial health.",
    solution:
      "A unified finance dashboard that presents transactions, goals, cash flow, spending categories, and financial health in a clear visual system.",
    features: [
      "Transaction management",
      "Income and expense overview",
      "Financial goals",
      "Monthly summary",
      "Cash flow trend",
      "Spending breakdown",
      "Financial health indicator",
      "Financial insights",
      "Responsive UI",
    ],
    myWork: [
      "Product UI implementation",
      "Dashboard design",
      "Responsive layout",
      "Component integration",
      "UX refinement",
      "AI-assisted development workflow",
    ],
    result:
      "A responsive finance dashboard that brings transactions, goals, cash flow, and spending insights into one consistent interface.",
  },
  {
    slug: "toko-madura",
    index: "02",
    title: "Toko Madura",
    category: "Point of Sale / Business System",
    description:
      "A responsive POS system built to simplify daily cashier operations, transactions, product management, and receipt workflows.",
    preview: "pos",
    technology: ["React", "TypeScript", "Tailwind CSS"],
    problem:
      "Cashier operations need to remain fast and readable while handling product browsing, categories, carts, transactions, and receipts across different device sizes.",
    solution:
      "A responsive POS interface combining product discovery, cashier workflow, cart management, transactions, and receipt generation.",
    features: [
      "Cashier interface",
      "Product grid",
      "Category filtering",
      "Cart management",
      "Transactions",
      "Receipt generation",
      "Thermal print workflow",
      "Inventory-related workflow",
      "Responsive design",
    ],
    myWork: [
      "Cashier UI/UX improvement",
      "Responsive layouts",
      "Product grid improvements",
      "Cart layout",
      "Receipt workflow",
      "Thermal printing workflow",
      "Bug fixing",
      "Git collaboration",
    ],
    result:
      "A responsive POS interface that supports cashier transactions, cart management, and receipt generation across screen sizes.",
  },
  {
    slug: "restaurant-system",
    index: "03",
    title: "Restaurant Management System",
    category: "Restaurant Operations",
    description:
      "An integrated restaurant system connecting ordering, cashier operations, kitchen workflows, payments, promotions, and order tracking.",
    preview: "restaurant",
    technology: ["React", "TypeScript", "Tailwind CSS"],
    problem:
      "Restaurant workflows often involve disconnected processes between customers, cashier staff, kitchen staff, payments, and order status.",
    solution:
      "An integrated application connecting customer ordering with cashier, kitchen, payment, promotion, and tracking workflows.",
    features: [
      "Customer menu",
      "Ordering",
      "Cart",
      "Checkout",
      "Cashier workflow",
      "Kitchen workflow",
      "Payment flow",
      "Promo code",
      "Order tracking",
      "QR/location workflow",
    ],
    myWork: [
      "Customer-facing UI/UX",
      "Promo integration",
      "Order tracking",
      "Responsive improvements",
      "Payment-flow refinements",
      "QR/location workflow",
      "Testing and bug fixing",
    ],
    result:
      "A connected restaurant workflow covering customer ordering, cashier operations, kitchen status, payments, and order tracking.",
  },
  {
    slug: "reasuransi-system",
    index: "04",
    title: "Reinsurance Reporting System",
    category: "Business Reporting Automation",
    description:
      "A business application that transforms reinsurance operational data into structured digital records and automated Excel reports.",
    preview: "reinsurance",
    technology: ["Laravel", "PHP", "MySQL", "Maatwebsite Excel"],
    problem:
      "Operational reinsurance data requires structured recording and consistent reporting, especially when data eventually needs to be exported into formatted spreadsheets.",
    solution:
      "A Laravel application for managing production/premium data and claims, with structured validation and automated multi-sheet Excel reporting.",
    features: [
      "Produksi & Premi CRUD",
      "Claims CRUD",
      "Validation",
      "Dashboard",
      "Financial summaries",
      "Multi-sheet Excel export",
      "Structured reporting",
    ],
    myWork: [
      "Application development",
      "CRUD and validation workflows",
      "Dashboard and financial summaries",
      "Multi-sheet Excel reporting",
    ],
    result:
      "A structured reporting application that records production, premium, and claims data and exports it into multi-sheet Excel reports.",
  },
];

export type Service = {
  tier: string;
  name: string;
  price: string;
  description: string;
  listLabel: string;
  items: string[];
  examples?: string[];
  cta: string;
  emphasis?: boolean;
};

export const services: Service[] = [
  {
    tier: "Starter",
    name: "Business Website",
    price: "Rp750,000",
    description:
      "For small businesses, services, personal brands, and companies that need a professional online presence.",
    listLabel: "Includes",
    items: [
      "Modern landing page",
      "Responsive design",
      "Product/service showcase",
      "WhatsApp integration",
      "Contact section",
      "Basic SEO",
      "Deployment assistance",
    ],
    cta: "Discuss Website",
  },
  {
    tier: "Growth",
    name: "Business System",
    price: "Rp2,000,000",
    description:
      "For businesses that want to reduce repetitive manual work and manage daily operations more efficiently.",
    listLabel: "Includes",
    items: [
      "Dashboard",
      "Authentication",
      "CRUD workflows",
      "Inventory",
      "Transaction management",
      "Reports",
      "User roles",
      "Responsive interface",
    ],
    examples: ["POS", "Inventory System", "Restaurant Management", "Internal Dashboard"],
    cta: "Discuss System",
    emphasis: true,
  },
  {
    tier: "Automation",
    name: "AI Business Solution",
    price: "Rp2,000,000",
    description: "AI-powered workflows designed around specific business problems.",
    listLabel: "Available solutions",
    items: [
      "AI customer support",
      "FAQ assistant",
      "Lead qualification",
      "Document extraction",
      "Automated reporting",
      "Internal knowledge assistant",
      "Workflow automation",
    ],
    cta: "Discuss Automation",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem and current workflow.",
  },
  {
    number: "02",
    title: "Design",
    description: "Define the simplest useful solution.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop efficiently using modern software tools and AI-assisted workflows.",
  },
  {
    number: "04",
    title: "Test",
    description: "Test functionality, responsiveness, and usability.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Prepare and launch the application.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Iterate based on real usage and business needs.",
  },
];

export const aiTools = ["ChatGPT", "OpenCode", "Claude", "Lovable", "Base44"];

export const devStack = [
  "Laravel",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MySQL / MariaDB",
  "Prisma",
  "Git",
  "GitHub",
];

export const projectAreas = [
  "Personal finance",
  "POS systems",
  "Restaurant operations",
  "Internal business systems",
  "Reporting automation",
];

export const contact = {
  email: null as string | null,
  whatsapp: null as string | null,
};

export function getContactHref() {
  const whatsapp = (
    process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ||
    contact.whatsapp ||
    ""
  ).trim();

  if (whatsapp) {
    const digits = whatsapp.replace(/\D/g, "");

    if (digits) {
      const normalized = digits.startsWith("0")
        ? `62${digits.slice(1)}`
        : digits.startsWith("62")
          ? digits
          : `62${digits}`;

      return `https://wa.me/${normalized}`;
    }
  }

  const email = (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    contact.email ||
    ""
  ).trim();

  return email ? `mailto:${email}` : null;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
