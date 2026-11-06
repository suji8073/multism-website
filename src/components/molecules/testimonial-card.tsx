import { QuotesIcon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export type Testimonial = {
  quote: string
  /** 기관·단체명 */
  organization: string
  /** 행사명 */
  event: string
}

/** 고객 후기 카드: 인용문 + 기관명 + 행사명 */
function TestimonialCard({ quote, organization, event, className }: Testimonial & { className?: string }) {
  return (
    <figure className={cn('bg-card flex h-full flex-col gap-5 rounded-2xl border p-7', className)}>
      <QuotesIcon weight="fill" aria-hidden className="text-accent size-8" />
      <blockquote className="text-body text-foreground flex-1 font-medium">{quote}</blockquote>
      <figcaption className="flex flex-col gap-0.5 border-t pt-4">
        <b className="text-body">{organization}</b>
        <span className="text-caption text-muted-foreground">{event}</span>
      </figcaption>
    </figure>
  )
}

export { TestimonialCard }
