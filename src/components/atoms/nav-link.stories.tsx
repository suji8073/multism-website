import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavLink } from './nav-link'

const meta = { title: 'Atoms/NavLink', component: NavLink, tags: ['autodocs'] } satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = {
  render: () => (
    <nav className="flex gap-8 border-b">
      <NavLink href="#">회사소개</NavLink>
      <NavLink href="#" active>
        사업영역
      </NavLink>
      <NavLink href="#">행사실적</NavLink>
    </nav>
  ),
}

export const List: Story = {
  render: () => (
    <nav className="flex max-w-xs flex-col">
      <NavLink variant="list" href="#">
        회사소개
      </NavLink>
      <NavLink variant="list" href="#" active>
        사업영역
      </NavLink>
      <NavLink variant="list" href="#">
        행사실적
      </NavLink>
    </nav>
  ),
}
