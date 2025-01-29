import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Điền giới từ thời gian (Präpositionen der Zeit)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Seit/Vor) zwei Jahren wohne ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Wir treffen uns ", " (um/am) 18 Uhr."], gaps: ["um"] },
      { text: ["", " (Nach/Vor) dem Mittagessen machen wir eine Pause."], gaps: ["Nach"] },
      { text: ["Ich bin ", " (in/an) meinem Geburtstag immer zu Hause."], gaps: ["an"] },
      { text: ["", " (Bis/Ab) morgen bin ich nicht erreichbar."], gaps: ["Bis"] },
    ]
  },
  // Bài tập 2: Điền giới từ địa điểm (Präpositionen des Ortes)
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch liegt ", " (auf/in) dem Tisch."], gaps: ["auf"] },
      { text: ["Ich gehe ", " (in/zu) die Schule."], gaps: ["in"] },
      { text: ["Wir wohnen ", " (bei/mit) unseren Eltern."], gaps: ["bei"] },
      { text: ["Er fährt ", " (nach/zu) Berlin."], gaps: ["nach"] },
      { text: ["Sie steht ", " (vor/hinter) der Tür."], gaps: ["vor"] },
    ]
  },
  // Bài tập 3: Chọn giới từ phù hợp với cách Dativ hoặc Akkusativ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " (in/auf) die Stadt."], gaps: ["in"] },
      { text: ["Das Bild hängt ", " (an/neben) der Wand."], gaps: ["an"] },
      { text: ["Er setzt sich ", " (auf/in) den Stuhl."], gaps: ["auf"] },
      { text: ["Der Tisch steht ", " (zwischen/hinter) den Stühlen."], gaps: ["zwischen"] },
      { text: ["Wir fahren ", " (über/durch) die Brücke."], gaps: ["über"] },
    ]
  },
  // Bài tập 4: Chọn giới từ phù hợp với động từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " (auf/an) den Bus."], gaps: ["auf"] },
      { text: ["Sie interessiert sich ", " (für/über) Musik."], gaps: ["für"] },
      { text: ["Wir sprechen ", " (mit/über) das Wetter."], gaps: ["über"] },
      { text: ["Er denkt oft ", " (an/über) seine Kindheit."], gaps: ["an"] },
      { text: ["Ich freue mich ", " (auf/über) deinen Besuch."], gaps: ["auf"] },
    ]
  },
  // Bài tập 5: Điền giới từ thời gian (Präpositionen der Zeit)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Seit/Vor) zwei Jahren wohne ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Wir treffen uns ", " (um/am) 18 Uhr."], gaps: ["um"] },
      { text: ["", " (Nach/Vor) dem Mittagessen machen wir eine Pause."], gaps: ["Nach"] },
      { text: ["Ich bin ", " (in/an) meinem Geburtstag immer zu Hause."], gaps: ["an"] },
      { text: ["", " (Bis/Ab) morgen bin ich nicht erreichbar."], gaps: ["Bis"] },
    ]
  },
  // Bài tập 6: Điền giới từ địa điểm (Präpositionen des Ortes)
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch liegt ", " (auf/in) dem Tisch."], gaps: ["auf"] },
      { text: ["Ich gehe ", " (in/zu) die Schule."], gaps: ["in"] },
      { text: ["Wir wohnen ", " (bei/mit) unseren Eltern."], gaps: ["bei"] },
      { text: ["Er fährt ", " (nach/zu) Berlin."], gaps: ["nach"] },
      { text: ["Sie steht ", " (vor/hinter) der Tür."], gaps: ["vor"] },
    ]
  },
  // Bài tập 7: Chọn giới từ phù hợp với cách Dativ hoặc Akkusativ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " (in/auf) die Stadt."], gaps: ["in"] },
      { text: ["Das Bild hängt ", " (an/neben) der Wand."], gaps: ["an"] },
      { text: ["Er setzt sich ", " (auf/in) den Stuhl."], gaps: ["auf"] },
      { text: ["Der Tisch steht ", " (zwischen/hinter) den Stühlen."], gaps: ["zwischen"] },
      { text: ["Wir fahren ", " (über/durch) die Brücke."], gaps: ["über"] },
    ]
  },
  // Bài tập 8: Chọn giới từ phù hợp với động từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " (auf/an) den Bus."], gaps: ["auf"] },
      { text: ["Sie interessiert sich ", " (für/über) Musik."], gaps: ["für"] },
      { text: ["Wir sprechen ", " (mit/über) das Wetter."], gaps: ["über"] },
      { text: ["Er denkt oft ", " (an/über) seine Kindheit."], gaps: ["an"] },
      { text: ["Ich freue mich ", " (auf/über) deinen Besuch."], gaps: ["auf"] },
    ]
  },
  // Bài tập 9: Điền giới từ thời gian (Präpositionen der Zeit)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Seit/Vor) zwei Jahren wohne ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Wir treffen uns ", " (um/am) 18 Uhr."], gaps: ["um"] },
      { text: ["", " (Nach/Vor) dem Mittagessen machen wir eine Pause."], gaps: ["Nach"] },
      { text: ["Ich bin ", " (in/an) meinem Geburtstag immer zu Hause."], gaps: ["an"] },
      { text: ["", " (Bis/Ab) morgen bin ich nicht erreichbar."], gaps: ["Bis"] },
    ]
  },
  // Bài tập 10: Điền giới từ địa điểm (Präpositionen des Ortes)
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch liegt ", " (auf/in) dem Tisch."], gaps: ["auf"] },
      { text: ["Ich gehe ", " (in/zu) die Schule."], gaps: ["in"] },
      { text: ["Wir wohnen ", " (bei/mit) unseren Eltern."], gaps: ["bei"] },
      { text: ["Er fährt ", " (nach/zu) Berlin."], gaps: ["nach"] },
      { text: ["Sie steht ", " (vor/hinter) der Tür."], gaps: ["vor"] },
    ]
  },
  // Bài tập 11: Chọn giới từ phù hợp với cách Dativ hoặc Akkusativ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " (in/auf) die Stadt."], gaps: ["in"] },
      { text: ["Das Bild hängt ", " (an/neben) der Wand."], gaps: ["an"] },
      { text: ["Er setzt sich ", " (auf/in) den Stuhl."], gaps: ["auf"] },
      { text: ["Der Tisch steht ", " (zwischen/hinter) den Stühlen."], gaps: ["zwischen"] },
      { text: ["Wir fahren ", " (über/durch) die Brücke."], gaps: ["über"] },
    ]
  },
  // Bài tập 12: Chọn giới từ phù hợp với động từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " (auf/an) den Bus."], gaps: ["auf"] },
      { text: ["Sie interessiert sich ", " (für/über) Musik."], gaps: ["für"] },
      { text: ["Wir sprechen ", " (mit/über) das Wetter."], gaps: ["über"] },
      { text: ["Er denkt oft ", " (an/über) seine Kindheit."], gaps: ["an"] },
      { text: ["Ich freue mich ", " (auf/über) deinen Besuch."], gaps: ["auf"] },
    ]
  },
  // Bài tập 13: Điền giới từ thời gian (Präpositionen der Zeit)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Seit/Vor) zwei Jahren wohne ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Wir treffen uns ", " (um/am) 18 Uhr."], gaps: ["um"] },
      { text: ["", " (Nach/Vor) dem Mittagessen machen wir eine Pause."], gaps: ["Nach"] },
      { text: ["Ich bin ", " (in/an) meinem Geburtstag immer zu Hause."], gaps: ["an"] },
      { text: ["", " (Bis/Ab) morgen bin ich nicht erreichbar."], gaps: ["Bis"] },
    ]
  },
  // Bài tập 14: Điền giới từ địa điểm (Präpositionen des Ortes)
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch liegt ", " (auf/in) dem Tisch."], gaps: ["auf"] },
      { text: ["Ich gehe ", " (in/zu) die Schule."], gaps: ["in"] },
      { text: ["Wir wohnen ", " (bei/mit) unseren Eltern."], gaps: ["bei"] },
      { text: ["Er fährt ", " (nach/zu) Berlin."], gaps: ["nach"] },
      { text: ["Sie steht ", " (vor/hinter) der Tür."], gaps: ["vor"] },
    ]
  },
  // Bài tập 15: Chọn giới từ phù hợp với cách Dativ oder Akkusativ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " (in/auf) die Stadt."], gaps: ["in"] },
      { text: ["Das Bild hängt ", " (an/neben) der Wand."], gaps: ["an"] },
      { text: ["Er setzt sich ", " (auf/in) den Stuhl."], gaps: ["auf"] },
      { text: ["Der Tisch steht ", " (zwischen/hinter) den Stühlen."], gaps: ["zwischen"] },
      { text: ["Wir fahren ", " (über/durch) die Brücke."], gaps: ["über"] },
    ]
  },
  // Bài tập 16: Chọn giới từ phù hợp với động từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " (auf/an) den Bus."], gaps: ["auf"] },
      { text: ["Sie interessiert sich ", " (für/über) Musik."], gaps: ["für"] },
      { text: ["Wir sprechen ", " (mit/über) das Wetter."], gaps: ["über"] },
      { text: ["Er denkt oft ", " (an/über) seine Kindheit."], gaps: ["an"] },
      { text: ["Ich freue mich ", " (auf/über) deinen Besuch."], gaps: ["auf"] },
    ]
  },
  // Bài tập 17: Điền giới từ thời gian (Präpositionen der Zeit)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Seit/Vor) zwei Jahren wohne ich in Deutschland."], gaps: ["Seit"] },
      { text: ["Wir treffen uns ", " (um/am) 18 Uhr."], gaps: ["um"] },
      { text: ["", " (Nach/Vor) dem Mittagessen machen wir eine Pause."], gaps: ["Nach"] },
      { text: ["Ich bin ", " (in/an) meinem Geburtstag immer zu Hause."], gaps: ["an"] },
      { text: ["", " (Bis/Ab) morgen bin ich nicht erreichbar."], gaps: ["Bis"] },
    ]
  },
  // Bài tập 18: Điền giới từ địa điểm (Präpositionen des Ortes)
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch liegt ", " (auf/in) dem Tisch."], gaps: ["auf"] },
      { text: ["Ich gehe ", " (in/zu) die Schule."], gaps: ["in"] },
      { text: ["Wir wohnen ", " (bei/mit) unseren Eltern."], gaps: ["bei"] },
      { text: ["Er fährt ", " (nach/zu) Berlin."], gaps: ["nach"] },
      { text: ["Sie steht ", " (vor/hinter) der Tür."], gaps: ["vor"] },
    ]
  },
  // Bài tập 19: Chọn giới từ phù hợp với cách Dativ oder Akkusativ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich gehe ", " (in/auf) die Stadt."], gaps: ["in"] },
      { text: ["Das Bild hängt ", " (an/neben) der Wand."], gaps: ["an"] },
      { text: ["Er setzt sich ", " (auf/in) den Stuhl."], gaps: ["auf"] },
      { text: ["Der Tisch steht ", " (zwischen/hinter) den Stühlen."], gaps: ["zwischen"] },
      { text: ["Wir fahren ", " (über/durch) die Brücke."], gaps: ["über"] },
    ]
  },
  // Bài tập 20: Chọn giới từ phù hợp với động từ
  {
    type: "cloze",
    sentences: [
      { text: ["Ich warte ", " (auf/an) den Bus."], gaps: ["auf"] },
      { text: ["Sie interessiert sich ", " (für/über) Musik."], gaps: ["für"] },
      { text: ["Wir sprechen ", " (mit/über) das Wetter."], gaps: ["über"] },
      { text: ["Er denkt oft ", " (an/über) seine Kindheit."], gaps: ["an"] },
      { text: ["Ich freue mich ", " (auf/über) deinen Besuch."], gaps: ["auf"] },
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Präpositionen (A2)</h1>
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
