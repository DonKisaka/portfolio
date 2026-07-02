import Link from 'next/link'
import Image from 'next/image'

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface Project {
  title: string
  category: string
  subtitle: string
  gradient: string
  accentColor: string
  description: string
  highlights: string[]
  stack: { label: string; color: string }[]
  docsHref: string
  githubHref: string
  docsLabel?: string
}

/* ─────────────────────────────────────────
   Project Data
───────────────────────────────────────── */
const projects: Project[] = [
  {
    title: 'Customer Support Platform',
    category: 'A2A Multi-Agent · Orchestrator Pattern',
    subtitle: 'Spring AI · Claude Haiku · A2A Protocol · RAG · pgvector · Docker',
    gradient: 'bg-gradient-to-br from-[#0d1f0a] via-[#071408] to-[#020602]',
    accentColor: 'green',
    description:
      'A production-pattern AI customer support platform built on Agent-to-Agent (A2A) communication. A central orchestrator powered by Claude Haiku routes customer queries to specialist sub-agents — billing, tech support, and escalation — each with their own tools, databases, and system prompts. The tech support agent answers questions using RAG over uploaded product documentation.',
    highlights: [
      'Orchestrator uses TaskTool + SubagentReference to discover and invoke agents via the A2A protocol over HTTP',
      'Each agent publishes an AgentCard at /.well-known/agent.json for standardised capability discovery',
      'Tech support agent uses RAG with Ollama (nomic-embed-text) and pgvector for document Q&A',
      'Billing agent queries PostgreSQL for invoices, balances, and overdue accounts via Spring Data JPA',
      'Escalation agent manages priority tickets (LOW / MEDIUM / HIGH / CRITICAL) with full lifecycle tracking',
      'Full multi-module Maven project — 4 independent Spring Boot services orchestrated with Docker Compose',
    ],
    stack: [
      { label: 'Spring AI 2.0',    color: 'green'   },
      { label: 'A2A Protocol',     color: 'emerald' },
      { label: 'Claude Haiku',     color: 'teal'    },
      { label: 'RAG + pgvector',   color: 'cyan'    },
      { label: 'Ollama',           color: 'lime'    },
      { label: 'PostgreSQL 17',    color: 'blue'    },
      { label: 'Docker Compose',   color: 'sky'     },
      { label: 'Java 25',          color: 'emerald' },
    ],
    docsHref:   'https://github.com/DonKisaka/customer-support-platform#readme',
    githubHref: 'https://github.com/DonKisaka/customer-support-platform',
    docsLabel:  'Docs',
  },
  {
    title: 'Multi-Skill Agent',
    category: 'Agentic AI · Multi-Skill · Streaming',
    subtitle: 'Spring AI · Claude · WebFlux · SSE · PostgreSQL · Docker',
    gradient: 'bg-gradient-to-br from-[#1a0a2e] via-[#0f0520] to-[#030008]',
    accentColor: 'fuchsia',
    description:
      'A production-pattern conversational AI agent with domain-specific Skills — expense tracking, task management, summarization, and human-in-the-loop clarification. Each capability is modelled as a Skill interface with its own instructions and tools, composable into a single agent with zero changes to core logic.',
    highlights: [
      'Skill abstraction: adding a new capability means writing one class — no changes to the agent core',
      'Streams responses token-by-token via Spring WebFlux + Server-Sent Events',
      'AskUserTool pauses execution to request missing info instead of hallucinating values',
      'TodoWriteTool forces the agent to write an explicit plan before acting on multi-step requests',
      'Full session isolation — conversation memory, tasks, and plans all scoped to sessionId',
    ],
    stack: [
      { label: 'Spring AI 2.0',  color: 'fuchsia' },
      { label: 'Claude Haiku',   color: 'pink'    },
      { label: 'Spring WebFlux', color: 'purple'  },
      { label: 'SSE Streaming',  color: 'violet'  },
      { label: 'PostgreSQL',     color: 'blue'    },
      { label: 'Spring Boot 4',  color: 'emerald' },
    ],
    docsHref:   'https://github.com/DonKisaka/multi-skill-agent#readme',
    githubHref: 'https://github.com/DonKisaka/multi-skill-agent',
    docsLabel:  'Docs',
  },
  {
    title: 'Expense Agent',
    category: 'Agentic AI · Tool Calling',
    subtitle: 'Spring AI · Ollama · PostgreSQL · Docker',
    gradient: 'bg-gradient-to-br from-[#1e0a3c] via-[#130525] to-[#050011]',
    accentColor: 'violet',
    description:
      'A conversational AI agent that manages personal expenses through natural language — no forms, no clicks. The LLM autonomously decides which database operation to run and executes it directly against PostgreSQL using Spring AI tool calling.',
    highlights: [
      'Uses Spring AI tool calling so the model decides what to query or write',
      'Session memory keeps conversational context across multiple messages',
      'Zero frontend required — the LLM is the interface',
    ],
    stack: [
      { label: 'Spring AI',     color: 'violet'  },
      { label: 'Tool Calling',  color: 'purple'  },
      { label: 'Ollama',        color: 'indigo'  },
      { label: 'PostgreSQL',    color: 'blue'    },
      { label: 'Docker',        color: 'sky'     },
      { label: 'Spring Boot 4', color: 'emerald' },
    ],
    docsHref:   'https://github.com/DonKisaka/expense-agent#readme',
    githubHref: 'https://github.com/DonKisaka/expense-agent',
    docsLabel:  'Docs',
  },
  {
    title: 'Fraud Detection',
    category: 'Event-Driven · Async AI',
    subtitle: 'Spring AI · Apache Kafka · Ollama · Docker',
    gradient: 'bg-gradient-to-br from-[#2d0a0a] via-[#1a0505] to-[#050000]',
    accentColor: 'red',
    description:
      'Event-driven fraud detection where orders are published to Kafka and analysed asynchronously — customers get an instant HTTP 200 while Ollama (llama3.2) evaluates the transaction in the background. No API costs, no data leaving the machine.',
    highlights: [
      'Fully async: order placement and fraud analysis decoupled via Kafka',
      'Runs Ollama locally — zero per-request costs and full data sovereignty',
      'Fraud results published back to Kafka for downstream consumers',
    ],
    stack: [
      { label: 'Spring AI',     color: 'red'     },
      { label: 'Kafka',         color: 'orange'  },
      { label: 'Ollama',        color: 'amber'   },
      { label: 'Docker',        color: 'sky'     },
      { label: 'Spring Boot 4', color: 'emerald' },
      { label: 'Async',         color: 'rose'    },
    ],
    docsHref:   'https://github.com/DonKisaka/fraud-detection#readme',
    githubHref: 'https://github.com/DonKisaka/fraud-detection',
    docsLabel:  'Docs',
  },
  {
    title: 'RAG System',
    category: 'Retrieval-Augmented Generation',
    subtitle: 'Spring AI · Ollama · Vector Store · PostgreSQL',
    gradient: 'bg-gradient-to-br from-[#0a1a2d] via-[#050e1a] to-[#010508]',
    accentColor: 'blue',
    description:
      'A full RAG pipeline built with Spring AI — documents are ingested, chunked, and stored as vector embeddings. Queries trigger semantic vector search against the store, retrieving relevant context before passing it to the LLM for grounded, source-backed responses.',
    highlights: [
      'Document ingestion pipeline: upload → chunk → embed → store',
      'Semantic search retrieves the most relevant context at query time',
      'Grounded responses backed by source documents — no hallucinations',
    ],
    stack: [
      { label: 'Spring AI',    color: 'blue'   },
      { label: 'Vector Store', color: 'indigo' },
      { label: 'Ollama',       color: 'sky'    },
      { label: 'Embeddings',   color: 'cyan'   },
      { label: 'PostgreSQL',   color: 'blue'   },
      { label: 'Docker',       color: 'slate'  },
    ],
    docsHref:   'https://github.com/DonKisaka/rag-system#readme',
    githubHref: 'https://github.com/DonKisaka/rag-system',
    docsLabel:  'Docs',
  },
  {
    title: 'Invoice Processor',
    category: 'Structured Extraction · LLM',
    subtitle: 'Spring AI · Anthropic Claude · PostgreSQL · Docker',
    gradient: 'bg-gradient-to-br from-[#2d1f00] via-[#1a1100] to-[#080500]',
    accentColor: 'amber',
    description:
      'A Spring Boot service that uses Anthropic Claude via Spring AI to extract structured data from raw invoice text — vendor, amount, date, line items — and persist it to PostgreSQL. Spring AI structured output maps LLM responses directly to Java objects with zero manual parsing.',
    highlights: [
      'Powered by Anthropic Claude for precise structured data extraction',
      'Spring AI structured output eliminates all manual JSON parsing',
      'Extracted data automatically persisted to PostgreSQL via Spring Data JPA',
    ],
    stack: [
      { label: 'Spring AI',         color: 'amber'   },
      { label: 'Claude',            color: 'yellow'  },
      { label: 'Structured Output', color: 'orange'  },
      { label: 'PostgreSQL',        color: 'blue'    },
      { label: 'Docker',            color: 'sky'     },
      { label: 'Spring Boot',       color: 'emerald' },
    ],
    docsHref:   'https://github.com/DonKisaka/invoice-processor#readme',
    githubHref: 'https://github.com/DonKisaka/invoice-processor',
    docsLabel:  'Docs',
  },
  {
    title: 'Spring AI Starter',
    category: 'Reference Project · Full Feature Set',
    subtitle: 'RAG · Embeddings · Tool Calling · Structured Output · Claude & Ollama',
    gradient: 'bg-gradient-to-br from-[#0a2d14] via-[#051a0a] to-[#010802]',
    accentColor: 'emerald',
    description:
      'A hands-on reference project covering the full Spring AI feature set — RAG pipelines, vector embeddings, tool calling, structured output, and prompt templates. Runs against both Anthropic Claude and Ollama, making it easy to switch between cloud and local LLMs.',
    highlights: [
      'Covers every major Spring AI feature in one runnable project',
      'Supports both Anthropic Claude (cloud) and Ollama (local) — swap with config',
      'Built as a practical learning resource for Java engineers starting with AI',
    ],
    stack: [
      { label: 'Spring AI',  color: 'emerald' },
      { label: 'Claude',     color: 'teal'    },
      { label: 'Ollama',     color: 'green'   },
      { label: 'RAG',        color: 'lime'    },
      { label: 'Embeddings', color: 'cyan'    },
      { label: 'Java 25',    color: 'emerald' },
    ],
    docsHref:   'https://github.com/DonKisaka/spring-ai-starter#readme',
    githubHref: 'https://github.com/DonKisaka/spring-ai-starter',
    docsLabel:  'Docs',
  },
]

/* ─────────────────────────────────────────
   Stack Pill
───────────────────────────────────────── */
const Pill = ({ label, color }: { label: string; color: string }) => (
  <span
    className={`inline-flex h-6 items-center justify-center px-3 rounded-full
      bg-${color}-500/20 text-${color}-200 text-xs font-medium whitespace-nowrap`}
  >
    {label}
  </span>
)

/* ─────────────────────────────────────────
   Accent map for button colors
───────────────────────────────────────── */
const accentMap: Record<string, string> = {
  green:   'text-green-300   border-green-300   hover:bg-green-300',
  fuchsia: 'text-fuchsia-300 border-fuchsia-300 hover:bg-fuchsia-300',
  violet:  'text-violet-300  border-violet-300  hover:bg-violet-300',
  red:     'text-red-300     border-red-300     hover:bg-red-300',
  blue:    'text-blue-300    border-blue-300    hover:bg-blue-300',
  amber:   'text-amber-300   border-amber-300   hover:bg-amber-300',
  emerald: 'text-emerald-300 border-emerald-300 hover:bg-emerald-300',
}

/* ─────────────────────────────────────────
   Project Card
───────────────────────────────────────── */
const ProjectCard = ({ project }: { project: Project }) => {
  const accent = accentMap[project.accentColor] ?? accentMap.emerald

  return (
    <div className="rounded-xl border border-[#D3D3D3]/20 overflow-hidden bg-[#111111]">
      {/* Banner */}
      <Link target="_blank" href={project.githubHref}>
        <div
          className={`w-full h-[180px] ${project.gradient} border-b border-white/10
            p-6 flex flex-col justify-between transition-opacity hover:opacity-90`}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`text-xs uppercase tracking-[0.35em] text-${project.accentColor}-300 font-medium`}>
              {project.category}
            </span>
            <p className="text-2xl font-extrabold text-white leading-tight">{project.title}</p>
          </div>
          <p className="text-sm text-gray-400">{project.subtitle}</p>
        </div>
      </Link>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4">
        <p className="text-[#D3D3D3] text-sm leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="text-sm text-[#D3D3D3]/70 flex gap-2">
              <span className={`text-${project.accentColor}-400 mt-[2px] shrink-0`}>→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Pill key={s.label} label={s.label} color={s.color} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            target="_blank"
            href={project.docsHref}
            className={`uppercase text-xs font-bold rounded-full px-4 py-2 border
              bg-transparent hover:text-gray-900 transition-all flex items-center gap-2
              whitespace-nowrap ${accent}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
            </svg>
            {project.docsLabel ?? 'Docs'}
          </Link>
          <Link
            target="_blank"
            href={project.githubHref}
            className="uppercase text-xs font-bold rounded-full px-4 py-2 border border-white
              text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all
              flex items-center gap-2 whitespace-nowrap"
          >
            <Image src="/github-icon.svg" alt="GitHub" width={16} height={16}
              className="text-transparent" loading="lazy" />
            Source code
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function SpringAIPage() {
  return (
    <main className="w-full min-h-screen pb-20">
      <div className="w-full mx-auto">

        {/* ── Back link ── */}
        <div className="pt-10 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#D3D3D3]/60
              hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
            </svg>
            Back to portfolio
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-400 font-medium">
              Spring AI · Java
            </span>
          </div>
          <h1 className="text-white font-bold text-3xl mb-4 leading-tight">
            Spring AI Projects
          </h1>
          <p className="text-[#D3D3D3] max-w-2xl leading-relaxed text-[15px]">
            A collection of production-pattern AI projects built with the{' '}
            <span className="text-white font-medium">Spring AI ecosystem</span> — A2A multi-agent
            systems, agentic assistants, RAG pipelines, event-driven LLM inference, and structured
            data extraction. Projects run against either{' '}
            <span className="text-white font-medium">Anthropic Claude</span> or{' '}
            <span className="text-white font-medium">Ollama</span> (local LLMs),
            containerised with Docker, and built on Spring Boot 4.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { value: '7',               label: 'Projects'       },
              { value: 'Spring AI',       label: 'Core Framework' },
              { value: 'Java 25',         label: 'Language'       },
              { value: 'Claude + Ollama', label: 'LLM Providers'  },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-lg leading-tight">{stat.value}</span>
                <span className="text-[#D3D3D3]/50 text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[#D3D3D3]/10 mb-12" />

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-16 border border-[#D3D3D3]/20 rounded-xl p-8 flex flex-col
          sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base mb-1">Want to collaborate?</p>
            <p className="text-[#D3D3D3]/60 text-sm">
              I&apos;m open to backend, full-stack, or AI engineering roles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/donald-kisaka-a8b90b26b/"
              className="uppercase text-xs font-bold rounded-full px-5 py-2.5 border
                border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-gray-900
                transition-all whitespace-nowrap"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              href="https://github.com/DonKisaka"
              className="uppercase text-xs font-bold rounded-full px-5 py-2.5 border
                border-white text-white hover:bg-white hover:text-gray-900
                transition-all whitespace-nowrap flex items-center gap-2"
            >
              <Image src="/github-icon.svg" alt="GitHub" width={16} height={16}
                className="text-transparent" loading="lazy" />
              GitHub
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}