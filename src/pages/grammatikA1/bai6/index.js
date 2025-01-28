import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Hoàn thành câu với động từ tách
  {
    type: "cloze",
    sentences: [
      { text: ["Ich stehe um 7 Uhr "], gaps: ["auf"] },
      { text: ["Du kaufst im Supermarkt "], gaps: ["ein"] },
      { text: ["Er kommt zur Party "], gaps: ["mit"] },
      { text: ["Wir sehen am Abend "], gaps: ["fern"] },
      { text: ["Ihr ruft eure Eltern "], gaps: ["an"] },
    ],
  },
  // Exercise 2: Điền động từ tách đúng dạng
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " um 7 Uhr."], gaps: ["stehe auf"] },
      { text: ["Du ", " im Supermarkt."], gaps: ["kaufst ein"] },
      { text: ["Er ", " zur Party."], gaps: ["kommt mit"] },
      { text: ["Wir ", " am Abend."], gaps: ["sehen fern"] },
      { text: ["Ihr ", " eure Eltern."], gaps: ["ruft an"] },
    ],
  },
  // Exercise 3: Hoàn thành câu lặp lại với động từ tách
  {
    type: "cloze",
    sentences: [
      { text: ["Ich stehe um 7 Uhr "], gaps: ["auf"] },
      { text: ["Du kaufst im Supermarkt "], gaps: ["ein"] },
      { text: ["Er kommt zur Party "], gaps: ["mit"] },
      { text: ["Wir sehen am Abend "], gaps: ["fern"] },
      { text: ["Ihr ruft eure Eltern "], gaps: ["an"] },
    ],
  },
  // Exercise 4: Điền động từ tách đúng dạng (Lặp lại)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " um 7 Uhr."], gaps: ["stehe auf"] },
      { text: ["Du ", " im Supermarkt."], gaps: ["kaufst ein"] },
      { text: ["Er ", " zur Party."], gaps: ["kommt mit"] },
      { text: ["Wir ", " am Abend."], gaps: ["sehen fern"] },
      { text: ["Ihr ", " eure Eltern."], gaps: ["ruft an"] },
    ],
  },
  // Exercise 5: Hoàn thành câu nâng cao với động từ tách
  {
    type: "cloze",
    sentences: [
      { text: ["Ich stehe um 7 Uhr "], gaps: ["auf"] },
      { text: ["Du kaufst im Supermarkt "], gaps: ["ein"] },
      { text: ["Er kommt zur Party "], gaps: ["mit"] },
      { text: ["Wir sehen am Abend "], gaps: ["fern"] },
      { text: ["Ihr ruft eure Eltern "], gaps: ["an"] },
    ],
  },
  // Exercise 6: Điền động từ tách (Nâng cao)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " um 7 Uhr."], gaps: ["stehe auf"] },
      { text: ["Du ", " im Supermarkt."], gaps: ["kaufst ein"] },
      { text: ["Er ", " zur Party."], gaps: ["kommt mit"] },
      { text: ["Wir ", " am Abend."], gaps: ["sehen fern"] },
      { text: ["Ihr ", " eure Eltern."], gaps: ["ruft an"] },
    ],
  },
  // Exercise 7: Tổng hợp động từ tách cơ bản
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich stehe um 7 Uhr auf.", correct: "Ich stehe um 7 Uhr auf." },
      { hint: "Du kaufst im Supermarkt ein.", correct: "Du kaufst im Supermarkt ein." },
      { hint: "Er kommt zur Party mit.", correct: "Er kommt zur Party mit." },
      { hint: "Wir sehen am Abend fern.", correct: "Wir sehen am Abend fern." },
      { hint: "Ihr ruft eure Eltern an.", correct: "Ihr ruft eure Eltern an." },
    ],
  },
  // Exercise 8: Tổng hợp động từ tách nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich stehe früh auf.", correct: "Ich stehe früh auf." },
      { hint: "Du rufst deine Freunde an.", correct: "Du rufst deine Freunde an." },
      { hint: "Er kauft Gemüse ein.", correct: "Er kauft Gemüse ein." },
      { hint: "Wir sehen abends fern.", correct: "Wir sehen abends fern." },
      { hint: "Ihr kommt pünktlich mit.", correct: "Ihr kommt pünktlich mit." },
    ],
  },
  // Exercise 9: Hoàn thành câu tổng hợp với động từ tách
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " um 7 Uhr."], gaps: ["stehe auf"] },
      { text: ["Du ", " deine Freunde an."], gaps: ["rufst"] },
      { text: ["Er ", " Gemüse ein."], gaps: ["kauft"] },
      { text: ["Wir ", " am Abend fern."], gaps: ["sehen"] },
      { text: ["Ihr ", " pünktlich mit."], gaps: ["kommt"] },
    ],
  },
  // Exercise 10: Viết lại câu động từ tách
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich sehe am Abend fern.", correct: "Ich sehe am Abend fern." },
      { hint: "Du rufst deine Eltern an.", correct: "Du rufst deine Eltern an." },
      { hint: "Er kommt zur Schule mit.", correct: "Er kommt zur Schule mit." },
      { hint: "Wir kaufen im Supermarkt ein.", correct: "Wir kaufen im Supermarkt ein." },
      { hint: "Ihr steht früh auf.", correct: "Ihr steht früh auf." },
    ],
  },
    // Exercise 11: Hoàn thành câu nâng cao với động từ tách
    {
      type: "cloze",
      sentences: [
        { text: ["Ich stelle den Wecker "], gaps: ["aus"] },
        { text: ["Du bringst das Paket "], gaps: ["mit"] },
        { text: ["Er macht das Fenster "], gaps: ["auf"] },
        { text: ["Wir fangen die Arbeit "], gaps: ["an"] },
        { text: ["Ihr seht die Nachrichten "], gaps: ["fern"] },
      ],
    },
    // Exercise 12: Điền động từ tách nâng cao
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " den Wecker aus."], gaps: ["stelle"] },
        { text: ["Du ", " das Paket mit."], gaps: ["bringst"] },
        { text: ["Er ", " das Fenster auf."], gaps: ["macht"] },
        { text: ["Wir ", " die Arbeit an."], gaps: ["fangen"] },
        { text: ["Ihr ", " die Nachrichten fern."], gaps: ["seht"] },
      ],
    },
    // Exercise 13: Tổng hợp động từ tách với ngữ cảnh
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich mache das Fenster auf.", correct: "Ich mache das Fenster auf." },
        { hint: "Du bringst das Paket mit.", correct: "Du bringst das Paket mit." },
        { hint: "Er stellt den Wecker aus.", correct: "Er stellt den Wecker aus." },
        { hint: "Wir sehen abends fern.", correct: "Wir sehen abends fern." },
        { hint: "Ihr fangt die Arbeit an.", correct: "Ihr fangt die Arbeit an." },
      ],
    },
    // Exercise 14: Hoàn thành câu tổng hợp động từ tách
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " das Licht aus."], gaps: ["mache"] },
        { text: ["Du ", " das Fenster auf."], gaps: ["machst"] },
        { text: ["Er ", " die Arbeit an."], gaps: ["fängt"] },
        { text: ["Wir ", " die Nachrichten fern."], gaps: ["sehen"] },
        { text: ["Ihr ", " pünktlich mit."], gaps: ["kommt"] },
      ],
    },
    // Exercise 15: Viết lại câu với động từ tách nâng cao
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich mache das Licht aus.", correct: "Ich mache das Licht aus." },
        { hint: "Du stellst den Wecker aus.", correct: "Du stellst den Wecker aus." },
        { hint: "Er bringt das Buch mit.", correct: "Er bringt das Buch mit." },
        { hint: "Wir fangen das Projekt an.", correct: "Wir fangen das Projekt an." },
        { hint: "Ihr seht am Abend fern.", correct: "Ihr seht am Abend fern." },
      ],
    },
    // Exercise 16: Tổng hợp động từ tách mở rộng
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " das Buch mit."], gaps: ["bringe"] },
        { text: ["Du ", " die Tür auf."], gaps: ["machst"] },
        { text: ["Er ", " die Musik aus."], gaps: ["stellt"] },
        { text: ["Wir ", " die Arbeit an."], gaps: ["fangen"] },
        { text: ["Ihr ", " die Nachrichten fern."], gaps: ["seht"] },
      ],
    },
    // Exercise 17: Hoàn thành câu với động từ tách nâng cao
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich bringe das Paket mit.", correct: "Ich bringe das Paket mit." },
        { hint: "Du machst die Tür auf.", correct: "Du machst die Tür auf." },
        { hint: "Er stellt die Musik aus.", correct: "Er stellt die Musik aus." },
        { hint: "Wir fangen die Arbeit an.", correct: "Wir fangen die Arbeit an." },
        { hint: "Ihr seht die Nachrichten fern.", correct: "Ihr seht die Nachrichten fern." },
      ],
    },
    // Exercise 18: Viết lại câu động từ tách tổng hợp
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich sehe abends fern.", correct: "Ich sehe abends fern." },
        { hint: "Du bringst die Unterlagen mit.", correct: "Du bringst die Unterlagen mit." },
        { hint: "Er macht die Tür auf.", correct: "Er macht die Tür auf." },
        { hint: "Wir stellen die Stühle aus.", correct: "Wir stellen die Stühle aus." },
        { hint: "Ihr fangt den Kurs an.", correct: "Ihr fangt den Kurs an." },
      ],
    },
    // Exercise 19: Điền động từ tách đúng dạng với ngữ cảnh phức hợp
    {
      type: "cloze",
      sentences: [
        { text: ["Ich ", " den Fernseher aus."], gaps: ["mache"] },
        { text: ["Du ", " das Fenster zu."], gaps: ["machst"] },
        { text: ["Er ", " den Tisch auf."], gaps: ["stellt"] },
        { text: ["Wir ", " die Aufgaben an."], gaps: ["fangen"] },
        { text: ["Ihr ", " die Bücher mit."], gaps: ["bringt"] },
      ],
    },
    // Exercise 20: Viết lại câu tổng hợp động từ tách
    {
      type: "rewrite",
      sentences: [
        { hint: "Ich stelle das Fenster zu.", correct: "Ich stelle das Fenster zu." },
        { hint: "Du machst die Lampe aus.", correct: "Du machst die Lampe aus." },
        { hint: "Er bringt die Flaschen mit.", correct: "Er bringt die Flaschen mit." },
        { hint: "Wir fangen den Vortrag an.", correct: "Wir fangen den Vortrag an." },
        { hint: "Ihr seht gemeinsam fern.", correct: "Ihr seht gemeinsam fern." },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - Trennbare Verben</h1>
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