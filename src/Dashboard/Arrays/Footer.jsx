import FooterComponentOne from "./ArrayComponentsForDesigns/FooterArrayComponentFolder/FooterComponentOne";

export const footerComponent = ({
  text,
  isMobile,
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
}) => {
  return [
    <FooterComponentOne
      text={text}
      isMobile={isMobile}
      handleDivClick={handleDivClick}
      handleTextClick={handleTextClick}
      getStyle={getStyle}
      getElementStyle={getElementStyle}
      index={index}
      isEdited={isEdited}
      uniqueId={uniqueId}
      elementContent={elementContent}
    />,
  ];
};
