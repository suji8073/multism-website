import { cva, type VariantProps } from 'class-variance-authority'
import { Children, type ComponentProps, type ElementType } from 'react'
import { BlurFade } from './blur-fade'
import { cn } from '@/lib/utils'

/** 세로/가로 쌓기 */
const stackVariants = cva('flex', {
  variants: {
    direction: { col: 'flex-col', row: 'flex-row flex-wrap' },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      between: 'justify-between',
      end: 'justify-end',
    },
  },
  defaultVariants: { direction: 'col', gap: 4 },
})

type StackProps = ComponentProps<'div'> & VariantProps<typeof stackVariants> & { as?: ElementType }

function Stack({ as: Tag = 'div', direction, gap, align, justify, className, ...props }: StackProps) {
  return <Tag className={cn(stackVariants({ direction, gap, align, justify }), className)} {...props} />
}

/** 반응형 그리드: cols = 모바일 → sm → lg 열 수 */
const gridVariants = cva('grid', {
  variants: {
    cols: {
      '1-2-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      '1-2-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      '2-2-4': 'grid-cols-2 lg:grid-cols-4',
      '2-3-5': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
      '2-4-8': 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
      '2-3-6': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
      '1-2': 'grid-cols-1 sm:grid-cols-2',
      '1-5': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
      hero: 'grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(340px,1fr)]',
      split: 'grid-cols-1 lg:grid-cols-2',
    },
    gap: {
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-x-6 gap-y-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: { cols: '1-2-3', gap: 4 },
})

type GridProps = ComponentProps<'div'> &
  VariantProps<typeof gridVariants> & {
    as?: ElementType
    /** 스크롤해서 보일 때 칸이 하나씩 순서대로 떠오름 */
    reveal?: boolean
  }

function Grid({ as: Tag = 'div', cols, gap, align, reveal, className, children, ...props }: GridProps) {
  return (
    <Tag className={cn(gridVariants({ cols, gap, align }), className)} {...props}>
      {reveal
        ? Children.toArray(children).map((child, i) => (
            <Reveal key={i} index={i}>
              {child}
            </Reveal>
          ))
        : children}
    </Tag>
  )
}

/** 스크롤 등장 — index 순서대로 살짝 늦게 아래에서 떠오름 */
function Reveal({ index = 0, className, children }: { index?: number; className?: string; children: React.ReactNode }) {
  return (
    <BlurFade
      inView
      direction="up"
      offset={24}
      duration={0.6}
      delay={0.08 * (index % 8)}
      className={cn('h-full', className)}
    >
      {children}
    </BlurFade>
  )
}

export { Grid, Reveal, Stack }
