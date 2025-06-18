
import type { ReactNode } from "react"
import { cn } from "../../utils/cn"

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <>
      <div className={cn("mx-auto w-full px-4 md:max-w-[1400px] md:px-8 lg:max-w-screen-2xl ", className)}>
        {children}
      </div>
    </>
  )
}

export default MaxWidthWrapper
