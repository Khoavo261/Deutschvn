import React from "react";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Bài tập 1: Chuyển câu thành lời khuyên với 'sollen'
  {
    type: "rewrite",
    sentences: [
      { hint: "Du bist krank.", correct: "Du sollst zum Arzt gehen." },
      { hint: "Es regnet.", correct: "Du sollst einen Regenschirm mitnehmen." },
      { hint: "Du hast Hunger.", correct: "Du sollst etwas essen." },
      { hint: "Ich bin müde.", correct: "Ich soll früher ins Bett gehen." },
      { hint: "Er hat eine Prüfung.", correct: "Er soll mehr lernen." }
    ]
  },
  // Bài tập 2: Chuyển câu thành lời khuyên với 'sollen'
  {
    type: "rewrite",
    sentences: [
      { hint: "Du machst keinen Sport.", correct: "Du sollst mehr Sport machen." },
      { hint: "Ihr esst zu viel Fast Food.", correct: "Ihr sollt weniger Fast Food essen." },
      { hint: "Sie raucht zu viel.", correct: "Sie soll weniger rauchen." },
      { hint: "Wir arbeiten zu wenig.", correct: "Wir sollen mehr arbeiten." },
      { hint: "Er schläft zu spät.", correct: "Er soll früher schlafen." }
    ]
  },
  // Bài tập 3: Chuyển câu thành lời khuyên với 'sollen'
  {
    type: "rewrite",
    sentences: [
      { hint: "Du trinkst zu wenig Wasser.", correct: "Du sollst mehr Wasser trinken." },
      { hint: "Ihr seht zu viel fern.", correct: "Ihr sollt nicht so viel fernsehen." },
      { hint: "Wir machen keinen Sport.", correct: "Wir sollen jeden Tag Sport machen." },
      { hint: "Er hilft seiner Mutter nicht.", correct: "Er soll seiner Mutter helfen." },
      { hint: "Sie kommt oft zu spät.", correct: "Sie soll pünktlich sein." }
    ]
  },
  // Bài tập 4: Chuyển câu thành lời khuyên với 'sollen'
  {
    type: "rewrite",
    sentences: [
      { hint: "Du hast Kopfschmerzen.", correct: "Du sollst eine Tablette nehmen." },
      { hint: "Es ist kalt draußen.", correct: "Du sollst eine Jacke anziehen." },
      { hint: "Ihr habt morgen eine Prüfung.", correct: "Ihr sollt gut lernen." },
      { hint: "Er ist müde.", correct: "Er soll sich ausruhen." },
      { hint: "Sie hat Halsschmerzen.", correct: "Sie soll warmen Tee trinken." }
    ]
  },
  // Bài tập 5: Chuyển câu thành lời khuyên với 'sollen'
  {
    type: "rewrite",
    sentences: [
      { hint: "Du hast keine Energie.", correct: "Du sollst mehr schlafen." },
      { hint: "Ihr habt keine Zeit für Sport.", correct: "Ihr sollt eure Zeit besser planen." },
      { hint: "Er hat schlechte Noten.", correct: "Er soll mehr lernen." },
      { hint: "Wir sind oft gestresst.", correct: "Wir sollen öfter entspannen." },
      { hint: "Sie fühlt sich nicht gut.", correct: "Sie soll einen Arzt besuchen." }
    ]
  }
];
const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Konditional 'Sollen' (A2)</h1>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>Bài {index + 1}</h2>
          {exercise.type === "rewrite" && <RewriteTest sentences={exercise.sentences} />}
        </div>
      ))}
    </div>
  );
};

export default App;
