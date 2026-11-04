import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo, LogoSymbol } from './logo'

const meta = { title: 'Atoms/Logo', component: Logo, tags: ['autodocs'] } satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnNavy: Story = {
  render: () => (
    <div className="bg-primary inline-flex rounded-md p-6">
      <Logo tone="dark" />
    </div>
  ),
}

export const Symbols: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <LogoSymbol className="h-24" />
      <LogoSymbol className="h-12" />
      <div className="bg-primary flex size-10 items-center justify-center rounded-lg">
        <LogoSymbol tone="dark" compact className="h-6" />
      </div>
    </div>
  ),
}
