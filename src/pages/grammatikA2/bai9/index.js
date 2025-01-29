import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Điền từ nối phù hợp (und, oder, aber, denn)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich mag Kaffee ", " Tee."], gaps: ["oder"] },
      { text: ["Er fährt mit dem Auto, ", " ich nehme den Bus."], gaps: ["aber"] },
      { text: ["Wir gehen ins Kino, ", " wir haben Lust auf einen Film."], gaps: ["denn"] },
      { text: ["Ich esse gern Schokolade, ", " sie ist süß."], gaps: ["aber"] },
      { text: ["Sie geht zur Arbeit, ", " sie ist krank."], gaps: ["obwohl"] },
    ]
  },
  // Bài tập 2: Điền từ nối phù hợp (weil, dass, obwohl, wenn)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich in Deutschland arbeiten möchte."], gaps: ["weil"] },
      { text: ["Er bleibt zu Hause, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Wir freuen uns, ", " du uns besuchst."], gaps: ["dass"] },
      { text: ["Sie geht joggen, ", " es regnet."], gaps: ["obwohl"] },
      { text: ["Wir treffen uns, ", " du Zeit hast."], gaps: ["wenn"] },
    ]
  },
  // Bài tập 3: Hoàn thành câu với từ nối kép
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse ", " Gemüse ", " Obst."], gaps: ["sowohl", "als auch"] },
      { text: ["Du kannst ", " mit dem Bus fahren ", " zu Fuß gehen."], gaps: ["entweder", "oder"] },
      { text: ["Sie ist ", " intelligent ", " fleißig."], gaps: ["nicht nur", "sondern auch"] },
      { text: ["Ich kaufe ", " das blaue Hemd ", " die rote Jacke."], gaps: ["entweder", "oder"] },
      { text: ["Er spricht ", " Deutsch, ", " Englisch."], gaps: ["sowohl", "als auch"] },
    ]
  },
  // Bài tập 4: Chọn từ nối phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse gern Pizza, ", " ich mag keine Pilze darauf."], gaps: ["aber"] },
      { text: ["Wir gehen ins Kino, ", " wir haben keine Tickets."], gaps: ["obwohl"] },
      { text: ["Ich denke, ", " du Recht hast."], gaps: ["dass"] },
      { text: ["Sie kommt nicht zur Party, ", " sie müde ist."], gaps: ["weil"] },
      { text: ["Wir fahren nach Berlin, ", " wir haben Urlaub."], gaps: ["denn"] },
    ]
  },
  // Bài tập 5: Điền từ nối phù hợp (und, oder, aber, denn)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich mag Kaffee ", " Tee."], gaps: ["oder"] },
      { text: ["Er fährt mit dem Auto, ", " ich nehme den Bus."], gaps: ["aber"] },
      { text: ["Wir gehen ins Kino, ", " wir haben Lust auf einen Film."], gaps: ["denn"] },
      { text: ["Ich esse gern Schokolade, ", " sie ist süß."], gaps: ["aber"] },
      { text: ["Sie geht zur Arbeit, ", " sie ist krank."], gaps: ["obwohl"] },
    ]
  },
  // Bài tập 6: Điền từ nối phù hợp (weil, dass, obwohl, wenn)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich in Deutschland arbeiten möchte."], gaps: ["weil"] },
      { text: ["Er bleibt zu Hause, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Wir freuen uns, ", " du uns besuchst."], gaps: ["dass"] },
      { text: ["Sie geht joggen, ", " es regnet."], gaps: ["obwohl"] },
      { text: ["Wir treffen uns, ", " du Zeit hast."], gaps: ["wenn"] },
    ]
  },
  // Bài tập 7: Hoàn thành câu với từ nối kép
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse ", " Gemüse ", " Obst."], gaps: ["sowohl", "als auch"] },
      { text: ["Du kannst ", " mit dem Bus fahren ", " zu Fuß gehen."], gaps: ["entweder", "oder"] },
      { text: ["Sie ist ", " intelligent ", " fleißig."], gaps: ["nicht nur", "sondern auch"] },
      { text: ["Ich kaufe ", " das blaue Hemd ", " die rote Jacke."], gaps: ["entweder", "oder"] },
      { text: ["Er spricht ", " Deutsch, ", " Englisch."], gaps: ["sowohl", "als auch"] },
    ]
  },
  // Bài tập 8: Chọn từ nối phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse gern Pizza, ", " ich mag keine Pilze darauf."], gaps: ["aber"] },
      { text: ["Wir gehen ins Kino, ", " wir haben keine Tickets."], gaps: ["obwohl"] },
      { text: ["Ich denke, ", " du Recht hast."], gaps: ["dass"] },
      { text: ["Sie kommt nicht zur Party, ", " sie müde ist."], gaps: ["weil"] },
      { text: ["Wir fahren nach Berlin, ", " wir haben Urlaub."], gaps: ["denn"] },
    ]
  },
  // Bài tập 9: Hoàn thành câu với 'weil' oder 'obwohl'
  {
    type: "cloze",
    sentences: [
      { text: ["Er bleibt zu Hause, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Sie geht spazieren, ", " es regnet."], gaps: ["obwohl"] },
      { text: ["Ich esse gesund, ", " ich fit bleiben will."], gaps: ["weil"] },
      { text: ["Wir fahren ans Meer, ", " das Wetter schlecht ist."], gaps: ["obwohl"] },
      { text: ["Er trainiert viel, ", " er stark sein möchte."], gaps: ["weil"] },
    ]
  },
  // Bài tập 10: Hoàn thành câu với 'wenn' oder 'dass'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich freue mich, ", " du mich besuchst."], gaps: ["dass"] },
      { text: ["Wir gehen ins Kino, ", " du Zeit hast."], gaps: ["wenn"] },
      { text: ["Er glaubt, ", " er die Prüfung besteht."], gaps: ["dass"] },
      { text: ["Du kannst kommen, ", " du willst."], gaps: ["wenn"] },
      { text: ["Sie ist glücklich, ", " sie die Arbeit bekommen hat."], gaps: ["dass"] },
    ]
  },
  // Bài tập 11: Hoàn thành câu với 'sowohl ... als auch', 'entweder ... oder', 'nicht nur ... sondern auch'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse ", " Gemüse ", " Obst."], gaps: ["sowohl", "als auch"] },
      { text: ["Du kannst ", " mit dem Bus fahren ", " zu Fuß gehen."], gaps: ["entweder", "oder"] },
      { text: ["Sie ist ", " intelligent ", " fleißig."], gaps: ["nicht nur", "sondern auch"] },
      { text: ["Ich kaufe ", " das blaue Hemd ", " die rote Jacke."], gaps: ["entweder", "oder"] },
      { text: ["Er spricht ", " Deutsch, ", " Englisch."], gaps: ["sowohl", "als auch"] },
    ]
  },
  // Bài tập 12: Chọn từ nối phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse gern Pizza, ", " ich mag keine Pilze darauf."], gaps: ["aber"] },
      { text: ["Wir gehen ins Kino, ", " wir haben keine Tickets."], gaps: ["obwohl"] },
      { text: ["Ich denke, ", " du Recht hast."], gaps: ["dass"] },
      { text: ["Sie kommt nicht zur Party, ", " sie müde ist."], gaps: ["weil"] },
      { text: ["Wir fahren nach Berlin, ", " wir haben Urlaub."], gaps: ["denn"] },
    ]
  },
  // Bài tập 13: Hoàn thành câu với 'weil' oder 'obwohl'
  {
    type: "cloze",
    sentences: [
      { text: ["Er bleibt zu Hause, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Sie geht spazieren, ", " es regnet."], gaps: ["obwohl"] },
      { text: ["Ich esse gesund, ", " ich fit bleiben will."], gaps: ["weil"] },
      { text: ["Wir fahren ans Meer, ", " das Wetter schlecht ist."], gaps: ["obwohl"] },
      { text: ["Er trainiert viel, ", " er stark sein möchte."], gaps: ["weil"] },
    ]
  },
  // Bài tập 14: Hoàn thành câu với 'wenn' oder 'dass'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich freue mich, ", " du mich besuchst."], gaps: ["dass"] },
      { text: ["Wir gehen ins Kino, ", " du Zeit hast."], gaps: ["wenn"] },
      { text: ["Er glaubt, ", " er die Prüfung besteht."], gaps: ["dass"] },
      { text: ["Du kannst kommen, ", " du willst."], gaps: ["wenn"] },
      { text: ["Sie ist glücklich, ", " sie die Arbeit bekommen hat."], gaps: ["dass"] },
    ]
  },
  // Bài tập 15: Hoàn thành câu với 'damit' oder 'um ... zu'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich in Deutschland arbeiten kann."], gaps: ["damit"] },
      { text: ["Er trainiert viel, ", " seine Leistung zu verbessern."], gaps: ["um"] },
      { text: ["Wir fahren früh los, ", " wir nicht zu spät kommen."], gaps: ["damit"] },
      { text: ["Sie spart Geld, ", " ein neues Auto zu kaufen."], gaps: ["um"] },
      { text: ["Ich wiederhole die Lektion, ", " ich alles verstehe."], gaps: ["damit"] },
    ]
  }
];
const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Konjunktionen (A2)</h1>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>Bài {index + 1}</h2>
          {exercise.type === "cloze" && <ClozeTest sentences={exercise.sentences} />}
        </div>
      ))}
    </div>
  );
};

export default App;
