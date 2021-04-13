import React from "react";
import Header from "./Header";
import HeaderResponsive from "./HeaderResponsive";
import Icon from "../Icon";
import Spain from "../../assets/flags/Spain.png";

export default {
  title: "Header",
  component: Header,
};

const HeaderResponsiveStory = () => {
  return (
    <HeaderResponsive
      options={[
        { content: "Loan Manager" },
        { content: "Whitepaper" },
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
