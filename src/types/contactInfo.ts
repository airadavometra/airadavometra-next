import { ReactNode } from "react";

export type ContactInfo = {
  contactLogo: ReactNode;
  contactText: string;
  contactLink?: string;
  contactValue?: string;
};
