import React from "react";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe keine Zeit, meine Hausaufgaben ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Es ist schwer, Deutsch ", " (lernen)."], gaps: ["zu lernen"] },
      { text: ["Er versucht, weniger Kaffee ", " (trinken)."], gaps: ["zu trinken"] },
      { text: ["Wir haben Lust, ins Kino ", " (gehen)."], gaps: ["zu gehen"] },
      { text: ["Sie hat Angst, mit Fremden ", " (sprechen)."], gaps: ["zu sprechen"] },
    ]
  },
  // Bài tập 2: Hoàn thành câu với 'um ... zu'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " in Deutschland zu arbeiten."], gaps: ["um"] },
      { text: ["Er geht ins Fitnessstudio, ", " fit zu bleiben."], gaps: ["um"] },
      { text: ["Sie fährt nach Berlin, ", " ihre Freunde zu besuchen."], gaps: ["um"] },
      { text: ["Wir sparen Geld, ", " ein Haus zu kaufen."], gaps: ["um"] },
      { text: ["Ich esse viel Gemüse, ", " gesund zu bleiben."], gaps: ["um"] },
    ]
  },
  // Bài tập 3: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lerne Deutsch. Ich will in Deutschland arbeiten.", correct: "Ich lerne Deutsch, um in Deutschland zu arbeiten." },
      { hint: "Er geht ins Fitnessstudio. Er will fit bleiben.", correct: "Er geht ins Fitnessstudio, um fit zu bleiben." },
      { hint: "Sie fährt nach Berlin. Sie möchte ihre Freunde besuchen.", correct: "Sie fährt nach Berlin, um ihre Freunde zu besuchen." },
      { hint: "Wir sparen Geld. Wir möchten ein Haus kaufen.", correct: "Wir sparen Geld, um ein Haus zu kaufen." },
      { hint: "Ich esse viel Gemüse. Ich möchte gesund bleiben.", correct: "Ich esse viel Gemüse, um gesund zu bleiben." }
    ]
  },
  // Bài tập 4: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe keine Lust, früh ", " (aufstehen)."], gaps: ["aufzustehen"] },
      { text: ["Es ist wichtig, jeden Tag Sport ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Er versucht, weniger Süßigkeiten ", " (essen)."], gaps: ["zu essen"] },
      { text: ["Wir haben vor, im Sommer ", " (reisen)."], gaps: ["zu reisen"] },
      { text: ["Sie hat Angst, vor vielen Leuten ", " (sprechen)."], gaps: ["zu sprechen"] },
    ]
  },
  // Bài tập 5: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich fahre nach München. Ich möchte dort studieren.", correct: "Ich fahre nach München, um dort zu studieren." },
      { hint: "Er spart Geld. Er will ein neues Auto kaufen.", correct: "Er spart Geld, um ein neues Auto zu kaufen." },
      { hint: "Sie arbeitet viel. Sie möchte mehr Erfahrung sammeln.", correct: "Sie arbeitet viel, um mehr Erfahrung zu sammeln." },
      { hint: "Wir lernen fleißig. Wir möchten die Prüfung bestehen.", correct: "Wir lernen fleißig, um die Prüfung zu bestehen." },
      { hint: "Ich esse gesund. Ich will mich fit fühlen.", correct: "Ich esse gesund, um mich fit zu fühlen." }
    ]
  },
  // Bài tập 6: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe vor, morgen früh ", " (aufstehen)."], gaps: ["aufzustehen"] },
      { text: ["Es ist wichtig, regelmäßig ", " (trainieren)."], gaps: ["zu trainieren"] },
      { text: ["Er versucht, weniger Fleisch ", " (essen)."], gaps: ["zu essen"] },
      { text: ["Wir haben beschlossen, in die Berge ", " (fahren)."], gaps: ["zu fahren"] },
      { text: ["Sie hat keine Lust, lange ", " (warten)."], gaps: ["zu warten"] },
    ]
  },
  // Bài tập 7: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich kaufe ein Wörterbuch. Ich will mein Deutsch verbessern.", correct: "Ich kaufe ein Wörterbuch, um mein Deutsch zu verbessern." },
      { hint: "Er nimmt einen Kurs. Er möchte besser programmieren lernen.", correct: "Er nimmt einen Kurs, um besser programmieren zu lernen." },
      { hint: "Sie fährt nach Italien. Sie möchte die Sprache üben.", correct: "Sie fährt nach Italien, um die Sprache zu üben." },
      { hint: "Wir arbeiten zusammen. Wir wollen das Projekt schneller abschließen.", correct: "Wir arbeiten zusammen, um das Projekt schneller abzuschließen." },
      { hint: "Ich stehe früh auf. Ich will produktiver sein.", correct: "Ich stehe früh auf, um produktiver zu sein." }
    ]
  },
  // Bài tập 8: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe Lust, am Wochenende ", " (wandern)."], gaps: ["zu wandern"] },
      { text: ["Es ist gesund, viel Wasser ", " (trinken)."], gaps: ["zu trinken"] },
      { text: ["Er plant, eine neue Sprache ", " (lernen)."], gaps: ["zu lernen"] },
      { text: ["Wir versuchen, mehr Zeit mit der Familie ", " (verbringen)."], gaps: ["zu verbringen"] },
      { text: ["Sie hat keine Zeit, heute Abend ", " (kochen)."], gaps: ["zu kochen"] },
    ]
  },
  // Bài tập 9: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich mache Yoga. Ich will mich entspannen.", correct: "Ich mache Yoga, um mich zu entspannen." },
      { hint: "Er trainiert viel. Er möchte fit bleiben.", correct: "Er trainiert viel, um fit zu bleiben." },
      { hint: "Sie kauft ein Geschenk. Sie möchte ihre Freundin überraschen.", correct: "Sie kauft ein Geschenk, um ihre Freundin zu überraschen." },
      { hint: "Wir fahren ans Meer. Wir wollen Urlaub machen.", correct: "Wir fahren ans Meer, um Urlaub zu machen." },
      { hint: "Ich lese viel. Ich möchte mein Wissen erweitern.", correct: "Ich lese viel, um mein Wissen zu erweitern." }
    ]
  },
  // Bài tập 10: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe keine Lust, jetzt ", " (aufstehen)."], gaps: ["aufzustehen"] },
      { text: ["Es ist wichtig, jeden Tag ", " (lernen)."], gaps: ["zu lernen"] },
      { text: ["Er versucht, weniger Zeit am Handy ", " (verbringen)."], gaps: ["zu verbringen"] },
      { text: ["Wir haben vor, ein neues Haus ", " (bauen)."], gaps: ["zu bauen"] },
      { text: ["Sie hat Angst, alleine ", " (reisen)."], gaps: ["zu reisen"] },
    ]
  },
  // Bài tập 11: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich nehme ein Taxi. Ich will pünktlich sein.", correct: "Ich nehme ein Taxi, um pünktlich zu sein." },
      { hint: "Er lernt fleißig. Er möchte die Prüfung bestehen.", correct: "Er lernt fleißig, um die Prüfung zu bestehen." },
      { hint: "Sie macht Yoga. Sie möchte sich entspannen.", correct: "Sie macht Yoga, um sich zu entspannen." },
      { hint: "Wir kaufen ein Haus. Wir wollen eine Familie gründen.", correct: "Wir kaufen ein Haus, um eine Familie zu gründen." },
      { hint: "Ich koche gesund. Ich möchte fit bleiben.", correct: "Ich koche gesund, um fit zu bleiben." }
    ]
  },
  // Bài tập 12: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe vor, mehr Zeit mit meiner Familie ", " (verbringen)."], gaps: ["zu verbringen"] },
      { text: ["Es ist wichtig, genug Wasser ", " (trinken)."], gaps: ["zu trinken"] },
      { text: ["Er versucht, jeden Tag früh ", " (aufstehen)."], gaps: ["aufzustehen"] },
      { text: ["Wir haben entschieden, im Sommer nach Spanien ", " (fliegen)."], gaps: ["zu fliegen"] },
      { text: ["Sie hat Angst, in der Öffentlichkeit ", " (sprechen)."], gaps: ["zu sprechen"] },
    ]
  },
  // Bài tập 13: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lese viele Bücher. Ich will mein Wissen erweitern.", correct: "Ich lese viele Bücher, um mein Wissen zu erweitern." },
      { hint: "Er fährt in die Stadt. Er möchte einkaufen.", correct: "Er fährt in die Stadt, um einzukaufen." },
      { hint: "Sie macht eine Diät. Sie will abnehmen.", correct: "Sie macht eine Diät, um abzunehmen." },
      { hint: "Wir arbeiten hart. Wir wollen erfolgreich sein.", correct: "Wir arbeiten hart, um erfolgreich zu sein." },
      { hint: "Ich lerne Deutsch. Ich möchte in Deutschland studieren.", correct: "Ich lerne Deutsch, um in Deutschland zu studieren." }
    ]
  },
  // Bài tập 14: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe die Absicht, ein neues Hobby ", " (finden)."], gaps: ["zu finden"] },
      { text: ["Es ist notwendig, regelmäßig Sport ", " (treiben)."], gaps: ["zu treiben"] },
      { text: ["Er versucht, sein Auto selbst ", " (reparieren)."], gaps: ["zu reparieren"] },
      { text: ["Wir planen, eine große Reise ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Sie hat keine Zeit, lange ", " (telefonieren)."], gaps: ["zu telefonieren"] },
    ]
  },
  // Bài tập 15: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich stehe früh auf. Ich will produktiver sein.", correct: "Ich stehe früh auf, um produktiver zu sein." },
      { hint: "Er spart Geld. Er möchte ein neues Fahrrad kaufen.", correct: "Er spart Geld, um ein neues Fahrrad zu kaufen." },
      { hint: "Sie besucht ihre Großeltern. Sie möchte ihnen helfen.", correct: "Sie besucht ihre Großeltern, um ihnen zu helfen." },
      { hint: "Wir fahren in die Natur. Wir wollen uns erholen.", correct: "Wir fahren in die Natur, um uns zu erholen." },
      { hint: "Ich koche heute Abend. Ich will meine Freunde überraschen.", correct: "Ich koche heute Abend, um meine Freunde zu überraschen." }
    ]
  },
  // Bài tập 16: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich nehme eine Jacke mit. Ich will nicht frieren.", correct: "Ich nehme eine Jacke mit, um nicht zu frieren." },
      { hint: "Er spart Geld. Er möchte eine neue Wohnung mieten.", correct: "Er spart Geld, um eine neue Wohnung zu mieten." },
      { hint: "Sie studiert Medizin. Sie möchte Ärztin werden.", correct: "Sie studiert Medizin, um Ärztin zu werden." },
      { hint: "Wir kaufen einen Laptop. Wir wollen besser arbeiten.", correct: "Wir kaufen einen Laptop, um besser zu arbeiten." },
      { hint: "Ich gehe joggen. Ich will gesund bleiben.", correct: "Ich gehe joggen, um gesund zu bleiben." }
    ]
  },
  // Bài tập 17: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe die Absicht, eine neue Sprache ", " (lernen)."], gaps: ["zu lernen"] },
      { text: ["Es ist notwendig, regelmäßig Sport ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Er versucht, sich besser auf Prüfungen ", " (vorbereiten)."], gaps: ["vorzubereiten"] },
      { text: ["Wir planen, in ein anderes Land ", " (ziehen)."], gaps: ["zu ziehen"] },
      { text: ["Sie hat keine Zeit, lange ", " (telefonieren)."], gaps: ["zu telefonieren"] },
    ]
  },
  // Bài tập 18: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich trinke viel Wasser. Ich will hydratisiert bleiben.", correct: "Ich trinke viel Wasser, um hydratisiert zu bleiben." },
      { hint: "Er besucht einen Kurs. Er möchte besser programmieren lernen.", correct: "Er besucht einen Kurs, um besser programmieren zu lernen." },
      { hint: "Sie spart Geld. Sie will eine Weltreise machen.", correct: "Sie spart Geld, um eine Weltreise zu machen." },
      { hint: "Wir renovieren unser Haus. Wir möchten es schöner machen.", correct: "Wir renovieren unser Haus, um es schöner zu machen." },
      { hint: "Ich lerne Gitarre. Ich möchte Musik spielen können.", correct: "Ich lerne Gitarre, um Musik spielen zu können." }
    ]
  },
  // Bài tập 19: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe die Möglichkeit, ein Stipendium ", " (bekommen)."], gaps: ["zu bekommen"] },
      { text: ["Es ist wichtig, jeden Tag pünktlich ", " (sein)."], gaps: ["zu sein"] },
      { text: ["Er versucht, früher ", " (schlafen)."], gaps: ["zu schlafen"] },
      { text: ["Wir haben entschieden, nachhaltiger ", " (leben)."], gaps: ["zu leben"] },
      { text: ["Sie plant, ein eigenes Geschäft ", " (eröffnen)."], gaps: ["zu eröffnen"] },
    ]
  },
  // Bài tập 20: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich wache früh auf. Ich will produktiver sein.", correct: "Ich wache früh auf, um produktiver zu sein." },
      { hint: "Er lernt eine neue Sprache. Er möchte in einem anderen Land arbeiten.", correct: "Er lernt eine neue Sprache, um in einem anderen Land zu arbeiten." },
      { hint: "Sie nimmt Klavierunterricht. Sie will ein Konzert spielen.", correct: "Sie nimmt Klavierunterricht, um ein Konzert zu spielen." },
      { hint: "Wir sparen Geld. Wir möchten eine größere Wohnung mieten.", correct: "Wir sparen Geld, um eine größere Wohnung zu mieten." },
      { hint: "Ich esse gesund. Ich will länger leben.", correct: "Ich esse gesund, um länger zu leben." }
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - 'um ... zu' & 'zu' (A2)</h1>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>Bài {index + 1}</h2>
          {exercise.type === "rewrite" && <RewriteTest sentences={exercise.sentences} />}
          {exercise.type === "cloze" && <ClozeTest sentences={exercise.sentences} />}
        </div>
      ))}
    </div>
  );
};

export default App;
