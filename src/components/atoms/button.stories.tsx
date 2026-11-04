import type { Meta, StoryObj } from '@storybook/react-vite'
import { PhoneIcon } from '@phosphor-icons/react'
import { Button } from './button'

const VARIANTS = ['default', 'accent', 'outline', 'outline-primary', 'soft', 'ghost', 'inverse', 'link'] as const

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: '견적 문의하기', disabled: false },
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'select', options: ['sm', 'default', 'lg', 'icon'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {VARIANTS.map((variant) => (
        <div key={variant} className={variant === 'inverse' ? 'bg-primary rounded-md p-2' : ''}>
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} size="sm">Small</Button>
      <Button {...args}>Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="전화">
        <PhoneIcon />
      </Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="outline-primary">
      <a href="tel:01042259916">
        <PhoneIcon weight="bold" />
        바로 전화 상담
      </a>
    </Button>
  ),
}
