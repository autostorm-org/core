// import React from "react";
// import useStyles from "./styles";
// import { styled } from "@compiled/react";

// type ButtonProps = {
//   onClick?: () => void;
//   onHover?: () => void;
//   overrides?: { [key: string]: any };
//   disabled?: boolean;
// };

// const CompiledButton = styled.button`
//   background-color: #012169;
//   color: #ffffff;
//   padding: 14px 16px 14px 16px;
//   border: none;
//   border-radius: 4px;
//   text-align: left;
//   font: normal normal bold 14px/22px "Open Sans";
//   font-weight: 700;
//   letter-spacing: 0px;
//   opacity: 1;
//   transition: 0.4s;
//   line-height: 19px;
//   cursor: pointer;
//   user-select: none;

//   &:hover {
//     background-color: #001034;
//   }
//   &:active {
//     background-color: #001034;
//   }

//   &:focus,
//   &:focus-within {
//     box-shadow: 0 0 0 0.2rem #b3b3b3;
//     outline: none;
//   }
// `;

// function Button(props: React.PropsWithChildren<ButtonProps>) {
//   const styles = useStyles();
//   return (
//     <CompiledButton
//       className={styles.root}
//       onClick={props.onClick}
//       style={props.overrides}
//       disabled={Boolean(props.disabled)}
//     >
//       {props.children}sss
//     </CompiledButton>
//   );
// }
// export default Button;
// export type { ButtonProps };
