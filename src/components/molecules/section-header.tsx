import type { ReactNode } from 'react'
import { BlurFade } from '@/components/atoms/blur-fade'
import { Eyebrow, Heading, Text } from '@/components/atoms/typography'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  /** 영문 라벨 (예: WHY MULTI SM) */
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** 오른쪽 끝에 붙는 링크·버튼 */
  action?: ReactNode
  align?: 'left' | 'center'
  /** 네이비 배경 위 */
  inverse?: boolean
  className?: string
}

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  inverse,
  className,
}: SectionHeaderProps) {
  return (
    <BlurFade inView>
      <div
        className={cn(
          'flex flex-wrap items-end justify-between gap-x-10 gap-y-5',
          align === 'center' && 'flex-col items-center text-center',
          className,
        )}
      >
        <div className={cn('flex max-w-2xl flex-col gap-3', align === 'center' && 'items-center')}>
          <Eyebrow tone={inverse ? 'inverse' : 'primary'}>{eyebrow}</Eyebrow>
          <Heading size="xl" tone={inverse ? 'inverse' : 'default'}>
            {title}
          </Heading>
          {description && (
            <Text tone={inverse ? 'inverse' : 'subtle'} className="max-w-xl">
              {description}
            </Text>
          )}
        </div>
        {action}
      </div>
    </BlurFade>
  )
}

export { SectionHeader }
