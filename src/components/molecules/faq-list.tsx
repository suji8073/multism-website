import { Reveal } from '@/components/atoms/layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { cn } from '@/lib/utils'

type FaqListProps = {
  items: readonly { q: string; a: string }[]
  className?: string
}

/** 자주 묻는 질문 (shadcn Accordion 기반) */
function FaqList({ items, className }: FaqListProps) {
  return (
    <Accordion type="single" collapsible defaultValue="0" className={cn('flex flex-col gap-3', className)}>
      {items.map((it, i) => (
        <Reveal key={it.q} index={i}>
          <AccordionItem
            value={String(i)}
            className="bg-card data-[state=open]:border-primary-soft-border rounded-2xl border px-6 last:border-b data-[state=open]:shadow-[0_8px_24px_rgba(15,42,85,0.06)]"
          >
            <AccordionTrigger className="gap-4 py-5 text-base font-bold hover:no-underline">
              <span className="flex items-start gap-3">
                <span className="text-accent-strong font-display">Q.</span>
                {it.q}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-subtle-foreground pl-7 text-body leading-relaxed">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  )
}

export { FaqList }
