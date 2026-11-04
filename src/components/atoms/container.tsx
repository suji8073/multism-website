import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/** 페이지 공통 최대 폭(1240px) + 좌우 여백 */
function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1240px] px-4 sm:px-6', className)} {...props} />
}

export { Container }
