import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Kết hợp câu với liên từ (aber, und, denn, oder)
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich esse gern Äpfel. Ich mag keine Orangen. (aber)", correct: "Ich esse gern Äpfel, aber ich mag keine Orangen." },
      { hint: "Wir fahren nach Berlin. Wir besuchen unsere Freunde. (und)", correct: "Wir fahren nach Berlin und wir besuchen unsere Freunde." },
      { hint: "Sie lernt viel. Sie hat morgen eine Prüfung. (denn)", correct: "Sie lernt viel, denn sie hat morgen eine Prüfung." },
      { hint: "Er möchte spielen. Er muss zuerst Hausaufgaben machen. (aber)", correct: "Er möchte spielen, aber er muss zuerst Hausaufgaben machen." },
      { hint: "Möchtest du ins Kino gehen? Möchtest du zu Hause bleiben? (oder)", correct: "Möchtest du ins Kino gehen oder möchtest du zu Hause bleiben?" },
    ],
  },
  // Exercise 2: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich möchte in Deutschland arbeiten."], gaps: ["denn"] },
      { text: ["Du gehst ins Kino, ", " ich bleibe zu Hause."], gaps: ["aber"] },
      { text: ["Wir machen Urlaub, ", " wir haben wenig Zeit."], gaps: ["aber"] },
      { text: ["Möchtest du Kaffee ", " Tee?"], gaps: ["oder"] },
      { text: ["Er kauft ein Auto, ", " er hat kein Geld."], gaps: ["aber"] },
    ],
  },
  // Exercise 3: Kết hợp câu với liên từ nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich esse gern Äpfel. Ich mag keine Orangen. (aber)", correct: "Ich esse gern Äpfel, aber ich mag keine Orangen." },
      { hint: "Wir fahren nach Berlin. Wir besuchen unsere Freunde. (und)", correct: "Wir fahren nach Berlin und wir besuchen unsere Freunde." },
      { hint: "Sie lernt viel. Sie hat morgen eine Prüfung. (denn)", correct: "Sie lernt viel, denn sie hat morgen eine Prüfung." },
      { hint: "Er möchte spielen. Er muss zuerst Hausaufgaben machen. (aber)", correct: "Er möchte spielen, aber er muss zuerst Hausaufgaben machen." },
      { hint: "Möchtest du ins Kino gehen? Möchtest du zu Hause bleiben? (oder)", correct: "Möchtest du ins Kino gehen oder möchtest du zu Hause bleiben?" },
    ],
  },
  // Exercise 4: Hoàn thành câu với liên từ nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich möchte in Deutschland arbeiten."], gaps: ["denn"] },
      { text: ["Du gehst ins Kino, ", " ich bleibe zu Hause."], gaps: ["aber"] },
      { text: ["Wir machen Urlaub, ", " wir haben wenig Zeit."], gaps: ["aber"] },
      { text: ["Möchtest du Kaffee ", " Tee?"], gaps: ["oder"] },
      { text: ["Er kauft ein Auto, ", " er hat kein Geld."], gaps: ["aber"] },
    ],
  },
  // Exercise 5: Tổng hợp câu ghép
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin müde. Ich gehe früh schlafen. (deshalb)", correct: "Ich bin müde, deshalb gehe ich früh schlafen." },
      { hint: "Er ist krank. Er kann nicht zur Schule gehen. (weil)", correct: "Er ist krank, weil er nicht zur Schule gehen kann." },
      { hint: "Wir mögen Musik. Wir hören oft Radio. (und)", correct: "Wir mögen Musik und wir hören oft Radio." },
      { hint: "Du hast Hunger. Du isst eine Pizza. (also)", correct: "Du hast Hunger, also isst du eine Pizza." },
      { hint: "Ich habe kein Geld. Ich kann das Buch nicht kaufen. (denn)", correct: "Ich habe kein Geld, denn ich kann das Buch nicht kaufen." },
    ],
  },
  // Exercise 6: Điền liên từ trong câu ghép
  {
    type: "cloze",
    sentences: [
      { text: ["Ich bin müde, ", " gehe ich früh schlafen."], gaps: ["deshalb"] },
      { text: ["Er ist krank, ", " er kann nicht zur Schule gehen."], gaps: ["weil"] },
      { text: ["Wir mögen Musik, ", " hören wir oft Radio."], gaps: ["und"] },
      { text: ["Du hast Hunger, ", " isst du eine Pizza."], gaps: ["also"] },
      { text: ["Ich habe kein Geld, ", " ich kann das Buch nicht kaufen."], gaps: ["denn"] },
    ],
    },
  // Exercise 7: Kết hợp câu nâng cao với liên từ
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich gehe schwimmen. Es ist warm. (weil)", correct: "Ich gehe schwimmen, weil es warm ist." },
      { hint: "Er bleibt zu Hause. Er ist krank. (denn)", correct: "Er bleibt zu Hause, denn er ist krank." },
      { hint: "Wir fahren nach München. Wir besuchen unsere Familie. (um...zu)", correct: "Wir fahren nach München, um unsere Familie zu besuchen." },
      { hint: "Sie mag Schokolade. Sie isst jeden Tag welche. (deshalb)", correct: "Sie mag Schokolade, deshalb isst sie jeden Tag welche." },
      { hint: "Möchtest du wandern gehen? Möchtest du lieber am Strand liegen? (oder)", correct: "Möchtest du wandern gehen oder möchtest du lieber am Strand liegen?" },
    ],
  },
  // Exercise 8: Điền liên từ phù hợp trong câu ghép
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse Obst, ", " es ist gesund."], gaps: ["weil"] },
      { text: ["Du musst lernen, ", " du morgen eine Prüfung hast."], gaps: ["weil"] },
      { text: ["Ich gehe früh ins Bett, ", " ich morgen früh aufstehen muss."], gaps: ["weil"] },
      { text: ["Er kauft ein neues Fahrrad, ", " sein altes kaputt ist."], gaps: ["weil"] },
      { text: ["Sie nimmt einen Regenschirm mit, ", " es regnen könnte."], gaps: ["weil"] },
    ],
  },
  // Exercise 9: Tổng hợp liên từ với các câu phức tạp
  {
    type: "rewrite",
    sentences: [
      { hint: "Wir reisen nach Spanien. Wir wollen Sonne genießen. (um...zu)", correct: "Wir reisen nach Spanien, um die Sonne zu genießen." },
      { hint: "Er macht Sport. Er möchte fit bleiben. (damit)", correct: "Er macht Sport, damit er fit bleibt." },
      { hint: "Ich kaufe Gemüse. Ich möchte gesund essen. (denn)", correct: "Ich kaufe Gemüse, denn ich möchte gesund essen." },
      { hint: "Sie lernt viel. Sie möchte gute Noten bekommen. (um...zu)", correct: "Sie lernt viel, um gute Noten zu bekommen." },
      { hint: "Ihr solltet langsam fahren. Es gibt viel Verkehr. (weil)", correct: "Ihr solltet langsam fahren, weil es viel Verkehr gibt." },
    ],
  },
  // Exercise 10: Hoàn thành câu phức với liên từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ins Kino, ", " ich einen neuen Film sehen möchte."], gaps: ["weil"] },
      { text: ["Er nimmt eine Jacke mit, ", " es kalt ist."], gaps: ["weil"] },
      { text: ["Sie kocht heute Abend, ", " ihre Freunde zu Besuch kommen."], gaps: ["weil"] },
      { text: ["Ich spare Geld, ", " ich mir ein Auto kaufen kann."], gaps: ["damit"] },
      { text: ["Wir üben jeden Tag Deutsch, ", " wir fließend sprechen können."], gaps: ["damit"] },
    ],
  },
  // Exercise 11: Luyện tập nâng cao với câu ghép
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich arbeite viel. Ich möchte eine Beförderung. (damit)", correct: "Ich arbeite viel, damit ich eine Beförderung bekomme." },
      { hint: "Sie bleibt zu Hause. Sie fühlt sich nicht gut. (weil)", correct: "Sie bleibt zu Hause, weil sie sich nicht gut fühlt." },
      { hint: "Wir gehen früh schlafen. Wir sind morgen fit. (damit)", correct: "Wir gehen früh schlafen, damit wir morgen fit sind." },
      { hint: "Er macht eine Pause. Er ist müde. (weil)", correct: "Er macht eine Pause, weil er müde ist." },
      { hint: "Ich kaufe eine Fahrkarte. Ich kann mit dem Zug fahren. (damit)", correct: "Ich kaufe eine Fahrkarte, damit ich mit dem Zug fahren kann." },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Hauptsätze verbinden</h1>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>Bài {index + 1}</h2>
          {exercise.type === "cloze" && <ClozeTest sentences={exercise.sentences} />}
          {exercise.type === "rewrite" && <RewriteTest sentences={exercise.sentences} />}
        </div>
      ))}
    </div>
  );
};