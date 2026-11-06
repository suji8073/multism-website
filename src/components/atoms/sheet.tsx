import { XIcon } from '@phosphor-icons/react'
import { Dialog as SheetPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/** 화면 옆에서 밀려 나오는 패널 (모바일 메뉴 등) — Radix Dialog 기반 */
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetTitle = SheetPrimitive.Title

type SheetContentProps = ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'right' | 'left'
  /** 닫기(X) 버튼 접근성 이름 */
  closeLabel?: string
}

function SheetContent({ side = 'right', closeLabel = '닫기', className, children, ...props }: SheetContentProps) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-50 bg-[#0A1D3B]/45 backdrop-blur-[2px]" />
      <SheetPrimitive.Content
        aria-describedby={undefined}
        className={cn(
          'bg-background fixed inset-y-0 z-50 flex w-[72%] max-w-[300px] flex-col shadow-[0_0_40px_rgba(15,42,85,0.18)] duration-300 ease-out',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200',
          side === 'right'
            ? 'right-0 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
            : 'left-0 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          aria-label={closeLabel}
          className="hover:bg-muted focus-visible:ring-ring absolute top-4 right-4 flex size-10 cursor-pointer items-center justify-center rounded-md outline-none focus-visible:ring-2"
        >
          <XIcon className="size-6" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

export { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger }
