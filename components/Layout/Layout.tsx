import { FC, ReactNode } from "react";
import Header from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <PageHead />
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  </>
);

export default Layout;
