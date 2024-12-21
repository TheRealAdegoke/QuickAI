import TeamComponentFive from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentFive";
import TeamComponentFour from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentFour";
import TeamComponentOne from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentOne";
import TeamComponentSix from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentSix";
import TeamComponentThree from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentThree";
import TeamComponentTwo from "./ArrayComponentsForDesigns/TeamArrayComponentFolder/TeamComponentTwo";

export const teamComponent = ({
  text,
  isMobile,
  handleDivClick,
  handleTextClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
  handleImageClick,
  handleCardClick,
}) => {
  return [
    <TeamComponentOne
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
      handleCardClick={handleCardClick}
    />,
    <TeamComponentTwo
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
      handleCardClick={handleCardClick}
    />,
    <TeamComponentThree
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
      handleCardClick={handleCardClick}
    />,
    <TeamComponentFour
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
      handleCardClick={handleCardClick}
    />,
    <TeamComponentFive
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
      handleCardClick={handleCardClick}
    />,
    <TeamComponentSix
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
      handleCardClick={handleCardClick}
    />,
  ];
};
