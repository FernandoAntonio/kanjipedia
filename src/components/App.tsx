import React from "react";
import kanjipedia from "../kanjipedia";
import Entry from "./Entry";

function App() {
  function buildAllEntriesFromKanjipedia(): Object[] {
    return kanjipedia.map((kanji) => (
      <Entry
        key={kanji.id}
        kanji={kanji.kanji}
        reading={kanji.reading}
        meaning={kanji.meaning}
      />
    ));
  }
  return (
    <div>
      <h1>
        <span>kanjipedia</span>
      </h1>
      <dl className="dictionary">{buildAllEntriesFromKanjipedia()}</dl>
    </div>
  );
}

export default App;
