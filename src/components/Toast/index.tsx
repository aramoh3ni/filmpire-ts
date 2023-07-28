import { Toast as DefaultToast } from 'flowbite-react'

import { HiFire } from 'react-icons/hi'

export const Toast = ({ message }: { message: string }) => {
  return (
    <DefaultToast className="absolute right-4 bottom-4">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <DefaultToast.Toggle />
    </DefaultToast>
  )
}
