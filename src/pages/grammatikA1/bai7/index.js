import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Chuyển đổi câu sang câu mệnh lệnh
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst jetzt!", correct: "Komm jetzt!" },
      { hint: "Ihr arbeitet schneller!", correct: "Arbeitet schneller!" },
      { hint: "Sie schreiben den Brief!", correct: "Schreiben Sie den Brief!" },
      { hint: "Du machst die Tür zu!", correct: "Mach die Tür zu!" },
      { hint: "Ihr ruft eure Mutter an!", correct: "Ruft eure Mutter an!" },
    ],
  },
  // Exercise 2: Điền câu mệnh lệnh đúng
  {
    type: "cloze",
    sentences: [
      { text: ["", " hier!"], gaps: ["Komm"] },
      { text: ["", " mir!"], gaps: ["Helft"] },
      { text: ["", " das Buch!"], gaps: ["Lesen Sie"] },
      { text: ["", " einen Moment!"], gaps: ["Warte"] },
      { text: ["", " nach Hause!"], gaps: ["Geht"] },
    ],
  },
  // Exercise 3: Chuyển đổi câu (Lặp lại)
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst jetzt!", correct: "Komm jetzt!" },
      { hint: "Ihr arbeitet schneller!", correct: "Arbeitet schneller!" },
      { hint: "Sie schreiben den Brief!", correct: "Schreiben Sie den Brief!" },
      { hint: "Du machst die Tür zu!", correct: "Mach die Tür zu!" },
      { hint: "Ihr ruft eure Mutter an!", correct: "Ruft eure Mutter an!" },
    ],
  },
  // Exercise 4: Điền câu mệnh lệnh (Lặp lại)
  {
    type: "cloze",
    sentences: [
      { text: ["", " hier!"], gaps: ["Komm"] },
      { text: ["", " mir!"], gaps: ["Helft"] },
      { text: ["", " das Buch!"], gaps: ["Lesen Sie"] },
      { text: ["", " einen Moment!"], gaps: ["Warte"] },
      { text: ["", " nach Hause!"], gaps: ["Geht"] },
    ],
  },
  // Exercise 5: Chuyển đổi câu mệnh lệnh nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst hier!", correct: "Komm hier!" },
      { hint: "Ihr helft mir!", correct: "Helft mir!" },
      { hint: "Sie lesen das Buch!", correct: "Lesen Sie das Buch!" },
      { hint: "Du wartest einen Moment!", correct: "Warte einen Moment!" },
      { hint: "Ihr geht nach Hause!", correct: "Geht nach Hause!" },
    ],
  },
  // Exercise 6: Điền câu mệnh lệnh nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["", " jetzt!"], gaps: ["Komm"] },
      { text: ["", " schneller!"], gaps: ["Arbeitet"] },
      { text: ["", " den Brief!"], gaps: ["Schreiben Sie"] },
      { text: ["", " die Tür zu!"], gaps: ["Mach"] },
      { text: ["", " eure Mutter an!"], gaps: ["Ruft"] },
    ],
  },
  // Exercise 7: Tổng hợp câu mệnh lệnh cơ bản
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst jetzt!", correct: "Komm jetzt!" },
      { hint: "Ihr arbeitet schneller!", correct: "Arbeitet schneller!" },
      { hint: "Sie schreiben den Brief!", correct: "Schreiben Sie den Brief!" },
      { hint: "Du machst die Tür zu!", correct: "Mach die Tür zu!" },
      { hint: "Ihr ruft eure Mutter an!", correct: "Ruft eure Mutter an!" },
    ],
  },
  // Exercise 8: Tổng hợp câu mệnh lệnh nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst hier!", correct: "Komm hier!" },
      { hint: "Ihr helft mir!", correct: "Helft mir!" },
      { hint: "Sie lesen das Buch!", correct: "Lesen Sie das Buch!" },
      { hint: "Du wartest einen Moment!", correct: "Warte einen Moment!" },
      { hint: "Ihr geht nach Hause!", correct: "Geht nach Hause!" },
    ],
  },
  // Exercise 9: Hoàn thành câu tổng hợp mệnh lệnh
  {
    type: "cloze",
    sentences: [
      { text: ["", " die Tür zu!"], gaps: ["Mach"] },
      { text: ["", " jetzt!"], gaps: ["Komm"] },
      { text: ["", " mir!"], gaps: ["Helft"] },
      { text: ["", " nach Hause!"], gaps: ["Geht"] },
      { text: ["", " das Buch!"], gaps: ["Lesen Sie"] },
    ],
  },
  // Exercise 10: Viết lại câu mệnh lệnh tổng hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Du kommst jetzt!", correct: "Komm jetzt!" },
      { hint: "Ihr arbeitet schneller!", correct: "Arbeitet schneller!" },
      { hint: "Sie schreiben den Brief!", correct: "Schreiben Sie den Brief!" },
      { hint: "Du machst die Tür zu!", correct: "Mach die Tür zu!" },
      { hint: "Ihr ruft eure Mutter an!", correct: "Ruft eure Mutter an!" },
    ],
  },
    // Exercise 11: Chuyển đổi câu mệnh lệnh mở rộng
    {
      type: "rewrite",
      sentences: [
        { hint: "Du machst die Hausaufgaben!", correct: "Mach die Hausaufgaben!" },
        { hint: "Ihr lest die Zeitung!", correct: "Lest die Zeitung!" },
        { hint: "Sie gehen jetzt!", correct: "Gehen Sie jetzt!" },
        { hint: "Du hilfst mir!", correct: "Hilf mir!" },
        { hint: "Ihr wartet hier!", correct: "Wartet hier!" },
      ],
    },
    // Exercise 12: Điền câu mệnh lệnh mở rộng
    {
      type: "cloze",
      sentences: [
        { text: ["", " die Hausaufgaben!"], gaps: ["Mach"] },
        { text: ["", " die Zeitung!"], gaps: ["Lest"] },
        { text: ["", " jetzt!"], gaps: ["Gehen Sie"] },
        { text: ["", " mir!"], gaps: ["Hilf"] },
        { text: ["", " hier!"], gaps: ["Wartet"] },
      ],
    },
    // Exercise 13: Tổng hợp câu mệnh lệnh
    {
      type: "rewrite",
      sentences: [
        { hint: "Du stehst auf!", correct: "Steh auf!" },
        { hint: "Ihr spielt Fußball!", correct: "Spielt Fußball!" },
        { hint: "Sie schreiben den Brief!", correct: "Schreiben Sie den Brief!" },
        { hint: "Du machst die Tür zu!", correct: "Mach die Tür zu!" },
        { hint: "Ihr ruft die Polizei an!", correct: "Ruft die Polizei an!" },
      ],
    },
    // Exercise 14: Hoàn thành câu mệnh lệnh phức hợp
    {
      type: "cloze",
      sentences: [
        { text: ["", " die Tür zu!"], gaps: ["Mach"] },
        { text: ["", " Fußball!"], gaps: ["Spielt"] },
        { text: ["", " den Brief!"], gaps: ["Schreiben Sie"] },
        { text: ["", " die Polizei an!"], gaps: ["Ruft"] },
        { text: ["", " auf!"], gaps: ["Steh"] },
      ],
    },
    // Exercise 15: Câu mệnh lệnh với các tình huống cụ thể
    {
      type: "rewrite",
      sentences: [
        { hint: "Du gehst nach Hause!", correct: "Geh nach Hause!" },
        { hint: "Ihr kocht das Essen!", correct: "Kocht das Essen!" },
        { hint: "Sie warten hier!", correct: "Warten Sie hier!" },
        { hint: "Du öffnest die Tür!", correct: "Öffne die Tür!" },
        { hint: "Ihr putzt das Fenster!", correct: "Putzt das Fenster!" },
      ],
    },
    // Exercise 16: Điền câu mệnh lệnh với tình huống thực tế
    {
      type: "cloze",
      sentences: [
        { text: ["", " nach Hause!"], gaps: ["Geh"] },
        { text: ["", " das Essen!"], gaps: ["Kocht"] },
        { text: ["", " hier!"], gaps: ["Warten Sie"] },
        { text: ["", " die Tür!"], gaps: ["Öffne"] },
        { text: ["", " das Fenster!"], gaps: ["Putzt"] },
      ],
    },
    // Exercise 17: Luyện tập câu mệnh lệnh tổng hợp
    {
      type: "rewrite",
      sentences: [
        { hint: "Du liest das Buch!", correct: "Lies das Buch!" },
        { hint: "Ihr bleibt hier!", correct: "Bleibt hier!" },
        { hint: "Sie bringen den Schlüssel!", correct: "Bringen Sie den Schlüssel!" },
        { hint: "Du schließt das Fenster!", correct: "Schließ das Fenster!" },
        { hint: "Ihr wartet draußen!", correct: "Wartet draußen!" },
      ],
    },
    // Exercise 18: Điền câu mệnh lệnh tổng hợp
    {
      type: "cloze",
      sentences: [
        { text: ["", " das Buch!"], gaps: ["Lies"] },
        { text: ["", " hier!"], gaps: ["Bleibt"] },
        { text: ["", " den Schlüssel!"], gaps: ["Bringen Sie"] },
        { text: ["", " das Fenster!"], gaps: ["Schließ"] },
        { text: ["", " draußen!"], gaps: ["Wartet"] },
      ],
    },
    // Exercise 19: Hoàn thành câu mệnh lệnh với tình huống thực tế
    {
      type: "rewrite",
      sentences: [
        { hint: "Du siehst fern!", correct: "Sieh fern!" },
        { hint: "Ihr esst zu Abend!", correct: "Esst zu Abend!" },
        { hint: "Sie hören gut zu!", correct: "Hören Sie gut zu!" },
        { hint: "Du nimmst die Tasche!", correct: "Nimm die Tasche!" },
        { hint: "Ihr lacht laut!", correct: "Lacht laut!" },
      ],
    },
    // Exercise 20: Điền câu mệnh lệnh thực tế
    {
      type: "cloze",
      sentences: [
        { text: ["", " fern!"], gaps: ["Sieh"] },
        { text: ["", " zu Abend!"], gaps: ["Esst"] },
        { text: ["", " gut zu!"], gaps: ["Hören Sie"] },
        { text: ["", " die Tasche!"], gaps: ["Nimm"] },
        { text: ["", " laut!"], gaps: ["Lacht"] },
      ],
    },
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Bài Tập Tiếng Đức - Imperativ</h1>
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
  