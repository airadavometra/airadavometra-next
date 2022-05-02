import { FC } from "react";
import { WithClassName } from "./common";

export type ContactInfo = {
  contactLogo: FC<WithClassName>;
  contactText: string;
  contactLink?: string;
  contactValue?: string;
};
