import React from "react";
import Layout from '@theme/Layout';
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1-10 already present
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
  // Exercise 11: Điền giới từ thời gian (mở rộng)
  {
    type: "cloze",
    sentences: [
      { text: ["", " 7 Uhr frühstücke ich."], gaps: ["Um"] },
      { text: ["Wir starten unser Projekt ", " nächsten Dienstag."], gaps: ["am"] },
      { text: ["Der Zug kommt ", " dem Mittagessen."], gaps: ["nach"] },
      { text: ["", " 2015 studiere ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Ich arbeite ", " 8 Uhr ", " 16 Uhr."], gaps: ["von", "bis"] },
    ],
  },
  // Exercise 12: Điền giới từ địa phương (mở rộng)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " die Bibliothek."], gaps: ["in"] },
      { text: ["Das Handy liegt ", " dem Sofa."], gaps: ["auf"] },
      { text: ["Die Bilder hängen ", " der Wand."], gaps: ["an"] },
      { text: ["Wir treffen uns ", " dem Eingang."], gaps: ["vor"] },
      { text: ["Der Schlüssel steckt ", " dem Schloss."], gaps: ["in"] },
    ],
  },
  // Exercise 13: Tổng hợp giới từ thời gian và địa phương
  {
    type: "cloze",
    sentences: [
      { text: ["", " 10 Uhr beginnt der Unterricht."], gaps: ["Um"] },
      { text: ["Ich habe einen Termin ", " Montagmorgen."], gaps: ["am"] },
      { text: ["Wir kommen ", " der Arbeit nach Hause."], gaps: ["nach"] },
      { text: ["", " einem Jahr habe ich meine Ausbildung beendet."], gaps: ["Vor"] },
      { text: ["Ich bleibe ", " der Pause ", " 5 Minuten."], gaps: ["während", "noch"] },
    ],
  },
  // Exercise 14: Hoàn thành giới từ nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["Das Auto steht ", " der Garage."], gaps: ["in"] },
      { text: ["Der Ball liegt ", " dem Tisch."], gaps: ["unter"] },
      { text: ["Das Poster hängt ", " der Tür."], gaps: ["an"] },
      { text: ["Wir warten ", " dem Bus."], gaps: ["auf"] },
      { text: ["Ich gehe ", " das Gebäude."], gaps: ["durch"] },
    ],
  },
  // Exercise 15: Điền giới từ kết hợp
  {
    type: "cloze",
    sentences: [
      { text: ["", " 6 Uhr klingelt der Wecker."], gaps: ["Um"] },
      { text: ["Die Uhr hängt ", " der Wand."], gaps: ["an"] },
      { text: ["Ich wohne ", " 2021 in dieser Stadt."], gaps: ["seit"] },
      { text: ["Wir fahren ", " den Tunnel."], gaps: ["durch"] },
      { text: ["Ich bin ", " der Meinung, dass das richtig ist."], gaps: ["von"] },
    ],
  },
  // Exercise 16: Giới từ chỉ phương hướng
  {
    type: "cloze",
    sentences: [
      { text: ["Wir gehen ", " die Straße."], gaps: ["über"] },
      { text: ["Das Flugzeug fliegt ", " die Stadt."], gaps: ["über"] },
      { text: ["Die Wanderer gehen ", " den Berg."], gaps: ["auf"] },
      { text: ["Wir schwimmen ", " den Fluss."], gaps: ["durch"] },
      { text: ["Das Auto fährt ", " die Brücke."], gaps: ["unter"] },
    ],
  },
  // Exercise 17: Hoàn thành câu với giới từ nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " den Briefträger."], gaps: ["auf"] },
      { text: ["Das Bild hängt ", " dem Regal."], gaps: ["über"] },
      { text: ["Er bleibt ", " seiner Meinung."], gaps: ["bei"] },
      { text: ["Wir fahren ", " das Dorf."], gaps: ["durch"] },
      { text: ["Das Kind spielt ", " dem Ball."], gaps: ["mit"] },
    ],
  },
  // Exercise 18: Tổng hợp giới từ nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["", " drei Wochen beginnt der Kurs."], gaps: ["In"] },
      { text: ["Die Katze sitzt ", " der Couch."], gaps: ["auf"] },
      { text: ["Wir treffen uns ", " dem Park."], gaps: ["in"] },
      { text: ["Ich gehe ", " die Straße."], gaps: ["über"] },
      { text: ["Das Buch liegt ", " dem Tisch."], gaps: ["auf"] },
    ],
  },
  // Exercise 19: Kết hợp câu với giới từ phức hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Das Auto fährt ", " die Brücke."], gaps: ["unter"] },
      { text: ["Ich bleibe ", " meinem Freund."], gaps: ["bei"] },
      { text: ["Er arbeitet ", " der Universität."], gaps: ["an"] },
      { text: ["Die Touristen gehen ", " den Markt."], gaps: ["durch"] },
      { text: ["Wir reisen ", " den Ferien."], gaps: ["in"] },
    ],
  },
  // Exercise 20: Viết lại câu với giới từ nâng cao
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich gehe in den Park.", correct: "Ich gehe in den Park." },
      { hint: "Das Buch liegt auf dem Tisch.", correct: "Das Buch liegt auf dem Tisch." },
      { hint: "Die Lampe hängt über dem Sofa.", correct: "Die Lampe hängt über dem Sofa." },
      { hint: "Wir treffen uns vor dem Kino.", correct: "Wir treffen uns vor dem Kino." },
      { hint: "Der Hund schläft im Garten.", correct: "Der Hund schläft im Garten." },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Präpositionen</h1>
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
