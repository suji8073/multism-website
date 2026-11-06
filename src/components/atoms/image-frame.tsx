import { cva, type VariantProps } from 'class-variance-authority'
import { ImageIcon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const frameVariants = cva('bg-muted relative overflow-hidden', {
  variants: {
    ratio: {
      '4/3': 'aspect-[4/3]',
      '3/2': 'aspect-[3/2]',
      '16/9': 'aspect-[16/9]',
      '1/1': 'aspect-square',
      fill: 'size-full',
    },
    rounded: { none: '', md: 'rounded-lg', lg: 'rounded-2xl' },
  },
  defaultVariants: { ratio: '4/3', rounded: 'md' },
})

type ImageFrameProps = VariantProps<typeof frameVariants> & {
  src?: string
  alt?: string
  /** 부모에 group 클래스가 있을 때 호버 확대 */
  zoomOnHover?: boolean
  eager?: boolean
  className?: string
}

/** 비율 고정 이미지. src가 없으면 사진 자리 표시 */
function ImageFrame({ src, alt = '', ratio, rounded, zoomOnHover = true, eager, className }: ImageFrameProps) {
  return (
    <div className={cn(frameVariants({ ratio, rounded }), className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          className={cn(
            'size-full object-cover',
            zoomOnHover && 'transition-transform duration-500 ease-out group-hover:scale-[1.05]',
          )}
        />
      ) : (
        <div className="text-muted-foreground/60 flex size-full flex-col items-center justify-center gap-1.5">
          <ImageIcon className="size-7" />
          <span className="text-xs">사진 준비 중</span>
        </div>
      )}
    </div>
  )
}

export { ImageFrame }
