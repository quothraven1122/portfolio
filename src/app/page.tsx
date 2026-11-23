"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Introduction from "@/components/sections/Introduction";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey=""
      scrollingSpeed={800}
      scrollOverflow={true}
      scrollBar={false}
      credits={{ enabled: false }}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Introduction />
          </div>

          <div className="section">
            <Education />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
