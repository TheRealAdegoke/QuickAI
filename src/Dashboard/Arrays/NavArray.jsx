import NavComponentOne from "./ArrayComponentsForDesigns/NavArrayComponentFolder/NavComponentOne";
import NavComponentTwo from "./ArrayComponentsForDesigns/NavArrayComponentFolder/NavComponentTwo";

export const navComponents = ({
  text,
  isMobile,
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId = 0,
  elementContent,
  handleImageClick,
}) => {
  return [
    <NavComponentOne
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
      handleImageClick={handleImageClick}
    />,
    <NavComponentTwo
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
      handleImageClick={handleImageClick}
    />,
  ];
};
