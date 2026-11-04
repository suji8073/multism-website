import type { Preview } from '@storybook/react-vite'
import { Toaster } from '../src/components/atoms/sonner'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <div className={context.parameters.page ? 'bg-background min-h-screen' : 'bg-background min-h-screen p-6'}>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
}

export default preview
