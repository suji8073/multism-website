import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, ElementType } from 'react'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-bold tracking-tight text-balance', {
  variants: {
    size: {
      display: 'text-[clamp(32px,4.6vw,56px)] leading-[1.2]',
      xl: 'text-[clamp(28px,3.4vw,40px)] leading-snug',
      lg: 'text-2xl leading-snug',
      md: 'text-xl leading-snug',
      sm: 'text-lead leading-snug',
    },
    tone: {
      default: 'text-foreground',
      primary: 'text-primary',
      inverse: 'text-white',
    },
  },
  defaultVariants: { size: 'lg', tone: 'default' },
})

type HeadingProps = ComponentProps<'h2'> &
  VariantProps<typeof headingVariants> & { as?: 'h1' | 'h2' | 'h3' | 'h4' }

function Heading({ as: Tag = 'h2', size, tone, className, ...props }: HeadingProps) {
  return <Tag className={cn(headingVariants({ size, tone }), className)} {...props} />
}

/** 제목 안 강조 구간(포인트 컬러) */
function Highlight({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'text-accent-strong relative isolate inline-block after:absolute after:inset-x-0 after:bottom-[0.08em] after:-z-10 after:h-[0.32em] after:rounded-full after:bg-spark-yellow/45',
        className,
      )}
      {...props}
    />
  )
}

const textVariants = cva('', {
  variants: {
    size: {
      lg: 'text-lead sm:text-lg',
      md: 'text-body',
      sm: 'text-caption',
      xs: 'text-xs',
    },
    tone: {
      default: 'text-foreground',
      subtle: 'text-subtle-foreground',
      muted: 'text-muted-foreground',
      inverse: 'text-[#D6DEEA]',
    },
    weight: { regular: '', medium: 'font-medium', bold: 'font-bold' },
  },
  defaultVariants: { size: 'md', tone: 'subtle', weight: 'regular' },
})

type TextProps = ComponentProps<'p'> & VariantProps<typeof textVariants> & { as?: ElementType }

function Text({ as: Tag = 'p', size, tone, weight, className, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ size, tone, weight }), className)} {...props} />
}

const eyebrowVariants = cva('font-display inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase', {
  variants: {
    tone: { primary: 'text-primary', accent: 'text-accent-strong', inverse: 'text-[#C9D3E3]' },
  },
  defaultVariants: { tone: 'primary' },
})

/** 로고 축포에서 가져온 작은 불꽃 장식 */
function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden className={cn('h-3 w-auto shrink-0', className)} fill="none" strokeLinecap="round">
      <path d="M12 9 V2" stroke="var(--logo-orange)" strokeWidth="2.4" />
      <path d="M16 10 L20.5 5.5" stroke="var(--logo-yellow)" strokeWidth="2.4" />
      <path d="M8 10 L3.5 5.5" stroke="var(--spark-sky)" strokeWidth="2.4" />
    </svg>
  )
}

type EyebrowProps = ComponentProps<'span'> & VariantProps<typeof eyebrowVariants> & { spark?: boolean }

/** 섹션 영문 라벨 (예: WHY MULTI SM). 기본으로 앞에 불꽃 장식 */
function Eyebrow({ tone, spark = true, className, children, ...props }: EyebrowProps) {
  return (
    <span className={cn(eyebrowVariants({ tone }), className)} {...props}>
      {spark && <Spark />}
      {children}
    </span>
  )
}

export { Eyebrow, Heading, Highlight, Spark, Text }
