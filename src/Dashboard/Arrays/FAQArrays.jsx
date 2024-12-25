import FAQComponentFive from "./ArrayComponentsForDesigns/FAQArrayComponentFolder/FAQComponentFive";
import FAQComponentFour from "./ArrayComponentsForDesigns/FAQArrayComponentFolder/FAQComponentFour";
import FAQComponentOne from "./ArrayComponentsForDesigns/FAQArrayComponentFolder/FAQComponentOne";
import FAQComponentThree from "./ArrayComponentsForDesigns/FAQArrayComponentFolder/FAQComponentThree";
import FAQComponentTwo from "./ArrayComponentsForDesigns/FAQArrayComponentFolder/FAQComponentTwo";

export const faqComponent = ({
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
}) => {
  return [
    // <FAQComponentOne
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
    //   handleCardClick={handleCardClick}
    // />,
    // <FAQComponentTwo
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
    //   handleCardClick={handleCardClick}
    // />,
    // <FAQComponentThree
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
    //   handleCardClick={handleCardClick}
    // />,
    // <FAQComponentFour
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
    //   handleCardClick={handleCardClick}
    // />,
    <FAQComponentFive
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
      handleCardClick={handleCardClick}
      handleDivButtonClick={handleDivButtonClick}
    />,
  ];
};
