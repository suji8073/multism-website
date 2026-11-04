import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: '체육대회' },
  argTypes: { variant: { control: 'select', options: ['default', 'solid', 'outline', 'accent', 'neutral'] } },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>체육대회</Badge>
      <Badge variant="solid">NEW</Badge>
      <Badge variant="outline">3년 연속</Badge>
      <Badge variant="accent">인기</Badge>
      <Badge variant="neutral">OX 퀴즈</Badge>
    </div>
  ),
}
