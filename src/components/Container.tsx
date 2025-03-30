import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends ComponentProps<"div"> {
   parentClassName?: string;
   verticalPadding?: boolean
   Landing?: boolean
}
export default function Container({ parentClassName, Landing, verticalPadding, children }: ContainerProps) {
   return (
      <div
         className={twMerge(
            `px-[30px] md:px-[80px] xl:px-[120px] lg:max-w-[1920px] mx-auto
            ${verticalPadding && 'py-[40px]'}
            ${Landing && 'px-[40px] md:px-[130px]'}
            `,
            parentClassName,
         )}
         >
         {children}
      </div>
   );
}
