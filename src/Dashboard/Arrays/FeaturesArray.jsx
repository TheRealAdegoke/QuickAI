import FeatureComponentFive from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentFive";
import FeatureComponentFour from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentFour";
import FeatureComponentOne from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentOne";
import FeatureComponentSeven from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentSeven";
import FeatureComponentSix from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentSix";
import FeatureComponentThree from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentThree";
import FeatureComponentTwo from "./ArrayComponentsForDesigns/FeaturesArrayComponentFolder/FeatureComponentTwo";

export const featuresComponents = ({
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
  handleCardClick,
  handleDivButtonClick,
  handleImageClick,
}) => {
  return [
    <FeatureComponentOne
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureComponentTwo
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureComponentThree
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureComponentFour
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureComponentFive
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureComponentSix
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    // <FeatureComponentSeven
    //   text={text}
    //   isMobile={isMobile}
    //   handleDivClick={handleDivClick}
    //   handleTextClick={handleTextClick}
    //   getStyle={getStyle}
    //   getElementStyle={getElementStyle}
    //   index={index}
    //   isEdited={isEdited}
    //   uniqueId={uniqueId}
    //   elementContent={elementContent}
    //   handleDivButtonClick={handleDivButtonClick}
    //   handleCardClick={handleCardClick}
    //   handleImageClick={handleImageClick}
    // />,
  ];
};
