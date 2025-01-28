import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Personalpronomen - Chọn đại từ nhân xưng
  {
    type: "rewrite",
    sentences: [
      { hint: ["", " wohnt in Berlin. (ich/er)"], correct: "Ich wohne in Berlin." },
      { hint: ["Woher kommt ", "? (du/ihr)"], correct: "Woher kommst du?" },
      { hint: ["", " lernen Deutsch. (wir/sie)"], correct: "Wir lernen Deutsch." },
      { hint: ["Gehen ", " ins Kino? (du/ihr)"], correct: "Gehen ihr ins Kino?" },
      { hint: ["", " arbeitet als Lehrerin. (sie/er)"], correct: "Sie arbeitet als Lehrerin." },
    ],
  },
  // Exercise 2: Điền đại từ nhân xưng phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["", " (ich) wohne in Berlin."], gaps: ["Ich"] },
      { text: ["Woher kommst ", " (du)?"], gaps: ["du"] },
      { text: ["", " (er) spielt Fußball."], gaps: ["Er"] },
      { text: ["Wir gehen ins Kino. Kommst ", " (ihr) mit?"], gaps: ["ihr"] },
      { text: ["", " (sie) sind meine Freunde."], gaps: ["Sie"] },
    ],
  },
  // Exercise 3: Chọn đại từ nhân xưng - Lặp lại
  {
    type: "rewrite",
    sentences: [
      { hint: ["", " wohnt in Berlin. (ich/er)"], correct: "Ich wohne in Berlin." },
      { hint: ["Woher kommt ", "? (du/ihr)"], correct: "Woher kommst du?" },
      { hint: ["", " lernen Deutsch. (wir/sie)"], correct: "Wir lernen Deutsch." },
      { hint: ["Gehen ", " ins Kino? (du/ihr)"], correct: "Gehen ihr ins Kino?" },
      { hint: ["", " arbeitet als Lehrerin. (sie/er)"], correct: "Sie arbeitet als Lehrerin." },
    ],
  },
  // Exercise 4: Điền đại từ nhân xưng - Phần mở rộng
  {
    type: "cloze",
    sentences: [
      { text: ["", " wohne in Berlin."], gaps: ["Ich"] },
      { text: ["Woher kommst ", "?"], gaps: ["du"] },
      { text: ["", " spielt Fußball."], gaps: ["Er"] },
      { text: ["Wir gehen ins Kino. Kommst , mit?"], gaps: ["ihr"] },
      { text: ["", " sind meine Freunde."], gaps: ["Sie"] },
    ],
  },
  // Exercise 5: Chọn đại từ nhân xưng nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: ["", " wohnt in Berlin. (ich/er)"], correct: "Ich wohne in Berlin." },
      { hint: ["Woher kommt ", "? (du/ihr)"], correct: "Woher kommst du?" },
      { hint: ["", " lernen Deutsch. (wir/sie)"], correct: "Wir lernen Deutsch." },
      { hint: ["Gehen ", " ins Kino? (du/ihr)"], correct: "Gehen ihr ins Kino?" },
      { hint: ["", " arbeitet als Lehrerin. (sie/er)"], correct: "Sie arbeitet als Lehrerin." },
    ],
  },
  // Exercise 6: Điền đại từ nhân xưng hoàn chỉnh
  {
    type: "cloze",
    sentences: [
      { text: ["", " wohne in Berlin."], gaps: ["Ich"] },
      { text: ["Woher kommst ", "?"], gaps: ["du"] },
      { text: ["", " spielt Fußball."], gaps: ["Er"] },
      { text: ["Wir gehen ins Kino. Kommst , mit?"], gaps: ["ihr"] },
      { text: ["", " sind meine Freunde."], gaps: ["Sie"] },
    ],
  },
  // Exercise 7: Đại từ nhân xưng và câu hỏi Ja/Nein
  {
    type: "rewrite",
    sentences: [
      { hint: ["Hast du ein Buch?"], correct: "Ja, ich habe ein Buch." },
      { hint: ["Arbeiten sie morgen?"], correct: "Nein, sie arbeiten nicht morgen." },
      { hint: ["Kommst du ins Kino?"], correct: "Ja, ich komme ins Kino." },
      { hint: ["Spielt ihr Tennis?"], correct: "Nein, wir spielen kein Tennis." },
      { hint: ["Geht er zur Arbeit?"], correct: "Ja, er geht zur Arbeit." },
    ],
  },
  // Exercise 8: W-Fragen Completion
  {
    type: "cloze",
    sentences: [
      { text: ["Wie ", " du?"], gaps: ["heißt"] },
      { text: ["Was ", " ihr heute?"], gaps: ["macht"] },
      { text: ["Wo ", " sie wohnen?"], gaps: ["wird"] },
      { text: ["Warum ", " er das gemacht?"], gaps: ["hat"] },
      { text: ["Wann ", " wir uns treffen?"], gaps: ["können"] },
    ],
  },
  // Exercise 9: Ja/Nein Questions Mixed
  {
    type: "rewrite",
    sentences: [
      { hint: ["Hast du einen Hund?"], correct: "Nein, ich habe keinen Hund." },
      { hint: ["Gehen sie zur Schule?"], correct: "Ja, sie gehen zur Schule." },
      { hint: ["Arbeitet er im Büro?"], correct: "Ja, er arbeitet im Büro." },
      { hint: ["Trinken wir Kaffee?"], correct: "Nein, wir trinken keinen Kaffee." },
      { hint: ["Fährst du Fahrrad?"], correct: "Ja, ich fahre Fahrrad." },
    ],
  },
  // Exercise 10: W-Fragen Advanced
  {
    type: "cloze",
    sentences: [
      { text: ["Wie ", " dein Name?"], gaps: ["ist"] },
      { text: ["Warum ", " sie heute nicht da?"], gaps: ["ist"] },
      { text: ["Wo ", " er hin?"], gaps: ["geht"] },
      { text: ["Was ", " du trinken?"], gaps: ["möchtest"] },
      { text: ["Wann ", " wir fahren?"], gaps: ["werden"] },
    ],
  },
    // Exercise 11: Mixed Ja/Nein Questions
    {
      type: "rewrite",
      sentences: [
        { hint: "Hast du ein Buch?", correct: "Ja, ich habe ein Buch." },
        { hint: "Arbeiten sie morgen?", correct: "Nein, sie arbeiten nicht morgen." },
        { hint: "Kommst du ins Kino?", correct: "Ja, ich komme ins Kino." },
        { hint: "Spielt ihr Tennis?", correct: "Nein, wir spielen kein Tennis." },
        { hint: "Geht er zur Arbeit?", correct: "Ja, er geht zur Arbeit." },
      ],
    },
    // Exercise 12: W-Fragen Completion
    {
      type: "cloze",
      sentences: [
        { text: ["Wie ", " du?"], gaps: ["heißt"] },
        { text: ["Was ", " ihr heute?"], gaps: ["macht"] },
        { text: ["Wo ", " sie wohnen?"], gaps: ["wird"] },
        { text: ["Warum ", " er das gemacht?"], gaps: ["hat"] },
        { text: ["Wann ", " wir uns treffen?"], gaps: ["können"] },
      ],
    },
    // Exercise 13: Translate W-Fragen
    {
      type: "rewrite",
      sentences: [
        { hint: "Where do they live?", correct: "Wo wohnen sie?" },
        { hint: "What is she doing?", correct: "Was macht sie?" },
        { hint: "When do we start?", correct: "Wann fangen wir an?" },
        { hint: "Why is he late?", correct: "Warum ist er spät?" },
        { hint: "Who is calling?", correct: "Wer ruft an?" },
      ],
    },
    // Exercise 14: Complex Questions
    {
      type: "cloze",
      sentences: [
        { text: ["Wie ", " dein Name?"], gaps: ["ist"] },
        { text: ["Warum ", " sie heute nicht da?"], gaps: ["ist"] },
        { text: ["Wo ", " er hin?"], gaps: ["geht"] },
        { text: ["Was ", " du trinken?"], gaps: ["möchtest"] },
        { text: ["Wann ", " wir fahren?"], gaps: ["werden"] },
      ],
    },
    // Exercise 15: Mixed Translation
    {
      type: "rewrite",
      sentences: [
        { hint: "Is she working?", correct: "Arbeitet sie?" },
        { hint: "Do you drink tea?", correct: "Trinkst du Tee?" },
        { hint: "Why are they here?", correct: "Warum sind sie hier?" },
        { hint: "When does the train leave?", correct: "Wann fährt der Zug ab?" },
        { hint: "Who is coming?", correct: "Wer kommt?" },
      ],
    },
    // Exercise 16: Future Tense W-Fragen
    {
      type: "cloze",
      sentences: [
        { text: ["Wann ", " sie ankommen?"], gaps: ["wird"] },
        { text: ["Was ", " wir morgen essen?"], gaps: ["werden"] },
        { text: ["Warum ", " er nicht teilnehmen?"], gaps: ["wird"] },
        { text: ["Wo ", " ihr sein?"], gaps: ["werdet"] },
        { text: ["Wie ", " ich das machen?"], gaps: ["werde"] },
      ],
    },
    // Exercise 17: Detailed Ja/Nein Sentences
    {
      type: "rewrite",
      sentences: [
        { hint: "Kauft er ein Auto?", correct: "Ja, er kauft ein Auto." },
        { hint: "Fahren sie nach Berlin?", correct: "Nein, sie fahren nicht nach Berlin." },
        { hint: "Trinkt sie Milch?", correct: "Ja, sie trinkt Milch." },
        { hint: "Gehen wir spazieren?", correct: "Nein, wir gehen nicht spazieren." },
        { hint: "Liest du das Buch?", correct: "Ja, ich lese das Buch." },
      ],
    },
    // Exercise 18: Advanced W-Fragen
    {
      type: "cloze",
      sentences: [
        { text: ["Was ", " er heute?"], gaps: ["macht"] },
        { text: ["Wo ", " wir morgen?"], gaps: ["sind"] },
        { text: ["Wie ", " ich das erklären?"], gaps: ["kann"] },
        { text: ["Wann ", " du die Aufgabe machen?"], gaps: ["wirst"] },
        { text: ["Warum ", " sie das nicht wissen?"], gaps: ["kann"] },
      ],
    },
    // Exercise 19: Conditional Questions
    {
      type: "rewrite",
      sentences: [
        { hint: "If he has time, will he join?", correct: "Wenn er Zeit hat, wird er teilnehmen?" },
        { hint: "If you are ready, can we start?", correct: "Wenn du bereit bist, können wir anfangen?" },
        { hint: "If they come, what will happen?", correct: "Wenn sie kommen, was wird passieren?" },
        { hint: "If she helps, will it be easier?", correct: "Wenn sie hilft, wird es einfacher sein?" },
        { hint: "If I study, will I pass?", correct: "Wenn ich lerne, werde ich bestehen?" },
      ],
    },
    // Exercise 20: Mixed Context Questions
    {
      type: "cloze",
      sentences: [
        { text: ["Wo ", " sie jetzt?"], gaps: ["sind"] },
        { text: ["Wann ", " das fertig sein?"], gaps: ["wird"] },
        { text: ["Was ", " du gelernt?"], gaps: ["hast"] },
        { text: ["Warum ", " wir nicht eingeladen?"], gaps: ["sind"] },
        { text: ["Wie ", " ich das verstehen?"], gaps: ["kann"] },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - A1</h1>
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