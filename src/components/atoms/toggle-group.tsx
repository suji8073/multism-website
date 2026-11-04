import { CaretRightIcon, CheckIcon } from '@phosphor-icons/react'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/** 견적 문의의 '행사 유형' 같은 세로형 선택 목록 */
function ToggleGroup({ className, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function ToggleGroupItem({ className, children, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        'group border-border text-subtle-foreground hover:bg-muted data-[state=on]:border-primary data-[state=on]:bg-primary-soft data-[state=on]:text-primary flex min-h-12 cursor-pointer items-center justify-between rounded-md border px-4 text-left text-[15px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=on]:font-bold',
        className,
      )}
      {...props}
    >
      {children}
      <CheckIcon aria-hidden weight="bold" className="hidden size-4 group-data-[state=on]:block" />
      <CaretRightIcon aria-hidden className="text-muted-foreground size-4 group-data-[state=on]:hidden" />
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
