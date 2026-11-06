import { BlurFade } from '@/components/atoms/blur-fade'
import { cn } from '@/lib/utils'

type Step = { no: string; en: string; ko: string; desc: string }

type ProcessTimelineProps = {
  steps: readonly Step[]
  className?: string
}

/** 진행 단계 타임라인 — 번호 원이 선으로 이어지고 순서대로 나타남 */
function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <ol className={cn('grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8', className)}>
      {steps.map((s, i) => (
        <BlurFade key={s.no} inView direction="up" offset={28} duration={0.5} delay={0.15 * i} className="h-full">
          <li className="relative flex h-full flex-col gap-2">
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="bg-primary-soft-border absolute top-6 left-12 hidden h-px w-[calc(100%-2rem)] lg:block"
              />
            )}
            <span
              className={cn(
                'relative z-10 flex size-12 items-center justify-center rounded-full border-2 text-body font-bold',
                i === 0 || i === steps.length - 1
                  ? 'bg-primary border-primary text-white'
                  : 'border-primary-soft-border bg-background text-primary',
              )}
            >
              {s.no}
            </span>
            <span className="text-muted-foreground font-display mt-2 text-[11px] font-semibold tracking-wider">
              {s.en}
            </span>
            <span className="text-base font-bold">{s.ko}</span>
            <span className="text-muted-foreground text-caption leading-relaxed">{s.desc}</span>
          </li>
        </BlurFade>
      ))}
    </ol>
  )
}

export { ProcessTimeline }
