import PromptUpdater from "../Prompt-Updater/PromptUpdater";

export const ButtonOne = () => {
  const text = PromptUpdater();
    return (
      <>
        <div className="my-3 flex gap-3">
          <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[150px]">
            {text.buttonTexts[0]}
          </button>
          <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[150px]">
            {text.buttonTexts[1]}
          </button>
        </div>
      </>
    );
}

export const ButtonTwo = () => {
  const text = PromptUpdater();
  return (
    <>
      <div className="my-3 flex gap-3">
        <button className="py-3 px-4 bg-[rgb(63,87,255)] shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] rounded-xl font-semibold min-w-[200px]">
          {text.buttonTexts[0]}
        </button>
      </div>
    </>
  );
};

export const ButtonThree = () => {
  const text = PromptUpdater();
  return (
    <>
      <div className="my-3 flex gap-3">
        <button className="py-3 px-4 bg-white text-black shadow-lg border-[1px] rounded-xl font-semibold min-w-[200px]">
          {text.buttonTexts[0]}
        </button>
      </div>
    </>
  );
};

export const ButtonFour = () => {
  const text = PromptUpdater();
  return (
    <>
      <div className="my-3 flex gap-3 flex-wrap">
        <button className="py-3 px-4 bg-[rgb(172,180,75)] shadow-lg hover:bg-white hover:text-[rgb(172,180,75)] hover:border-[1px] hover:border-[rgb(172,180,75)] rounded-xl font-semibold min-w-[200px]">
          {text.buttonTexts[0]}
        </button>
        <button className="py-3 px-4 border-[1px] text-[rgb(172,180,75)] border-[rgb(172,180,75)] shadow-lg hover:text-white hover:bg-[rgb(172,180,75)] rounded-xl font-semibold min-w-[200px]">
          {text.buttonTexts[1]}
        </button>
      </div>
    </>
  );
};

export const ButtonFive = () => {
  const text = PromptUpdater();
    return (
      <>
        <div className="my-3 flex gap-3">
          <button className="py-3 px-4 bg-white border-[1px] text-black shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] font-semibold min-w-[250px]">
            {text.buttonTexts[0]}
          </button>
        </div>
      </>
    );
  }