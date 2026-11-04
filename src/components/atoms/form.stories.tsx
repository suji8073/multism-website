import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'
import { Label } from './label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Textarea } from './textarea'

const meta = { title: 'Atoms/Form Fields', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Fields: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="org">단체명</Label>
        <Input id="org" placeholder="예: OO동 주민자치회" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type">행사 유형</Label>
        <Select>
          <SelectTrigger id="type">
            <SelectValue placeholder="선택해 주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sports">체육대회</SelectItem>
            <SelectItem value="festival">축제 · 노래자랑</SelectItem>
            <SelectItem value="ceremony">착공식 · 개소식</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="memo">요청사항</Label>
        <Textarea id="memo" placeholder="장소, 예상 인원, 필요한 장비 등을 적어주세요" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="err">오류 상태</Label>
        <Input id="err" aria-invalid defaultValue="010-" />
      </div>
    </div>
  ),
}
