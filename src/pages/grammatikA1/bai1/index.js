import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Basic Verb Conjugation
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " jeden Tag."], gaps: ["arbeite"] },
      { text: ["Du ", " im Büro."], gaps: ["arbeitest"] },
      { text: ["Er ", " viel."], gaps: ["arbeitet"] },
      { text: ["Wir ", " zusammen."], gaps: ["arbeiten"] },
      { text: ["Ihr ", " im Garten."], gaps: ["arbeitet"] },
      { text: ["Sie ", " als Lehrerin."], gaps: ["arbeiten"] },
    ],
  },
  // Exercise 2: Fill in appropriate verbs
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " zur Schule."], gaps: ["gehe"] },
      { text: ["Du ", " ein Buch."], gaps: ["liest"] },
      { text: ["Er ", " fern."], gaps: ["sieht"] },
      { text: ["Wir ", " Fußball."], gaps: ["spielen"] },
      { text: ["Ihr ", " das Abendessen."], gaps: ["kocht"] },
      { text: ["Sie ", " einen Brief."], gaps: ["schreiben"] },
    ],
  },
  // Exercise 3: Irregular Verb Conjugation
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " jeden Morgen."], gaps: ["laufe"] },
      { text: ["Du ", " im Park."], gaps: ["läufst"] },
      { text: ["Er ", " sehr schnell."], gaps: ["läuft"] },
      { text: ["Wir ", " zusammen."], gaps: ["laufen"] },
      { text: ["Ihr ", " zur Schule."], gaps: ["lauft"] },
      { text: ["Sie ", " jeden Abend."], gaps: ["laufen"] },
    ],
  },
  // Exercise 4: Negative Sentences
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich habe ein Auto.", correct: "Ich habe kein Auto." },
      { hint: "Du isst einen Apfel.", correct: "Du isst keinen Apfel." },
      { hint: "Er geht zur Schule.", correct: "Er geht nicht zur Schule." },
      { hint: "Wir trinken Wasser.", correct: "Wir trinken kein Wasser." },
      { hint: "Ihr spielt Fußball.", correct: "Ihr spielt keinen Fußball." },
      { hint: "Sie arbeiten im Büro.", correct: "Sie arbeiten nicht im Büro." },
    ],
  },
  // Exercise 5: Translate Sentences
  {
    type: "rewrite",
    sentences: [
      { hint: "Tôi đang đọc sách.", correct: "Ich lese ein Buch." },
      { hint: "Chúng tôi chơi bóng đá.", correct: "Wir spielen Fußball." },
      { hint: "Bạn làm việc ở đâu?", correct: "Wo arbeitest du?" },
      { hint: "Anh ấy không thích ăn táo.", correct: "Er mag keine Äpfel." },
      { hint: "Họ đang viết một lá thư.", correct: "Sie schreiben einen Brief." },
    ],
  },
  // Exercise 6: Complete Sentences
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " einen Film im Kino."], gaps: ["sehe"] },
      { text: ["Du ", " viele Freunde."], gaps: ["hast"] },
      { text: ["Er ", " mit dem Fahrrad zur Schule."], gaps: ["fährt"] },
      { text: ["Wir ", " im Park."], gaps: ["spielen"] },
      { text: ["Ihr ", " eine Zeitung."], gaps: ["lest"] },
      { text: ["Sie ", " eine E-Mail."], gaps: ["schreiben"] },
    ],
  },
  // Exercise 7: Modal Verbs
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " Deutsch sprechen."], gaps: ["kann"] },
      { text: ["Du ", " ins Kino gehen."], gaps: ["willst"] },
      { text: ["Er ", " die Hausaufgaben machen."], gaps: ["muss"] },
      { text: ["Wir ", " gut kochen."], gaps: ["können"] },
      { text: ["Ihr ", " Fußball spielen."], gaps: ["wollt"] },
      { text: ["Sie ", " morgen arbeiten."], gaps: ["müssen"] },
    ],
  },
  // Exercise 8: Past Tense Conversion
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin glücklich.", correct: "Ich war glücklich." },
      { hint: "Du hast ein Buch.", correct: "Du hattest ein Buch." },
      { hint: "Er arbeitet im Büro.", correct: "Er arbeitete im Büro." },
      { hint: "Wir gehen in die Schule.", correct: "Wir gingen in die Schule." },
      { hint: "Ihr esst Brot.", correct: "Ihr aßt Brot." },
      { hint: "Sie spielen Fußball.", correct: "Sie spielten Fußball." },
    ],
  },
  // Exercise 9: Fill the Paragraph
  {
    type: "cloze",
    sentences: [
      { text: ["Hallo! Ich ", " Anna und ich ", " aus Deutschland. Jeden Tag ", " ich zur Schule. Am Nachmittag ", " ich meine Hausaufgaben und ", " mit meinen Freunden. Abends ", " ich ein Buch und ", " früh."], gaps: ["heiße", "komme", "gehe", "mache", "spiele", "lese", "schlafe"] },
    ],
  },
  // Exercise 10: Select the Correct Word
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " mit dem Zug."], gaps: ["fahre"] },
      { text: ["Du ", " ein Brot."], gaps: ["kaufst"] },
      { text: ["Er ", " ein Lied."], gaps: ["singt"] },
      { text: ["Wir ", " zusammen."], gaps: ["tanzen"] },
      { text: ["Ihr ", " einen Kuchen."], gaps: ["backt"] },
      { text: ["Sie ", " ein Bild."], gaps: ["zeichnen"] },
    ],
  },

  // Exercise 11: Questions and Answers
  {
    type: "cloze",
    sentences: [
      { text: ["Woher ", " du?"], gaps: ["kommst"] },
      { text: ["Was ", " du?"], gaps: ["machst"] },
      { text: ["Wann ", " er?"], gaps: ["kommt"] },
      { text: ["Warum ", " sie Deutsch?"], gaps: ["lernt"] },
      { text: ["Wer ", " das?"], gaps: ["kauft"] },
    ],
  },
  // Exercise 12: Rewrite Positive to Negative
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich habe Zeit.", correct: "Ich habe keine Zeit." },
      { hint: "Er isst ein Brot.", correct: "Er isst kein Brot." },
      { hint: "Wir sehen einen Film.", correct: "Wir sehen keinen Film." },
      { hint: "Ihr habt ein Haus.", correct: "Ihr habt kein Haus." },
      { hint: "Sie trinken Milch.", correct: "Sie trinken keine Milch." },
    ],
  },
  // Exercise 13: Simple Future Sentences
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " morgen ins Kino."], gaps: ["werde"] },
      { text: ["Du ", " ein Buch lesen."], gaps: ["wirst"] },
      { text: ["Er ", " nach Hause gehen."], gaps: ["wird"] },
      { text: ["Wir ", " zusammen arbeiten."], gaps: ["werden"] },
      { text: ["Ihr ", " Fußball spielen."], gaps: ["werdet"] },
      { text: ["Sie ", " einen Brief schreiben."], gaps: ["werden"] },
    ],
  },
  // Exercise 14: Rewrite Questions
  {
    type: "rewrite",
    sentences: [
      { hint: "Ist das dein Auto?", correct: "Nein, das ist nicht mein Auto." },
      { hint: "Hast du Hunger?", correct: "Nein, ich habe keinen Hunger." },
      { hint: "Gehen wir ins Kino?", correct: "Nein, wir gehen nicht ins Kino." },
      { hint: "Liest du das Buch?", correct: "Nein, ich lese das Buch nicht." },
      { hint: "Spielt ihr Fußball?", correct: "Nein, wir spielen keinen Fußball." },
    ],
  },
  // Exercise 15: Combine Sentences
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ein Auto ", " es ist rot."], gaps: ["und"] },
      { text: ["Er liest ein Buch ", " macht Notizen."], gaps: ["und"] },
      { text: ["Wir gehen ins Kino ", " sehen einen Film."], gaps: ["und"] },
      { text: ["Ihr arbeitet ", " ihr lernt Deutsch."], gaps: ["und"] },
      { text: ["Ich mag Kaffee ", " keinen Tee."], gaps: ["aber"] },
    ],
  },
  // Exercise 16: Past Tense Questions
  {
    type: "cloze",
    sentences: [
      { text: ["Was ", " du gestern?"], gaps: ["hast"] },
      { text: ["Wo ", " er letzte Woche?"], gaps: ["war"] },
      { text: ["Warum ", " sie nicht gekommen?"], gaps: ["ist"] },
      { text: ["Wie lange ", " ihr in Deutschland?"], gaps: ["wart"] },
      { text: ["Wer ", " das gemacht?"], gaps: ["hat"] },
    ],
  },
  // Exercise 17: Translate Questions
  {
    type: "rewrite",
    sentences: [
      { hint: "Bạn có học tiếng Đức không?", correct: "Lernst du Deutsch?" },
      { hint: "Anh ấy có đi làm không?", correct: "Geht er zur Arbeit?" },
      { hint: "Họ có đang chơi bóng đá không?", correct: "Spielen sie Fußball?" },
      { hint: "Chúng tôi có đang đọc sách không?", correct: "Lesen wir ein Buch?" },
      { hint: "Cô ấy có đang nấu ăn không?", correct: "Kocht sie?" },
    ],
  },
  // Exercise 18: Complete the Dialogue
  {
    type: "cloze",
    sentences: [
      { text: ["A: Wie ", " du? B: Ich ", " gut."], gaps: ["geht", "bin"] },
      { text: ["A: Was ", " du? B: Ich ", " meine Hausaufgaben."], gaps: ["machst", "mache"] },
      { text: ["A: Wo ", " ihr? B: Wir ", " im Park."], gaps: ["seid", "sind"] },
    ],
  },
  // Exercise 19: Object Pronouns
  {
    type: "cloze",
    sentences: [
      { text: ["Ich liebe meinen Hund. Ich liebe ", "."], gaps: ["ihn"] },
      { text: ["Er hat eine Katze. Er mag ", "."], gaps: ["sie"] },
      { text: ["Wir haben ein Auto. Wir benutzen ", "."], gaps: ["es"] },
      { text: ["Sie haben Bücher. Sie lesen ", "."], gaps: ["sie"] },
    ],
  },
  // Exercise 20: Conditional Sentences
  {
    type: "rewrite",
    sentences: [
      { hint: "Nếu tôi có thời gian, tôi sẽ học tiếng Đức.", correct: "Wenn ich Zeit habe, lerne ich Deutsch." },
      { hint: "Nếu bạn có tiền, bạn sẽ mua một cái ô tô.", correct: "Wenn du Geld hast, kaufst du ein Auto." },
      { hint: "Nếu anh ấy làm bài tập, anh ấy sẽ đạt điểm tốt.", correct: "Wenn er die Hausaufgaben macht, bekommt er gute Noten." },
      { hint: "Nếu chúng tôi đi sớm, chúng tôi sẽ bắt được chuyến tàu.", correct: "Wenn wir früh gehen, erreichen wir den Zug." },
      { hint: "Nếu họ học tập chăm chỉ, họ sẽ thành công.", correct: "Wenn sie fleißig lernen, werden sie erfolgreich." },
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
