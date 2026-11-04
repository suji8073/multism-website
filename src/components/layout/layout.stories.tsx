import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './footer'
import { Header } from './header'
import { MobileBottomBar } from './mobile-bottom-bar'
import { UtilityBar } from './utility-bar'

const meta = { title: 'Layout', tags: ['autodocs'], parameters: { page: true } } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Shell: Story = {
  render: () => (
    <div>
      <UtilityBar />
      <Header />
      <div className="text-muted-foreground flex h-96 items-center justify-center text-sm">본문 영역</div>
      <Footer />
      <MobileBottomBar />
    </div>
  ),
}
