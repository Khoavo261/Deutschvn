import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Chuyển câu sang phủ định với 'nicht'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich bin nicht glücklich." },
      { hint: "Du gehst zur Schule.", correct: "Du gehst nicht zur Schule." },
      { hint: "Er spielt Fußball.", correct: "Er spielt nicht Fußball." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken nicht Wasser." },
      { hint: "Ihr arbeitet viel.", correct: "Ihr arbeitet nicht viel." },
    ],
  },
  // Exercise 2: Hoàn thành câu với phủ định 'kein/e/en'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
      { text: ["Sie isst ", " Brot."], gaps: ["kein"] },
      { text: ["Er kauft ", " Lampe."], gaps: ["keine"] },
      { text: ["Wir sehen ", " Film."], gaps: ["keinen"] },
      { text: ["Du trägst ", " Mantel."], gaps: ["keinen"] },
    ],
  },
  // Exercise 3: Chuyển câu sang phủ định với 'nicht'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich bin nicht glücklich." },
      { hint: "Du gehst zur Schule.", correct: "Du gehst nicht zur Schule." },
      { hint: "Er spielt Fußball.", correct: "Er spielt nicht Fußball." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken nicht Wasser." },
      { hint: "Ihr arbeitet viel.", correct: "Ihr arbeitet nicht viel." },
    ],
  },
  // Exercise 4: Hoàn thành câu với phủ định 'kein/e/en'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
      { text: ["Sie isst ", " Brot."], gaps: ["kein"] },
      { text: ["Er kauft ", " Lampe."], gaps: ["keine"] },
      { text: ["Wir sehen ", " Film."], gaps: ["keinen"] },
      { text: ["Du trägst ", " Mantel."], gaps: ["keinen"] },
    ],
  },
  // Exercise 5: Phủ định nâng cao với 'nicht'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich bin nicht glücklich." },
      { hint: "Du gehst zur Schule.", correct: "Du gehst nicht zur Schule." },
      { hint: "Er spielt Fußball.", correct: "Er spielt nicht Fußball." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken nicht Wasser." },
      { hint: "Ihr arbeitet viel.", correct: "Ihr arbeitet nicht viel." },
    ],
  },
  // Exercise 6: Phủ định nâng cao với 'kein/e/en'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
      { text: ["Sie isst ", " Brot."], gaps: ["kein"] },
      { text: ["Er kauft ", " Lampe."], gaps: ["keine"] },
      { text: ["Wir sehen ", " Film."], gaps: ["keinen"] },
      { text: ["Du trägst ", " Mantel."], gaps: ["keinen"] },
    ],
  },
  // Exercise 7: Tổng hợp phủ định với 'nicht'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich bin nicht glücklich." },
      { hint: "Du gehst zur Schule.", correct: "Du gehst nicht zur Schule." },
      { hint: "Er spielt Fußball.", correct: "Er spielt nicht Fußball." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken nicht Wasser." },
      { hint: "Ihr arbeitet viel.", correct: "Ihr arbeitet nicht viel." },
    ],
  },
  // Exercise 8: Tổng hợp phủ định với 'kein/e/en'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
      { text: ["Sie isst ", " Brot."], gaps: ["kein"] },
      { text: ["Er kauft ", " Lampe."], gaps: ["keine"] },
      { text: ["Wir sehen ", " Film."], gaps: ["keinen"] },
      { text: ["Du trägst ", " Mantel."], gaps: ["keinen"] },
    ],
  },
  // Exercise 9: Luyện tập phủ định với 'nicht'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich bin nicht glücklich." },
      { hint: "Du gehst zur Schule.", correct: "Du gehst nicht zur Schule." },
      { hint: "Er spielt Fußball.", correct: "Er spielt nicht Fußball." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken nicht Wasser." },
      { hint: "Ihr arbeitet viel.", correct: "Ihr arbeitet nicht viel." },
    ],
  },
  // Exercise 10: Luyện tập phủ định với 'kein/e/en'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
      { text: ["Sie isst ", " Brot."], gaps: ["kein"] },
      { text: ["Er kauft ", " Lampe."], gaps: ["keine"] },
      { text: ["Wir sehen ", " Film."], gaps: ["keinen"] },
      { text: ["Du trägst ", " Mantel."], gaps: ["keinen"] },
    ],
  },
    // Exercise 11: Phủ định với 'nicht' (Mở rộng)
    {
      type: "rewrite",
      sentences: [
        { hint: "Er hat Hunger.", correct: "Er hat nicht Hunger." },
        { hint: "Wir fahren nach Berlin.", correct: "Wir fahren nicht nach Berlin." },
        { hint: "Ihr spielt Karten.", correct: "Ihr spielt nicht Karten." },
        { hint: "Sie trinkt Kaffee.", correct: "Sie trinkt nicht Kaffee." },
        { hint: "Ich lese das Buch.", correct: "Ich lese nicht das Buch." },
      ],
    },
    // Exercise 12: Hoàn thành câu với 'kein/e/en' (Mở rộng)
    {
      type: "cloze",
      sentences: [
        { text: ["Ich habe ", " Haus."], gaps: ["kein"] },
        { text: ["Er trägt ", " Hut."], gaps: ["keinen"] },
        { text: ["Wir kaufen ", " Äpfel."], gaps: ["keine"] },
        { text: ["Du bringst ", " Geschenk."], gaps: ["kein"] },
        { text: ["Sie sehen ", " Film."], gaps: ["keinen"] },
      ],
    },
    // Exercise 13: Chuyển đổi câu phủ định với 'nicht'
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich spiele Gitarre.", correct: "Ich spiele nicht Gitarre." },
        { hint: "Du gehst spazieren.", correct: "Du gehst nicht spazieren." },
        { hint: "Er arbeitet heute.", correct: "Er arbeitet nicht heute." },
        { hint: "Wir essen Fleisch.", correct: "Wir essen nicht Fleisch." },
        { hint: "Ihr lest die Zeitung.", correct: "Ihr lest nicht die Zeitung." },
      ],
    },
    // Exercise 14: Hoàn thành câu với phủ định 'kein/e/en'
    {
      type: "cloze",
      sentences: [
        { text: ["Ich habe ", " Fahrrad."], gaps: ["kein"] },
        { text: ["Er sieht ", " Katze."], gaps: ["keine"] },
        { text: ["Sie kauft ", " Tisch."], gaps: ["keinen"] },
        { text: ["Wir trinken ", " Milch."], gaps: ["keine"] },
        { text: ["Du bringst ", " Tasche."], gaps: ["keine"] },
      ],
    },
    // Exercise 15: Luyện tập nâng cao phủ định với 'nicht'
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich singe ein Lied.", correct: "Ich singe nicht ein Lied." },
        { hint: "Du machst Hausaufgaben.", correct: "Du machst nicht Hausaufgaben." },
        { hint: "Er schaut Fernsehen.", correct: "Er schaut nicht Fernsehen." },
        { hint: "Wir spielen Tennis.", correct: "Wir spielen nicht Tennis." },
        { hint: "Ihr fahrt Fahrrad.", correct: "Ihr fahrt nicht Fahrrad." },
      ],
    },
    // Exercise 16: Hoàn thành câu phủ định với 'kein/e/en' (Lặp lại)
    {
      type: "cloze",
      sentences: [
        { text: ["Ich habe ", " Buch."], gaps: ["kein"] },
        { text: ["Du isst ", " Apfel."], gaps: ["keinen"] },
        { text: ["Wir kaufen ", " Schuhe."], gaps: ["keine"] },
        { text: ["Er bringt ", " Geschenk."], gaps: ["kein"] },
        { text: ["Sie sehen ", " Film."], gaps: ["keinen"] },
      ],
    },
    // Exercise 17: Phủ định tổng hợp với 'nicht'
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich höre Musik.", correct: "Ich höre nicht Musik." },
        { hint: "Du trinkst Tee.", correct: "Du trinkst nicht Tee." },
        { hint: "Er liest ein Buch.", correct: "Er liest nicht ein Buch." },
        { hint: "Wir tanzen heute.", correct: "Wir tanzen nicht heute." },
        { hint: "Ihr spielt Basketball.", correct: "Ihr spielt nicht Basketball." },
      ],
    },
    // Exercise 18: Tổng hợp phủ định với 'kein/e/en'
    {
      type: "cloze",
      sentences: [
        { text: ["Ich habe ", " Auto."], gaps: ["kein"] },
        { text: ["Er trägt ", " Hut."], gaps: ["keinen"] },
        { text: ["Sie kauft ", " Blume."], gaps: ["keine"] },
        { text: ["Wir essen ", " Brot."], gaps: ["kein"] },
        { text: ["Du siehst ", " Hund."], gaps: ["keinen"] },
      ],
    },
    // Exercise 19: Phủ định ngữ cảnh phức hợp với 'nicht'
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich gehe ins Kino.", correct: "Ich gehe nicht ins Kino." },
        { hint: "Du kommst morgen.", correct: "Du kommst nicht morgen." },
        { hint: "Er isst Kuchen.", correct: "Er isst nicht Kuchen." },
        { hint: "Wir fahren nach München.", correct: "Wir fahren nicht nach München." },
        { hint: "Ihr lest die Bücher.", correct: "Ihr lest nicht die Bücher." },
      ],
    },
    // Exercise 20: Viết lại câu phủ định tổng hợp
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich bin zufrieden.", correct: "Ich bin nicht zufrieden." },
        { hint: "Du hast Zeit.", correct: "Du hast nicht Zeit." },
        { hint: "Er sieht den Film.", correct: "Er sieht nicht den Film." },
        { hint: "Wir arbeiten am Wochenende.", correct: "Wir arbeiten nicht am Wochenende." },
        { hint: "Ihr kocht das Essen.", correct: "Ihr kocht nicht das Essen." },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - Negation</h1>
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
  
  export default App;