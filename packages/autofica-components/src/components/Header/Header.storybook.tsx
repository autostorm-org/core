import React from "react";
import HeaderResponsive from "./HeaderResponsive";
import { Icon } from "../Icon";
import Spain from "../../assets/flags/Spain.png";

export default {
  title: "Header",
  component: HeaderResponsive,
};

const HeaderResponsiveStory = () => {
  return (
    <HeaderResponsive
      options={[
        { content: "Loan Manager", href: "#" },
        { content: "Whitepaper", href: "#" },
        {
          content: (
            <>
              es-ES <Icon src={Spain} width={23} height={13} alt={"espanol"} />
            </>
          ),
        },
      ]}
    />
  );
};

export const HeaderFull = HeaderResponsiveStory.bind({});
