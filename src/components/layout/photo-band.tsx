import type { ReactNode } from 'react'
import { Container } from '@/components/atoms/container'
import { cn } from '@/lib/utils'

type PhotoBandProps = {
  image: string
  children: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** 섹션 사이 화면 폭 전체 사진 띠 + 문구 */
function PhotoBand({ image, children, align = 'center', className }: PhotoBandProps) {
  return (
    <section className={cn('relative isolate overflow-hidden text-white', className)}>
      <img src={image} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#0A1D3B]/70" />
      <Container
        className={cn(
          'flex min-h-[360px] flex-col justify-center gap-4 py-16 lg:min-h-[420px]',
          align === 'center' && 'items-center text-center',
        )}
      >
        {children}
      </Container>
    </section>
  )
}

export { PhotoBand }
