"use client";

import { FC, ReactNode, useRef, useState } from "react";
import s from "./SkillList.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { tooltipVariants } from "@/motions/portfolio";
import { tooltipVariants as mobileTooltipVariants } from "@/motions/contactPage";
import useMediaQuery from "@/hooks/useMediaQuery";

type SkillItemTooltipWrapperProps = {
  content: string;
  trigger: ReactNode;
};

export const SkillItemTooltipWrapper: FC<SkillItemTooltipWrapperProps> = ({
  content,
  trigger,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipWrapperRef = useRef<HTMLDivElement>(null);
  const tooltipButtonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery("(max-width: 48rem)");

  return (
    <Popover ref={tooltipWrapperRef}>
      <>
        <PopoverButton
          ref={tooltipButtonRef}
          className={s.tooltipTrigger}
          // Had to disable click because it conflicks with hover
          onClick={(e) => e.preventDefault()}
          onMouseEnter={() => {
            tooltipWrapperRef.current?.setAttribute("data-open", "true");
            tooltipButtonRef.current?.setAttribute("data-open", "true");
            tooltipButtonRef.current?.setAttribute("aria-expanded", "true");
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            tooltipWrapperRef.current?.removeAttribute("data-open");
            tooltipButtonRef.current?.removeAttribute("data-open");
            tooltipButtonRef.current?.setAttribute("aria-expanded", "false");
            setIsOpen(false);
          }}
        >
          {trigger}
        </PopoverButton>
        <AnimatePresence>
          {isOpen && (
            <PopoverPanel
              static
              as={motion.div}
              className={s.tooltip}
              anchor={isMobile ? "bottom start" : "bottom end"}
              variants={isMobile ? mobileTooltipVariants : tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {content}
            </PopoverPanel>
          )}
        </AnimatePresence>
      </>
    </Popover>
  );
  // return (
  //   <Tooltip.Provider delayDuration={200}>
  //     <Tooltip.Root defaultOpen={false} open={open} onOpenChange={setOpen}>
  //       <Tooltip.Trigger className={s.tooltipTrigger}>
  //         {trigger}
  //       </Tooltip.Trigger>
  //       <Tooltip.Portal forceMount>
  //         <AnimatePresence initial={false}>
  //           {open && (
  //             <TooltipContent
  //               forceMount
  //               className={s.tooltip}
  //               side="bottom"
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               //variants={tooltipVariants}
  //               //initial="hidden"
  //               //animate="visible"
  //               //exit="exit"
  //             >
  //               {content}
  //             </TooltipContent>
  //           )}
  //         </AnimatePresence>
  //       </Tooltip.Portal>
  //     </Tooltip.Root>
  //   </Tooltip.Provider>
  // );
};
