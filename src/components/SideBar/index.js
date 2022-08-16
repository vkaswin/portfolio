import React from "react";
import { classNames } from "utils";

import styles from "./SideBar.module.scss";

export const SideBar = () => {
  const options = [
    {
      icon: "bxs-home",
      to: "/home",
      label: "HOME",
    },
    {
      icon: "bxs-user",
      to: "/about",
      label: "ABOUT",
    },
    {
      icon: "bxs-briefcase",
      to: "/works",
      label: "WORKS",
    },

    {
      icon: "bxs-envelope-open",
      to: "/contact",
      label: "CONTACT",
    },
  ];

  return (
    <ul className={styles.sidebar}>
      {options.map(({ label, to, icon }, index) => {
        return (
          <li
            key={index}
            data-title={label}
            className={classNames({ [styles.active]: index === 0 })}
          >
            <button>
              <i className={icon}></i>
            </button>
          </li>
        );
      })}
      <li>
        <i className={true ? "bxs-moon" : "bxs-sun"}></i>
      </li>
    </ul>
  );
};
