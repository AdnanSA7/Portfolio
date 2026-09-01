'use client'

interface ProjectVisualProps {
  title: string
  accent: string
  category: string
  index: number
}

const monograms: Record<string, string> = {
  'from-sky-500 to-cyan-500': 'RC',
  'from-emerald-500 to-teal-500': 'RC',
  'from-emerald-500 to-green-600': 'EP',
  'from-indigo-500 to-violet-500': 'ERP',
  'from-amber-500 to-orange-500': 'ATM',
  'from-blue-500 to-indigo-600': 'BD',
  'from-yellow-500 to-orange-600': 'WF',
}

export function ProjectVisual({ title, accent, category, index }: ProjectVisualProps) {
  const glyph = monograms[accent] || title.substring(0, 2).toUpperCase()
  const isFloat = index % 2 === 1

  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden bg-card`}>
      {/* Accent gradient base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-[0.18]`} />
      {/* Secondary wash */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(120% 120% at ${isFloat ? '20%' : '80%'} 30%, rgba(255,255,255,0.14), transparent 55%)`,
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Large monogram */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isFloat ? 'justify-start pl-[12%]' : 'justify-end pr-[12%]'
        }`}
        aria-hidden="true"
      >
        <span className="font-mono text-[7rem] font-bold leading-none text-white/[0.10] sm:text-[9rem]">
          {glyph}
        </span>
      </div>
      {/* Category chip */}
      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-sm">
          {category}
        </span>
      </div>
    </div>
  )
}
