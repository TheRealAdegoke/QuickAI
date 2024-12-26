import FooterComponentOne from "./ArrayComponentsForDesigns/FooterArrayComponentFolder/FooterComponentOne";
import FooterComponentTwo from "./ArrayComponentsForDesigns/FooterArrayComponentFolder/FooterComponentTwo";

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
    <FooterComponentTwo
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
