import { Marquee } from '@/components/atoms/marquee'
import { cn } from '@/lib/utils'

type NameMarqueeProps = {
  items: readonly string[]
  reverse?: boolean
  className?: string
}

/** 기관·단체 이름이 흘러가는 띠 (로고 이미지가 생기면 교체) */
function NameMarquee({ items, reverse, className }: NameMarqueeProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Marquee pauseOnHover reverse={reverse} className="[--duration:40s] [--gap:1rem]">
        {items.map((name) => (
          <span
            key={name}
            className="bg-card text-subtle-foreground flex h-14 items-center rounded-full border px-6 text-body font-bold whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </Marquee>
      <div
        aria-hidden
        className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r"
      />
      <div
        aria-hidden
        className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l"
      />
    </div>
  )
}

export { NameMarquee }
