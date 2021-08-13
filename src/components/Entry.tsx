import React from "react";

function Entry(props: {
  kanji: string;
  reading: (string | JSX.Element)[];
  meaning: (string | JSX.Element)[];
}) {
  return (
    <div className="term">
      <dt>
        <span className="kanji" role="img">
          {props.kanji}
        </span>
        <span> {props.reading}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
