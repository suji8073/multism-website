import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = { title: 'Atoms/Tabs & ToggleGroup', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const CATS = ['전체', '체육대회', '축제·상인회', '주민의 날', '착공·개소식', '마라톤·걷기']

export const UnderlineTabs: Story = {
  render: () => (
    <Tabs defaultValue="전체">
      <TabsList>
        {CATS.map((c) => (
          <TabsTrigger key={c} value={c}>
            {c}
          </TabsTrigger>
        ))}
      </TabsList>
      {CATS.map((c) => (
        <TabsContent key={c} value={c} className="text-muted-foreground text-sm">
          {c} 실적 목록
        </TabsContent>
      ))}
    </Tabs>
  ),
}

export const SelectList: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="체육대회 · 운동회" className="max-w-sm" aria-label="행사 유형">
      {['체육대회 · 운동회', '지역 축제 · 노래자랑', '착공식 · 개소식'].map((t) => (
        <ToggleGroupItem key={t} value={t}>
          {t}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  ),
}
