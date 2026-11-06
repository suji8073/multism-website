import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { Container } from '@/components/atoms/container'
import { cn } from '@/lib/utils'

const sectionVariants = cva('scroll-mt-20', {
  variants: {
    tone: {
      default: 'bg-background',
      muted: 'bg-muted border-y',
      primary: 'bg-primary text-white',
      deep: 'bg-[#0A1D3B] text-white',
      dots: 'bg-muted bg-dots border-y',
      /** 바로 위 섹션(히어로) 아래쪽에 반쯤 겹쳐 올라오는 띠 */
      overlap: 'relative z-10 -mt-14 bg-transparent',
      festive: 'bg-background relative before:bg-bunting before:absolute before:inset-x-0 before:top-0 before:h-[18px] before:opacity-80 before:content-[""]',
    },
    spacing: {
      lg: '[&>div]:py-20 lg:[&>div]:py-28',
      md: '[&>div]:py-14 lg:[&>div]:py-20',
      sm: '[&>div]:py-10',
      none: '',
    },
  },
  defaultVariants: { tone: 'default', spacing: 'lg' },
})

type SectionProps = ComponentProps<'section'> & VariantProps<typeof sectionVariants>

/** 페이지 섹션: 배경 톤 + 상하 여백 + Container */
function Section({ tone, spacing, className, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ tone, spacing }), className)} {...props}>
      <Container className="flex flex-col gap-12">{children}</Container>
    </section>
  )
}

export { Section }
