import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Chuyển đổi câu với Modalverben
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lerne Deutsch. (wollen)", correct: "Ich will Deutsch lernen." },
      { hint: "Er geht zur Schule. (müssen)", correct: "Er muss zur Schule gehen." },
      { hint: "Wir spielen Tennis. (können)", correct: "Wir können Tennis spielen." },
      { hint: "Du machst die Hausaufgaben. (sollen)", correct: "Du sollst die Hausaufgaben machen." },
      { hint: "Sie fährt nach Berlin. (dürfen)", correct: "Sie darf nach Berlin fahren." },
    ],
  },
  // Exercise 2: Điền động từ khuyết thiếu
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " gut schwimmen."], gaps: ["kann"] },
      { text: ["Du ", " ins Kino gehen."], gaps: ["darfst"] },
      { text: ["Er ", " seine Hausaufgaben machen."], gaps: ["muss"] },
      { text: ["Wir ", " Fußball spielen."], gaps: ["wollen"] },
      { text: ["Ihr ", " mehr lernen."], gaps: ["sollt"] },
    ],
  },
  // Exercise 3: Chuyển đổi câu (Lặp lại)
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lerne Deutsch. (wollen)", correct: "Ich will Deutsch lernen." },
      { hint: "Er geht zur Schule. (müssen)", correct: "Er muss zur Schule gehen." },
      { hint: "Wir spielen Tennis. (können)", correct: "Wir können Tennis spielen." },
      { hint: "Du machst die Hausaufgaben. (sollen)", correct: "Du sollst die Hausaufgaben machen." },
      { hint: "Sie fährt nach Berlin. (dürfen)", correct: "Sie darf nach Berlin fahren." },
    ],
  },
  // Exercise 4: Điền động từ khuyết thiếu (Lặp lại)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " gut schwimmen."], gaps: ["kann"] },
      { text: ["Du ", " ins Kino gehen."], gaps: ["darfst"] },
      { text: ["Er ", " seine Hausaufgaben machen."], gaps: ["muss"] },
      { text: ["Wir ", " Fußball spielen."], gaps: ["wollen"] },
      { text: ["Ihr ", " mehr lernen."], gaps: ["sollt"] },
    ],
  },
  // Exercise 5: Chuyển đổi câu (Nâng cao)
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lerne Deutsch. (wollen)", correct: "Ich will Deutsch lernen." },
      { hint: "Er geht zur Schule. (müssen)", correct: "Er muss zur Schule gehen." },
      { hint: "Wir spielen Tennis. (können)", correct: "Wir können Tennis spielen." },
      { hint: "Du machst die Hausaufgaben. (sollen)", correct: "Du sollst die Hausaufgaben machen." },
      { hint: "Sie fährt nach Berlin. (dürfen)", correct: "Sie darf nach Berlin fahren." },
    ],
  },
  // Exercise 6: Điền động từ khuyết thiếu (Nâng cao)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " gut schwimmen."], gaps: ["kann"] },
      { text: ["Du ", " ins Kino gehen."], gaps: ["darfst"] },
      { text: ["Er ", " seine Hausaufgaben machen."], gaps: ["muss"] },
      { text: ["Wir ", " Fußball spielen."], gaps: ["wollen"] },
      { text: ["Ihr ", " mehr lernen."], gaps: ["sollt"] },
    ],
  },
  // Exercise 7: Chuyển đổi câu phức hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich mache Hausaufgaben. (sollen)", correct: "Ich soll Hausaufgaben machen." },
      { hint: "Er fährt Fahrrad. (können)", correct: "Er kann Fahrrad fahren." },
      { hint: "Wir gehen ins Kino. (dürfen)", correct: "Wir dürfen ins Kino gehen." },
      { hint: "Ihr spielt Fußball. (wollen)", correct: "Ihr wollt Fußball spielen." },
      { hint: "Sie liest ein Buch. (müssen)", correct: "Sie muss ein Buch lesen." },
    ],
  },
  // Exercise 8: Điền động từ khuyết thiếu phức hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " Deutsch sprechen."], gaps: ["kann"] },
      { text: ["Du ", " das Fenster öffnen."], gaps: ["darfst"] },
      { text: ["Er ", " früh aufstehen."], gaps: ["muss"] },
      { text: ["Wir ", " eine Präsentation vorbereiten."], gaps: ["wollen"] },
      { text: ["Ihr ", " den Müll rausbringen."], gaps: ["sollt"] },
    ],
  },
  // Exercise 9: Chuyển đổi câu (Tổng hợp)
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lese ein Buch. (wollen)", correct: "Ich will ein Buch lesen." },
      { hint: "Er macht die Aufgaben. (müssen)", correct: "Er muss die Aufgaben machen." },
      { hint: "Wir sehen fern. (können)", correct: "Wir können fernsehen." },
      { hint: "Du isst gesund. (sollen)", correct: "Du sollst gesund essen." },
      { hint: "Sie bleibt zu Hause. (dürfen)", correct: "Sie darf zu Hause bleiben." },
    ],
  },
  // Exercise 10: Điền động từ khuyết thiếu (Tổng hợp)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " das Problem lösen."], gaps: ["kann"] },
      { text: ["Du ", " den Raum verlassen."], gaps: ["darfst"] },
      { text: ["Er ", " pünktlich sein."], gaps: ["muss"] },
      { text: ["Wir ", " eine Entscheidung treffen."], gaps: ["wollen"] },
      { text: ["Ihr ", " die Regeln beachten."], gaps: ["sollt"] },
    ],
  },
    // Exercise 11: Chuyển đổi câu nâng cao với Modalverben
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich singe ein Lied. (können)", correct: "Ich kann ein Lied singen." },
        { hint: "Du liest ein Buch. (wollen)", correct: "Du willst ein Buch lesen." },
        { hint: "Er schreibt einen Brief. (müssen)", correct: "Er muss einen Brief schreiben." },
        { hint: "Wir spielen Gitarre. (dürfen)", correct: "Wir dürfen Gitarre spielen." },
        { hint: "Ihr esst gesund. (sollen)", correct: "Ihr sollt gesund essen." },
      ],
    },
    // Exercise 12: Điền động từ khuyết thiếu nâng cao
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " das Problem verstehen."], gaps: ["kann"] },
        { text: ["Du ", " in die Stadt gehen."], gaps: ["darfst"] },
        { text: ["Er ", " mehr arbeiten."], gaps: ["muss"] },
        { text: ["Wir ", " eine Pause machen."], gaps: ["wollen"] },
        { text: ["Ihr ", " eure Hausaufgaben machen."], gaps: ["sollt"] },
      ],
    },
    // Exercise 13: Chuyển đổi câu phức hợp
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich male ein Bild. (können)", correct: "Ich kann ein Bild malen." },
        { hint: "Du reparierst das Auto. (müssen)", correct: "Du musst das Auto reparieren." },
        { hint: "Er hört Musik. (wollen)", correct: "Er will Musik hören." },
        { hint: "Wir reisen nach Berlin. (dürfen)", correct: "Wir dürfen nach Berlin reisen." },
        { hint: "Ihr schreibt einen Aufsatz. (sollen)", correct: "Ihr sollt einen Aufsatz schreiben." },
      ],
    },
    // Exercise 14: Điền động từ khuyết thiếu phức hợp
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " Deutsch fließend sprechen."], gaps: ["kann"] },
        { text: ["Du ", " nach Hause gehen."], gaps: ["darfst"] },
        { text: ["Er ", " das Zimmer aufräumen."], gaps: ["muss"] },
        { text: ["Wir ", " einen Kuchen backen."], gaps: ["wollen"] },
        { text: ["Ihr ", " eure Schuhe putzen."], gaps: ["sollt"] },
      ],
    },
    // Exercise 15: Chuyển đổi câu (Tổng hợp nâng cao)
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich spiele Fußball. (wollen)", correct: "Ich will Fußball spielen." },
        { hint: "Du hörst Radio. (dürfen)", correct: "Du darfst Radio hören." },
        { hint: "Er trinkt Wasser. (sollen)", correct: "Er soll Wasser trinken." },
        { hint: "Wir lernen Grammatik. (müssen)", correct: "Wir müssen Grammatik lernen." },
        { hint: "Ihr geht einkaufen. (können)", correct: "Ihr könnt einkaufen gehen." },
      ],
    },
    // Exercise 16: Điền động từ khuyết thiếu (Tổng hợp)
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " neue Wörter lernen."], gaps: ["kann"] },
        { text: ["Du ", " den Film sehen."], gaps: ["darfst"] },
        { text: ["Er ", " früh aufstehen."], gaps: ["muss"] },
        { text: ["Wir ", " ins Kino gehen."], gaps: ["wollen"] },
        { text: ["Ihr ", " mehr lesen."], gaps: ["sollt"] },
      ],
    },
    // Exercise 17: Chuyển đổi câu phức tạp
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich kaufe ein Auto. (können)", correct: "Ich kann ein Auto kaufen." },
        { hint: "Du besuchst deine Freunde. (dürfen)", correct: "Du darfst deine Freunde besuchen." },
        { hint: "Er isst gesund. (sollen)", correct: "Er soll gesund essen." },
        { hint: "Wir arbeiten heute. (müssen)", correct: "Wir müssen heute arbeiten." },
        { hint: "Ihr reist nach Italien. (wollen)", correct: "Ihr wollt nach Italien reisen." },
      ],
    },
    // Exercise 18: Điền động từ khuyết thiếu (Phức hợp nâng cao)
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " einen Marathon laufen."], gaps: ["kann"] },
        { text: ["Du ", " das Konzert besuchen."], gaps: ["darfst"] },
        { text: ["Er ", " die Arbeit fertig machen."], gaps: ["muss"] },
        { text: ["Wir ", " ein Lied singen."], gaps: ["wollen"] },
        { text: ["Ihr ", " den Test schreiben."], gaps: ["sollt"] },
      ],
    },
    // Exercise 19: Chuyển đổi câu phức hợp nâng cao
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich trinke Kaffee. (dürfen)", correct: "Ich darf Kaffee trinken." },
        { hint: "Du lernst Englisch. (können)", correct: "Du kannst Englisch lernen." },
        { hint: "Er kocht das Abendessen. (müssen)", correct: "Er muss das Abendessen kochen." },
        { hint: "Wir besuchen die Familie. (sollen)", correct: "Wir sollen die Familie besuchen." },
        { hint: "Ihr fahrt Auto. (wollen)", correct: "Ihr wollt Auto fahren." },
      ],
    },
    // Exercise 20: Điền động từ khuyết thiếu tổng hợp (Cao cấp)
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " den Text schreiben."], gaps: ["kann"] },
        { text: ["Du ", " das Fenster schließen."], gaps: ["darfst"] },
        { text: ["Er ", " den Tisch decken."], gaps: ["muss"] },
        { text: ["Wir ", " das Projekt beenden."], gaps: ["wollen"] },
        { text: ["Ihr ", " die Aufgaben machen."], gaps: ["sollt"] },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - Modalverben</h1>
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
  