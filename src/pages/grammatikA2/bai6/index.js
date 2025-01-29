import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Điền dạng so sánh hơn (Komparativ) của tính từ
  {
    type: "cloze",
    sentences: [
      { text: ["Mein Auto ist ", " (schnell) als deins."], gaps: ["schneller"] },
      { text: ["Er ist ", " (groß) als sein Bruder."], gaps: ["größer"] },
      { text: ["Dieses Buch ist ", " (interessant) als das andere."], gaps: ["interessanter"] },
      { text: ["Der Film war ", " (spannend) als erwartet."], gaps: ["spannender"] },
      { text: ["Heute ist es ", " (kalt) als gestern."], gaps: ["kälter"] },
    ]
  },
  // Bài tập 2: Điền dạng so sánh nhất (Superlativ) của tính từ
  {
    type: "cloze",
    sentences: [
      { text: ["Das ist der ", " (schnell) Zug in Deutschland."], gaps: ["schnellste"] },
      { text: ["Sie ist die ", " (schön) Frau, die ich kenne."], gaps: ["schönste"] },
      { text: ["Dieses Restaurant ist das ", " (gut) in der Stadt."], gaps: ["beste"] },
      { text: ["Er ist der ", " (intelligent) Schüler der Klasse."], gaps: ["intelligenteste"] },
      { text: ["Heute ist der ", " (warm) Tag des Monats."], gaps: ["wärmste"] },
    ]
  },
  // Bài tập 3: Hoàn thành câu với Komparativ hoặc Superlativ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Meine Wohnung ist ", " (klein) als deine."], gaps: ["kleiner"] },
      { text: ["Dieses Auto ist das ", " (teuer), das ich je gesehen habe."], gaps: ["teuerste"] },
      { text: ["Er arbeitet ", " (hart) als seine Kollegen."], gaps: ["härter"] },
      { text: ["Diese Stadt ist ", " (groß) als meine Heimatstadt."], gaps: ["größer"] },
      { text: ["Der Mount Everest ist der ", " (hoch) Berg der Welt."], gaps: ["höchste"] },
    ]
  },
  // Bài tập 4: Điền dạng so sánh hơn (Komparativ) của tính từ
  {
    type: "cloze",
    sentences: [
      { text: ["Mein Haus ist ", " (groß) als deins."], gaps: ["größer"] },
      { text: ["Dieser Weg ist ", " (kurz) als der andere."], gaps: ["kürzer"] },
      { text: ["Diese Tasche ist ", " (schwer) als meine alte."], gaps: ["schwerer"] },
      { text: ["Das Wetter heute ist ", " (schlecht) als gestern."], gaps: ["schlechter"] },
      { text: ["Mein Hund ist ", " (freundlich) als deiner."], gaps: ["freundlicher"] },
    ]
  },
  // Bài tập 5: Điền dạng so sánh nhất (Superlativ) của tính từ
  {
    type: "cloze",
    sentences: [
      { text: ["Das ist das ", " (hoch) Gebäude in der Stadt."], gaps: ["höchste"] },
      { text: ["Sie hat die ", " (laut) Stimme in der Klasse."], gaps: ["lauteste"] },
      { text: ["Das ist der ", " (schwer) Test des Jahres."], gaps: ["schwerste"] },
      { text: ["Heute ist der ", " (kalt) Tag des Winters."], gaps: ["kälteste"] },
      { text: ["Er ist der ", " (freundlich) Mann, den ich kenne."], gaps: ["freundlichste"] },
    ]
  },
  // Bài tập 6: Hoàn thành câu với Komparativ hoặc Superlativ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Diese Straße ist ", " (lang) als die andere."], gaps: ["länger"] },
      { text: ["Das Buch war das ", " (interessant), das ich je gelesen habe."], gaps: ["interessanteste"] },
      { text: ["Mein Bruder ist ", " (jung) als ich."], gaps: ["jünger"] },
      { text: ["Dieses Restaurant ist das ", " (berühmt) in der Stadt."], gaps: ["berühmteste"] },
      { text: ["Die Prüfung war ", " (schwer) als ich erwartet habe."], gaps: ["schwerer"] },
    ]
  },
  // Bài tập 7: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Meine Schwester ist ", " (alt) als ich."], gaps: ["älter"] },
      { text: ["Das ist das ", " (bunt) Bild im Museum."], gaps: ["bunteste"] },
      { text: ["Dieser Berg ist ", " (steil) als der andere."], gaps: ["steiler"] },
      { text: ["Die Blume ist die ", " (schön) im Garten."], gaps: ["schönste"] },
      { text: ["Mein Fahrrad ist ", " (leicht) als deins."], gaps: ["leichter"] },
    ]
  },
  // Bài tập 8: Sử dụng Komparativ und Superlativ để hoàn thành câu
  {
    type: "cloze",
    sentences: [
      { text: ["Dieser Film ist ", " (lustig) als der andere."], gaps: ["lustiger"] },
      { text: ["Das ist das ", " (lang) Buch, das ich je gelesen habe."], gaps: ["längste"] },
      { text: ["Heute ist es ", " (warm) als gestern."], gaps: ["wärmer"] },
      { text: ["Dieser Test war ", " (einfach) als ich gedacht habe."], gaps: ["einfacher"] },
      { text: ["Das Gebäude ist das ", " (modern) in der Stadt."], gaps: ["modernste"] },
    ]
  },
  // Bài tập 9: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Diese Aufgabe ist ", " (kompliziert) als die vorherige."], gaps: ["komplizierter"] },
      { text: ["Das ist das ", " (leise) Zimmer im Haus."], gaps: ["leiseste"] },
      { text: ["Er rennt ", " (schnell) als sein Bruder."], gaps: ["schneller"] },
      { text: ["Die Stadt ist die ", " (groß) im Land."], gaps: ["größte"] },
      { text: ["Heute ist es ", " (heiß) als letzte Woche."], gaps: ["heißer"] },
    ]
  },
  // Bài tập 10: Sử dụng Komparativ und Superlativ để hoàn thành câu
  {
    type: "cloze",
    sentences: [
      { text: ["Dieser Kuchen ist ", " (süß) als der andere."], gaps: ["süßer"] },
      { text: ["Das ist das ", " (kühl) Zimmer im Gebäude."], gaps: ["kühlste"] },
      { text: ["Mein Handy ist ", " (neu) als deins."], gaps: ["neuer"] },
      { text: ["Das Wetter ist das ", " (schön) des Monats."], gaps: ["schönste"] },
      { text: ["Die Aufgabe war ", " (schwer) als gedacht."], gaps: ["schwerer"] },
    ]
  },
  // Bài tập 11: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieses Hotel ist ", " (komfortabel) als das andere."], gaps: ["komfortabler"] },
      { text: ["Das ist das ", " (groß) Einkaufszentrum der Stadt."], gaps: ["größte"] },
      { text: ["Dieser Park ist ", " (schön) als der nebenan."], gaps: ["schöner"] },
      { text: ["Diese Aufgabe ist die ", " (kompliziert) der Prüfung."], gaps: ["komplizierteste"] },
      { text: ["Mein Hund ist ", " (verspielt) als deiner."], gaps: ["verspielter"] },
    ]
  },
  // Bài tập 12: Sử dụng Komparativ und Superlativ để hoàn thành câu
  {
    type: "cloze",
    sentences: [
      { text: ["Dieser Tisch ist ", " (stabil) als der alte."], gaps: ["stabiler"] },
      { text: ["Das ist das ", " (leise) Auto auf dem Markt."], gaps: ["leiseste"] },
      { text: ["Er arbeitet ", " (effizient) als sein Kollege."], gaps: ["effizienter"] },
      { text: ["Dieser Berg ist die ", " (hoch) in Europa."], gaps: ["höchste"] },
      { text: ["Das Wetter ist ", " (stürmisch) als gestern."], gaps: ["stürmischer"] },
    ]
  },
  // Bài tập 13: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieses Kleid ist ", " (modern) als das alte."], gaps: ["moderner"] },
      { text: ["Das ist das ", " (schnell) Flugzeug der Welt."], gaps: ["schnellste"] },
      { text: ["Dieser Kaffee ist ", " (stark) als der von gestern."], gaps: ["stärker"] },
      { text: ["Dieses Buch ist das ", " (interessant) der Reihe."], gaps: ["interessanteste"] },
      { text: ["Mein Laptop ist ", " (leicht) als deiner."], gaps: ["leichter"] },
    ]
  },
  // Bài tập 14: Sử dụng Komparativ und Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieser Sommer war ", " (heiß) als der vorherige."], gaps: ["heißer"] },
      { text: ["Das ist das ", " (teuer) Restaurant in der Stadt."], gaps: ["teuerste"] },
      { text: ["Diese Stadt ist ", " (lebendig) als mein Heimatort."], gaps: ["lebendiger"] },
      { text: ["Dieser Fluss ist der ", " (lang) in Deutschland."], gaps: ["längste"] },
      { text: ["Mein Fahrrad ist ", " (robust) als deins."], gaps: ["robuster"] },
    ]
  },
  // Bài tập 15: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Diese Prüfung war ", " (schwer) als erwartet."], gaps: ["schwerer"] },
      { text: ["Das ist das ", " (berühmt) Museum in Europa."], gaps: ["berühmteste"] },
      { text: ["Mein Auto ist ", " (sparsamer) als deins."], gaps: ["sparsamer"] },
      { text: ["Dieses Handy ist das ", " (innovativ) auf dem Markt."], gaps: ["innovativste"] },
      { text: ["Der Marathon war ", " (lang) als der Halbmarathon."], gaps: ["länger"] },
    ]
  },
  // Bài tập 16: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Diese Schuhe sind ", " (bequem) als meine alten."], gaps: ["bequemer"] },
      { text: ["Das ist das ", " (hoch) Gebäude in der Stadt."], gaps: ["höchste"] },
      { text: ["Diese Aufgabe ist ", " (leicht) als die vorige."], gaps: ["leichter"] },
      { text: ["Dieses Hotel ist das ", " (modern) in der Stadt."], gaps: ["modernste"] },
      { text: ["Der Test war ", " (einfach) als erwartet."], gaps: ["einfacher"] },
    ]
  },
  // Bài tập 17: Sử dụng Komparativ und Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Diese Straße ist ", " (breit) als die andere."], gaps: ["breiter"] },
      { text: ["Das ist das ", " (teuer) Auto auf dem Markt."], gaps: ["teuerste"] },
      { text: ["Diese Stadt ist ", " (alt) als meine Heimatstadt."], gaps: ["älter"] },
      { text: ["Dieser See ist der ", " (tief) in Deutschland."], gaps: ["tiefste"] },
      { text: ["Das Wetter heute ist ", " (warm) als gestern."], gaps: ["wärmer"] },
    ]
  },
  // Bài tập 18: Hoàn thành câu với Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieses Fahrrad ist ", " (schnell) als mein altes."], gaps: ["schneller"] },
      { text: ["Das ist das ", " (freundlich) Café in der Stadt."], gaps: ["freundlichste"] },
      { text: ["Dieser Rucksack ist ", " (leicht) als deiner."], gaps: ["leichter"] },
      { text: ["Dieser Sommer war der ", " (heiß) seit Jahren."], gaps: ["heißeste"] },
      { text: ["Mein Hund ist ", " (ruhig) als deiner."], gaps: ["ruhiger"] },
    ]
  },
  // Bài tập 19: Sử dụng Komparativ und Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieses Restaurant ist ", " (günstig) als das andere."], gaps: ["günstiger"] },
      { text: ["Das ist das ", " (groß) Stadion in Europa."], gaps: ["größte"] },
      { text: ["Diese Prüfung war ", " (schwer) als die letzte."], gaps: ["schwerer"] },
      { text: ["Dieser Film ist der ", " (spannend) des Jahres."], gaps: ["spannendste"] },
      { text: ["Meine Schwester ist ", " (jung) als ich."], gaps: ["jünger"] },
    ]
  },
  // Bài tập 20: Hoàn thành câu mit Komparativ oder Superlativ
  {
    type: "cloze",
    sentences: [
      { text: ["Dieser Laptop ist ", " (neu) als meiner."], gaps: ["neuer"] },
      { text: ["Das ist das ", " (komfortabel) Hotel der Stadt."], gaps: ["komfortabelste"] },
      { text: ["Dieser Fluss ist ", " (lang) als der in meiner Heimat."], gaps: ["länger"] },
      { text: ["Dieses Kleid ist das ", " (elegant) im Laden."], gaps: ["eleganteste"] },
      { text: ["Die Party gestern war ", " (lustig) als die letzte."], gaps: ["lustiger"] },
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Komparativ und Superlativ (A2)</h1>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>Bài {index + 1}</h2>
          {exercise.type === "cloze" && <ClozeTest sentences={exercise.sentences} />}
        </div>
      ))}
    </div>
  );
};

export default App;
