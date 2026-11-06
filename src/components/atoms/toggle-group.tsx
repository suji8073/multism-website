import { CaretRightIcon, CheckIcon } from '@phosphor-icons/react'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ToggleGroupProps = ComponentProps<typeof ToggleGroupPrimitive.Root> & {
  /** list: 세로 목록 / chips: 줄바꿈되는 알약 버튼 (좁은 공간용) */
  layout?: 'list' | 'chips'
}

/** 견적 문의의 '행사 유형' 같은 선택 목록 */
function ToggleGroup({ className, layout = 'list', ...props }: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-layout={layout}
      className={cn('group/tg flex gap-2', layout === 'list' ? 'flex-col' : 'flex-row flex-wrap', className)}
      {...props}
    />
  )
}

function ToggleGroupItem({ className, children, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        'group border-border text-subtle-foreground hover:bg-muted data-[state=on]:border-primary data-[state=on]:bg-primary-soft data-[state=on]:text-primary flex min-h-12 cursor-pointer items-center justify-between rounded-md border px-4 text-left text-body font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=on]:font-bold',
        'group-data-[layout=chips]/tg:min-h-9 group-data-[layout=chips]/tg:rounded-full group-data-[layout=chips]/tg:px-3.5 group-data-[layout=chips]/tg:text-sm',
        className,
      )}
      {...props}
    >
      {children}
      <CheckIcon
        aria-hidden
        weight="bold"
        className="hidden size-4 group-data-[state=on]:block group-data-[layout=chips]/tg:!hidden"
      />
      <CaretRightIcon
        aria-hidden
        className="text-muted-foreground size-4 group-data-[state=on]:hidden group-data-[layout=chips]/tg:hidden"
      />
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
