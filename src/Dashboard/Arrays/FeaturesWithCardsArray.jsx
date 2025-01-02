import FeatureWithCardComponentFive from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentFive";
import FeatureWithCardComponentFour from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentFour";
import FeatureWithCardComponentOne from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentOne";
import FeatureWithCardComponentSix from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentSix";
import FeatureWithCardComponentThree from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentThree";
import FeatureWithCardComponentTwo from "./ArrayComponentsForDesigns/FeaturesWithCardsArrayComponentFolder/FeatureWithCardComponentTwo";

export const featuresWithCardsComponent = ({
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
  handleDivButtonClick,
}) => {
  return [
    <FeatureWithCardComponentOne
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureWithCardComponentTwo
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureWithCardComponentThree
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureWithCardComponentFour
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    <FeatureWithCardComponentFive
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
      handleDivButtonClick={handleDivButtonClick}
      handleCardClick={handleCardClick}
    />,
    // <FeatureWithCardComponentSix
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
    //   handleImageClick={handleImageClick}
    //   handleDivButtonClick={handleDivButtonClick}
    //   handleCardClick={handleCardClick}
    // />,
  ];
};
