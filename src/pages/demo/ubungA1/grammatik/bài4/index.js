import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Nominativ Completion
  {
    type: "cloze",
    sentences: [
      { text: ["", " ist neu."], gaps: ["Das Auto"] },
      { text: ["", " steht im Wohnzimmer."], gaps: ["Der Tisch"] },
      { text: ["", " ist kaputt."], gaps: ["Die Lampe"] },
      { text: ["", " spielen im Garten."], gaps: ["Die Kinder"] },
      { text: ["", " ist Lehrer."], gaps: ["Der Mann"] },
    ],
  },
  // Exercise 2: Akkusativ Completion
  {
    type: "cloze",
    sentences: [
      { text: ["Ich kaufe ", " (der Apfel)."], gaps: ["den Apfel"] },
      { text: ["Wir sehen ", " (die Katze)."], gaps: ["die Katze"] },
      { text: ["Er hat ", " (das Buch)."], gaps: ["das Buch"] },
      { text: ["Sie mag ", " (die Blumen)."], gaps: ["die Blumen"] },
      { text: ["Ich finde ", " (der Stift)."], gaps: ["den Stift"] },
    ],
  },
  // Exercise 3: Dativ Completion
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gebe ", " (der Mann) das Buch."], gaps: ["dem Mann"] },
      { text: ["Wir helfen ", " (die Frau)."], gaps: ["der Frau"] },
      { text: ["Sie schreibt ", " (das Kind) einen Brief."], gaps: ["dem Kind"] },
      { text: ["Er schenkt ", " (die Freunde) Blumen."], gaps: ["den Freunden"] },
      { text: ["Wir gratulieren ", " (der Lehrer)."], gaps: ["dem Lehrer"] },
    ],
  },
  // Exercise 4: Nominativ (Repeated)
  {
    type: "cloze",
    sentences: [
      { text: ["", " ist neu."], gaps: ["Das Auto"] },
      { text: ["", " steht im Wohnzimmer."], gaps: ["Der Tisch"] },
      { text: ["", " ist kaputt."], gaps: ["Die Lampe"] },
      { text: ["", " spielen im Garten."], gaps: ["Die Kinder"] },
      { text: ["", " ist Lehrer."], gaps: ["Der Mann"] },
    ],
  },
  // Exercise 5: Akkusativ (Repeated)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich kaufe ", " (der Apfel)."], gaps: ["den Apfel"] },
      { text: ["Wir sehen ", " (die Katze)."], gaps: ["die Katze"] },
      { text: ["Er hat ", " (das Buch)."], gaps: ["das Buch"] },
      { text: ["Sie mag ", " (die Blumen)."], gaps: ["die Blumen"] },
      { text: ["Ich finde ", " (der Stift)."], gaps: ["den Stift"] },
    ],
  },
  // Exercise 6: Dativ (Repeated)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gebe ", " (der Mann) das Buch."], gaps: ["dem Mann"] },
      { text: ["Wir helfen ", " (die Frau)."], gaps: ["der Frau"] },
      { text: ["Sie schreibt ", " (das Kind) einen Brief."], gaps: ["dem Kind"] },
      { text: ["Er schenkt ", " (die Freunde) Blumen."], gaps: ["den Freunden"] },
      { text: ["Wir gratulieren ", " (der Lehrer)."], gaps: ["dem Lehrer"] },
    ],
  },
  // Exercise 7: Nominativ Advanced
  {
    type: "cloze",
    sentences: [
      { text: ["", " ist neu."], gaps: ["Das Auto"] },
      { text: ["", " steht im Wohnzimmer."], gaps: ["Der Tisch"] },
      { text: ["", " ist kaputt."], gaps: ["Die Lampe"] },
      { text: ["", " spielen im Garten."], gaps: ["Die Kinder"] },
      { text: ["", " ist Lehrer."], gaps: ["Der Mann"] },
    ],
  },
  // Exercise 8: Akkusativ Advanced
  {
    type: "cloze",
    sentences: [
      { text: ["Ich kaufe ", " (der Apfel)."], gaps: ["den Apfel"] },
      { text: ["Wir sehen ", " (die Katze)."], gaps: ["die Katze"] },
      { text: ["Er hat ", " (das Buch)."], gaps: ["das Buch"] },
      { text: ["Sie mag ", " (die Blumen)."], gaps: ["die Blumen"] },
      { text: ["Ich finde ", " (der Stift)."], gaps: ["den Stift"] },
    ],
  },
  // Exercise 9: Dativ Advanced
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gebe ", " (der Mann) das Buch."], gaps: ["dem Mann"] },
      { text: ["Wir helfen ", " (die Frau)."], gaps: ["der Frau"] },
      { text: ["Sie schreibt ", " (das Kind) einen Brief."], gaps: ["dem Kind"] },
      { text: ["Er schenkt ", " (die Freunde) Blumen."], gaps: ["den Freunden"] },
      { text: ["Wir gratulieren ", " (der Lehrer)."], gaps: ["dem Lehrer"] },
    ],
  },
  // Exercise 10: Mixed Cases
  {
    type: "cloze",
    sentences: [
      { text: ["Das Auto ", " neu."], gaps: ["ist"] },
      { text: ["Ich sehe ", " (die Katze)."], gaps: ["die Katze"] },
      { text: ["Wir helfen ", " (der Mann)."], gaps: ["dem Mann"] },
      { text: ["Er gibt ", " (das Kind) ein Buch."], gaps: ["dem Kind"] },
      { text: ["Der Tisch ", " im Wohnzimmer."], gaps: ["steht"] },
    ],
  },
    // Exercise 11: Nominativ Completion - Advanced
    {
      type: "cloze",
      sentences: [
        { text: ["", " ist wunderschön."], gaps: ["Das Haus"] },
        { text: ["", " steht auf dem Tisch."], gaps: ["Der Laptop"] },
        { text: ["", " ist leer."], gaps: ["Die Flasche"] },
        { text: ["", " lernen fleißig."], gaps: ["Die Schüler"] },
        { text: ["", " ist alt."], gaps: ["Das Buch"] },
      ],
    },
    // Exercise 12: Akkusativ Completion - Advanced
    {
      type: "cloze",
      sentences: [
        { text: ["Ich sehe ", " (der Hund)."], gaps: ["den Hund"] },
        { text: ["Er kauft ", " (die Tasche)."], gaps: ["die Tasche"] },
        { text: ["Wir lesen ", " (das Dokument)."], gaps: ["das Dokument"] },
        { text: ["Sie mag ", " (die Bilder)."], gaps: ["die Bilder"] },
        { text: ["Ich hole ", " (der Ball)."], gaps: ["den Ball"] },
      ],
    },
    // Exercise 13: Dativ Completion - Advanced
    {
      type: "cloze",
      sentences: [
        { text: ["Ich erzähle ", " (der Junge) eine Geschichte."], gaps: ["dem Jungen"] },
        { text: ["Wir schicken ", " (die Eltern) eine Einladung."], gaps: ["den Eltern"] },
        { text: ["Er gibt ", " (die Frau) einen Ring."], gaps: ["der Frau"] },
        { text: ["Sie zeigt ", " (das Kind) den Weg."], gaps: ["dem Kind"] },
        { text: ["Ich leihe ", " (der Nachbar) ein Buch."], gaps: ["dem Nachbarn"] },
      ],
    },
    // Exercise 14: Mixed Cases
    {
      type: "cloze",
      sentences: [
        { text: ["", " ist neu."], gaps: ["Das Auto"] },
        { text: ["Ich sehe ", " (die Katze)."], gaps: ["die Katze"] },
        { text: ["Wir helfen ", " (der Mann)."], gaps: ["dem Mann"] },
        { text: ["Er schenkt ", " (das Kind) einen Ball."], gaps: ["dem Kind"] },
        { text: ["Der Stuhl ", " im Zimmer."], gaps: ["steht"] },
      ],
    },
    // Exercise 15: Translate Cases
    {
      type: "rewrite",
      sentences: [
        { hint: "Đó là chiếc xe hơi mới.", correct: "Das Auto ist neu." },
        { hint: "Tôi thấy một con mèo.", correct: "Ich sehe die Katze." },
        { hint: "Tôi vừa giúp mội người đàn ông.", correct: "Wir helfen dem Mann." },
        { hint: "Anh ấy đưa cho đưa trẻ một quả banh.", correct: "Er gibt dem Kind einen Ball." },
        { hint: "Cái ghế đứng trong phòng.", correct: "Der Stuhl steht im Zimmer." },
      ],
    },
    // Exercise 16: Advanced Mixed Cases
    {
      type: "cloze",
      sentences: [
        { text: ["", " ist groß."], gaps: ["Das Fenster"] },
        { text: ["Ich trage ", " (die Tasche)."], gaps: ["die Tasche"] },
        { text: ["Wir sprechen mit ", " (der Lehrer)."], gaps: ["dem Lehrer"] },
        { text: ["Sie zeigt ", " (das Bild)."], gaps: ["das Bild"] },
        { text: ["Der Hund ", " im Garten."], gaps: ["läuft"] },
      ],
    },
    // Exercise 17: Translate Advanced Sentences
    {
      type: "rewrite",
      sentences: [
        { hint: "Cái cửa sổ đố lớn.", correct: "Das Fenster ist groß." },
        { hint: "Tôi mang túi xách.", correct: "Ich trage die Tasche." },
        { hint: "Chúng tôi nói chuyện với thầy giáo.", correct: "Wir sprechen mit dem Lehrer." },
        { hint: "Cô ấy trình bày bức tranh.", correct: "Sie zeigt das Bild." },
        { hint: "Con chó chạy trong vường.", correct: "Der Hund läuft im Garten." },
      ],
    },
    // Exercise 18: Complex Sentences
    {
      type: "cloze",
      sentences: [
        { text: ["", " ist modern."], gaps: ["Das Gebäude"] },
        { text: ["Ich finde ", " (der Schlüssel)."], gaps: ["den Schlüssel"] },
        { text: ["Wir geben ", " (die Nachbarn) einen Kuchen."], gaps: ["den Nachbarn"] },
        { text: ["Er bringt ", " (das Kind) ein Spielzeug."], gaps: ["dem Kind"] },
        { text: ["Die Lampe ", " auf dem Tisch."], gaps: ["steht"] },
      ],
    },
    // Exercise 19: Translation Challenge
    {
      type: "rewrite",
      sentences: [
        { hint: "Toà nhà đó hiện đại.", correct: "Das Gebäude ist modern." },
        { hint: "Tôi kiếm chìa khoá.", correct: "Ich finde den Schlüssel." },
        { hint: "Chúng tôi gửi một cáci bánh cho người hàng xóm.", correct: "Wir geben den Nachbarn einen Kuchen." },
        { hint: "Anh ấy đem chô đứa trẻ một món đồ chơi.", correct: "Er bringt dem Kind ein Spielzeug." },
        { hint: "Cái đèn đưungs trên bàn.", correct: "Die Lampe steht auf dem Tisch." },
      ],
    },
    // Exercise 20: Comprehensive Mixed Cases
    {
      type: "cloze",
      sentences: [
        { text: ["", " ist sauber."], gaps: ["Das Zimmer"] },
        { text: ["Ich nehme ", " (die Zeitung)."], gaps: ["die Zeitung"] },
        { text: ["Er hilft ", " (die Eltern)."], gaps: ["den Eltern"] },
        { text: ["Sie erzählt ", " (dem Lehrer) eine Geschichte."], gaps: ["dem Lehrer"] },
        { text: ["Die Kinder ", " draußen."], gaps: ["spielen"] },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - Kasus</h1>
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