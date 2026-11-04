import { Toaster as Sonner, type ToasterProps } from 'sonner'

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        classNames: {
          toast: 'rounded-md! border-border! font-sans!',
          title: 'font-bold!',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
export { toast } from 'sonner'
