import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Basic Ja/Nein Questions
  {
    type: "rewrite",
    sentences: [
      { hint: "Kommst du aus Deutschland?", correct: "Ja, ich komme aus Deutschland." },
      { hint: "Arbeitest du heute?", correct: "Nein, ich arbeite nicht heute." },
      { hint: "Spielt er Fußball?", correct: "Ja, er spielt Fußball." },
      { hint: "Gehen wir ins Kino?", correct: "Ja, wir gehen ins Kino." },
      { hint: "Hast du ein Auto?", correct: "Nein, ich habe kein Auto." },
    ],
  },
  // Exercise 2: W-Fragen Completion
  {
    type: "cloze",
    sentences: [
      { text: ["Wo ", " du?"], gaps: ["wohnst"] },
      { text: ["Was ", " du?"], gaps: ["machst"] },
      { text: ["Wann ", " er?"], gaps: ["kommt"] },
      { text: ["Warum ", " sie?"], gaps: ["lernt"] },
      { text: ["Wer ", " das?"], gaps: ["kauft"] },
    ],
  },
  // Exercise 3: More Ja/Nein Questions
  {
    type: "rewrite",
    sentences: [
      { hint: "Hast du einen Hund?", correct: "Nein, ich habe keinen Hund." },
      { hint: "Gehen sie zur Schule?", correct: "Ja, sie gehen zur Schule." },
      { hint: "Arbeitet er im Büro?", correct: "Ja, er arbeitet im Büro." },
      { hint: "Trinken wir Kaffee?", correct: "Nein, wir trinken keinen Kaffee." },
      { hint: "Fährst du Fahrrad?", correct: "Ja, ich fahre Fahrrad." },
    ],
  },
  // Exercise 4: W-Fragen Extended
  {
    type: "cloze",
    sentences: [
      { text: ["Wo ", " ihr?"], gaps: ["wohnt"] },
      { text: ["Was ", " wir heute?"], gaps: ["machen"] },
      { text: ["Wann ", " sie morgen?"], gaps: ["kommt"] },
      { text: ["Warum ", " er Deutsch?"], gaps: ["lernt"] },
      { text: ["Wer ", " die Aufgabe?"], gaps: ["macht"] },
    ],
  },
  // Exercise 5: Mixed Ja/Nein and W-Fragen
  {
    type: "cloze",
    sentences: [
      { text: ["Bist du ", "?"], gaps: ["bereit"] },
      { text: ["Hat sie ", " Buch?"], gaps: ["ein"] },
      { text: ["Wann ", " wir?"], gaps: ["gehen"] },
      { text: ["Was ", " er kaufen?"], gaps: ["möchte"] },
      { text: ["Wo ", " sie wohnen?"], gaps: ["wird"] },
    ],
  },
  // Exercise 6: Translate Ja/Nein Questions
  {
    type: "rewrite",
    sentences: [
      { hint: "Do you have a car?", correct: "Hast du ein Auto?" },
      { hint: "Are they working today?", correct: "Arbeiten sie heute?" },
      { hint: "Is he playing football?", correct: "Spielt er Fußball?" },
      { hint: "Are we going to the cinema?", correct: "Gehen wir ins Kino?" },
      { hint: "Do you drink coffee?", correct: "Trinkst du Kaffee?" },
    ],
  },
  // Exercise 7: W-Fragen Translation
  {
    type: "rewrite",
    sentences: [
      { hint: "Where do you live?", correct: "Wo wohnst du?" },
      { hint: "What are you doing?", correct: "Was machst du?" },
      { hint: "When is he coming?", correct: "Wann kommt er?" },
      { hint: "Why is she learning?", correct: "Warum lernt sie?" },
      { hint: "Who is buying this?", correct: "Wer kauft das?" },
    ],
  },
  // Exercise 8: W-Fragen Completion (Past Tense)
  {
    type: "cloze",
    sentences: [
      { text: ["Wo ", " du gestern?"], gaps: ["warst"] },
      { text: ["Was ", " ihr gemacht?"], gaps: ["habt"] },
      { text: ["Wann ", " sie gekommen?"], gaps: ["ist"] },
      { text: ["Warum ", " du das gesagt?"], gaps: ["hast"] },
      { text: ["Wer ", " das gebracht?"], gaps: ["hat"] },
    ],
  },
  // Exercise 9: Mixed Questions
  {
    type: "cloze",
    sentences: [
      { text: ["Geht er ", "?"], gaps: ["zur Schule"] },
      { text: ["Trinkst du ", "?"], gaps: ["Kaffee"] },
      { text: ["Warum ", " sie nicht hier?"], gaps: ["ist"] },
      { text: ["Was ", " wir jetzt?"], gaps: ["machen"] },
      { text: ["Wo ", " ihr heute?"], gaps: ["wart"] },
    ],
  },
  // Exercise 10: Complex Rewrite
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich wohne in Berlin.", correct: "Wo wohnst du?" },
      { hint: "Er lernt Deutsch.", correct: "Warum lernt er Deutsch?" },
      { hint: "Wir gehen ins Kino.", correct: "Gehen wir ins Kino?" },
      { hint: "Sie hat ein Buch.", correct: "Hat sie ein Buch?" },
      { hint: "Du machst Hausaufgaben.", correct: "Was machst du?" },
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