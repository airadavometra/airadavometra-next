import s from "@/pagesStyles/404.module.css";
import { NotFound } from "@/icons/NotFound";
import classNames from "classnames";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => (
  <div className={s.main}>
    <NotFound className={classNames(s.mainItem, s.notFoundImage)} />
    <div className={classNames(s.mainItem, s.notFoundTitle)}>
      Sorry, page you are looking for does not exist...
    </div>
    <div className={classNames(s.mainItem, s.notFoundText)}>
      Please try any link of the menu
    </div>
  </div>
);

export default ErrorPage;
