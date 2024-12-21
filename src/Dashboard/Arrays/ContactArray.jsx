import ContactComponentFive from "./ArrayComponentsForDesigns/ContactArrayComponentFolder/ContactComponentFive";
import ContactComponentFour from "./ArrayComponentsForDesigns/ContactArrayComponentFolder/ContactComponentFour";
import ContactComponentOne from "./ArrayComponentsForDesigns/ContactArrayComponentFolder/ContactComponentOne";
import ContactComponentThree from "./ArrayComponentsForDesigns/ContactArrayComponentFolder/ContactComponentThree";
import ContactComponentTwo from "./ArrayComponentsForDesigns/ContactArrayComponentFolder/ContactComponentTwo";

export const contactComponent = ({ text }) => {
  return [
    <ContactComponentOne text={text} />,
    <ContactComponentTwo text={text} />,
    <ContactComponentThree />,
    <ContactComponentFour text={text} />,
    <ContactComponentFive text={text} />,
  ];
};
