import React, { FunctionComponent, useState } from "react";
import s from "./Spinner.module.css";

export const Spinner: FunctionComponent = () => {
  return (
    <div className={s.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
