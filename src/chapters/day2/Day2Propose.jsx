import React, { useState } from "react";

import ProposalIntro from "./steps/ProposalIntro";
import RingBox from "./steps/RingBox";
import ProposalQuestion from "./steps/ProposalQuestion";
import VoiceMoment from "./steps/VoiceMoment";
import ZStarGame from "./steps/ZStarGame";
import EnvelopeLetter from "./steps/EnvelopeLetter";
import SheSaidYes from "./steps/SheSaidYes";


export default function Day2Propose() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => s + 1);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md w-full">
        {step === 0 && <ProposalIntro onNext={next} />}
        {step === 1 && <RingBox onNext={next} />}
        {step === 2 && <ProposalQuestion onYes={next} />}
        {step === 3 && <VoiceMoment onNext={next} />}
        {step === 4 && <ZStarGame onWin={next} />}
        {step === 5 && <EnvelopeLetter onNext={next} />}
        {step === 6 && <SheSaidYes />}

      </div>
    </div>
  );
}
