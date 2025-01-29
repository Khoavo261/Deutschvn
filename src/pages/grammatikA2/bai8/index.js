import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Điền từ phù hợp với 'Es gibt...'
  {
    type: "cloze",
    sentences: [
      { text: ["In meiner Stadt ", " es viele Parks."], gaps: ["gibt"] },
      { text: ["Auf dem Tisch ", " es ein Buch."], gaps: ["gibt"] },
      { text: ["In diesem Supermarkt ", " es frisches Gemüse."], gaps: ["gibt"] },
      { text: ["In Deutschland ", " es viele Sehenswürdigkeiten."], gaps: ["gibt"] },
      { text: ["In meinem Haus ", " es drei Zimmer."], gaps: ["gibt"] },
    ]
  },
  // Bài tập 2: Hoàn thành câu với 'Man'
  {
    type: "cloze",
    sentences: [
      { text: ["", " kann hier Deutsch lernen."], gaps: ["Man"] },
      { text: ["In der Schule ", " man viel schreiben."], gaps: ["schreibt"] },
      { text: ["In Deutschland ", " man viel Brot."], gaps: ["isst"] },
      { text: ["", " darf nicht auf der Straße rauchen."], gaps: ["Man"] },
      { text: ["In diesem Restaurant ", " man sehr gut essen."], gaps: ["kann"] },
    ]
  },
  // Bài tập 3: Hoàn thành câu với 'Es ist...'
  {
    type: "cloze",
    sentences: [
      { text: ["", " kalt draußen."], gaps: ["Es ist"] },
      { text: ["", " schwer, eine neue Sprache zu lernen."], gaps: ["Es ist"] },
      { text: ["", " schön, im Sommer zu reisen."], gaps: ["Es ist"] },
      { text: ["", " wichtig, gesund zu essen."], gaps: ["Es ist"] },
      { text: ["", " interessant, neue Leute kennenzulernen."], gaps: ["Es ist"] },
    ]
  },
  // Bài tập 4: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe keine Zeit, meine Hausaufgaben ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Es ist schwierig, Deutsch ", " (sprechen)."], gaps: ["zu sprechen"] },
      { text: ["Wir haben Lust, ins Kino ", " (gehen)."], gaps: ["zu gehen"] },
      { text: ["Er versucht, weniger Kaffee ", " (trinken)."], gaps: ["zu trinken"] },
      { text: ["Sie hat Angst, mit Fremden ", " (sprechen)."], gaps: ["zu sprechen"] },
    ]
  },
  // Bài tập 5: Điền động từ khuyết thiếu phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " (können) gut schwimmen."], gaps: ["kann"] },
      { text: ["Du ", " (dürfen) hier nicht rauchen."], gaps: ["darfst"] },
      { text: ["Er ", " (müssen) jeden Tag arbeiten."], gaps: ["muss"] },
      { text: ["Wir ", " (sollen) mehr lernen."], gaps: ["sollen"] },
      { text: ["Ihr ", " (wollen) ins Kino gehen."], gaps: ["wollt"] },
    ]
  },
  // Bài tập 6: Điền đại từ phản thân phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich wasche ", " jeden Morgen."], gaps: ["mich"] },
      { text: ["Du interessierst ", " für Musik."], gaps: ["dich"] },
      { text: ["Er freut ", " auf den Urlaub."], gaps: ["sich"] },
      { text: ["Wir treffen ", " im Park."], gaps: ["uns"] },
      { text: ["Ihr ärgert ", " über den Verkehr."], gaps: ["euch"] },
    ]
  },
  // Bài tập 7: Điền 'zu Hause' hoặc 'nach Hause'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich bin heute den ganzen Tag ", "."], gaps: ["zu Hause"] },
      { text: ["Er kommt um 18 Uhr ", "."], gaps: ["nach Hause"] },
      { text: ["Sie bleibt lieber ", "."], gaps: ["zu Hause"] },
      { text: ["Wann gehst du ", "?"], gaps: ["nach Hause"] },
      { text: ["Wir fahren jetzt ", "."], gaps: ["nach Hause"] },
    ]
  },
  // Bài tập 8: Hoàn thành câu với 'weil + Nebensatz'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ins Bett, ", " ich müde bin."], gaps: ["weil"] },
      { text: ["Er lernt viel, ", " er die Prüfung bestehen will."], gaps: ["weil"] },
      { text: ["Wir bleiben zu Hause, ", " es regnet."], gaps: ["weil"] },
      { text: ["Sie ist glücklich, ", " sie eine gute Note bekommen hat."], gaps: ["weil"] },
      { text: ["Ich esse gesund, ", " ich fit bleiben möchte."], gaps: ["weil"] },
    ]
  },
  // Bài tập 9: Hoàn thành câu với 'Es gibt...'
  {
    type: "cloze",
    sentences: [
      { text: ["In meiner Stadt ", " es viele Parks."], gaps: ["gibt"] },
      { text: ["Auf dem Tisch ", " es ein Buch."], gaps: ["gibt"] },
      { text: ["In diesem Supermarkt ", " es frisches Gemüse."], gaps: ["gibt"] },
      { text: ["In Deutschland ", " es viele Sehenswürdigkeiten."], gaps: ["gibt"] },
      { text: ["In meinem Haus ", " es drei Zimmer."], gaps: ["gibt"] },
    ]
  },
  // Bài tập 10: Hoàn thành câu với 'Man'
  {
    type: "cloze",
    sentences: [
      { text: ["", " kann hier Deutsch lernen."], gaps: ["Man"] },
      { text: ["In der Schule ", " man viel schreiben."], gaps: ["schreibt"] },
      { text: ["In Deutschland ", " man viel Brot."], gaps: ["isst"] },
      { text: ["", " darf nicht auf der Straße rauchen."], gaps: ["Man"] },
      { text: ["In diesem Restaurant ", " man sehr gut essen."], gaps: ["kann"] },
    ]
  },
  // Bài tập 11: Hoàn thành câu với 'Es ist...'
  {
    type: "cloze",
    sentences: [
      { text: ["", " möglich, hier zu parken."], gaps: ["Es ist"] },
      { text: ["", " erlaubt, das Museum zu betreten."], gaps: ["Es ist"] },
      { text: ["", " besser, früh aufzustehen."], gaps: ["Es ist"] },
      { text: ["", " notwendig, die Hausaufgaben zu machen."], gaps: ["Es ist"] },
      { text: ["", " gefährlich, bei Rot über die Straße zu gehen."], gaps: ["Es ist"] },
    ]
  },
  // Bài tập 12: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich versuche, meine Hausaufgaben ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Er plant, nächstes Jahr nach Deutschland ", " (reisen)."], gaps: ["zu reisen"] },
      { text: ["Wir hoffen, die Prüfung ", " (bestehen)."], gaps: ["zu bestehen"] },
      { text: ["Sie hat Angst, alleine ", " (bleiben)."], gaps: ["zu bleiben"] },
      { text: ["Ich habe die Absicht, mehr Sport ", " (treiben)."], gaps: ["zu treiben"] },
    ]
  },
  // Bài tập 13: Hoàn thành câu với Modalverben
  {
    type: "cloze",
    sentences: [
      { text: ["Ich ", " (dürfen) hier nicht rauchen."], gaps: ["darf"] },
      { text: ["Du ", " (können) sehr gut singen."], gaps: ["kannst"] },
      { text: ["Er ", " (müssen) jeden Tag arbeiten."], gaps: ["muss"] },
      { text: ["Wir ", " (sollen) pünktlich sein."], gaps: ["sollen"] },
      { text: ["Ihr ", " (wollen) heute ins Kino gehen."], gaps: ["wollt"] },
    ]
  },
  // Bài tập 14: Hoàn thành câu với Reflexivpronomen
  {
    type: "cloze",
    sentences: [
      { text: ["Ich freue ", " auf den Urlaub."], gaps: ["mich"] },
      { text: ["Du interessierst ", " für Musik."], gaps: ["dich"] },
      { text: ["Er ärgert ", " über den Stau."], gaps: ["sich"] },
      { text: ["Wir treffen ", " um 18 Uhr."], gaps: ["uns"] },
      { text: ["Ihr erinnert ", " an eure Kindheit."], gaps: ["euch"] },
    ]
  },
  // Bài tập 15: Hoàn thành câu với 'zu Hause' oder 'nach Hause'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich bin heute den ganzen Tag ", "."], gaps: ["zu Hause"] },
      { text: ["Er geht um 18 Uhr ", "."], gaps: ["nach Hause"] },
      { text: ["Sie bleibt lieber ", "."], gaps: ["zu Hause"] },
      { text: ["Wann kommst du ", "?"], gaps: ["nach Hause"] },
      { text: ["Wir fahren jetzt ", "."], gaps: ["nach Hause"] },
    ]
  }
];
const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Wichtige Strukturen (A2)</h1>
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
