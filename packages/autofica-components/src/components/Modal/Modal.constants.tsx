const modalElementId = "__AUTOFICA_MODAL_CONTAINER";
const getModalErrorMessage = (modalElementId: string) =>
  `Unable to find modal or root element with  provided id modal: ${modalElementId}`;
export { modalElementId, getModalErrorMessage };
