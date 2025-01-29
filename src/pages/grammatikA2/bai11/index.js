import React from "react";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Chuyển câu từ Präteritum sang Perfekt
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich las gestern ein Buch.", correct: "Ich habe gestern ein Buch gelesen." },
      { hint: "Er verpasste den Zug.", correct: "Er hat den Zug verpasst." },
      { hint: "Wir fuhren nach Berlin.", correct: "Wir sind nach Berlin gefahren." },
      { hint: "Sie telefonierte mit ihrer Freundin.", correct: "Sie hat mit ihrer Freundin telefoniert." },
      { hint: "Du backtest einen Kuchen.", correct: "Du hast einen Kuchen gebacken." }
    ]
  },
  // Bài tập 2: Chuyển câu từ Perfekt sang Präteritum
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich habe gestern ein Buch gelesen.", correct: "Ich las gestern ein Buch." },
      { hint: "Er hat den Zug verpasst.", correct: "Er verpasste den Zug." },
      { hint: "Wir sind nach Berlin gefahren.", correct: "Wir fuhren nach Berlin." },
      { hint: "Sie hat mit ihrer Freundin telefoniert.", correct: "Sie telefonierte mit ihrer Freundin." },
      { hint: "Du hast einen Kuchen gebacken.", correct: "Du backtest einen Kuchen." }
    ]
  },
  // Bài tập 3: Điền vào ô trống với Präteritum hoặc Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["Gestern ", " ich ein interessantes Buch."], gaps: ["las"] },
      { text: ["Er ", " seinen Flug."], gaps: ["verpasste"] },
      { text: ["Wir ", " letztes Wochenende nach München."], gaps: ["fuhren"] },
      { text: ["Sie ", " lange mit ihrem Freund."], gaps: ["telefonierte"] },
      { text: ["Ich ", " heute Morgen einen Kuchen."], gaps: ["backte"] }
    ]
  },
  // Bài tập 4: Điền vào ô trống với Präteritum hoặc Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["Letztes Jahr ", " ich eine lange Reise."], gaps: ["machte"] },
      { text: ["Wir ", " viele Fotos im Urlaub."], gaps: ["machten"] },
      { text: ["Er ", " eine schwierige Prüfung."], gaps: ["bestand"] },
      { text: ["Sie ", " viel für die Prüfung."], gaps: ["lernte"] },
      { text: ["Ich ", " gestern Abend einen Film."], gaps: ["sah"] }
    ]
  },
  // Bài tập 5: Chuyển câu từ Präteritum sang Perfekt
  {
    type: "rewrite",
    sentences: [
      { hint: "Er machte eine lange Reise.", correct: "Er hat eine lange Reise gemacht." },
      { hint: "Sie lernte für die Prüfung.", correct: "Sie hat für die Prüfung gelernt." },
      { hint: "Wir sahen einen interessanten Film.", correct: "Wir haben einen interessanten Film gesehen." },
      { hint: "Ich schrieb einen Brief.", correct: "Ich habe einen Brief geschrieben." },
      { hint: "Du hattest viel Spaß.", correct: "Du hast viel Spaß gehabt." }
    ]
  },
  // Bài tập 6: Chuyển câu từ Perfekt sang Präteritum
  {
    type: "rewrite",
    sentences: [
      { hint: "Er hat eine lange Reise gemacht.", correct: "Er machte eine lange Reise." },
      { hint: "Sie hat für die Prüfung gelernt.", correct: "Sie lernte für die Prüfung." },
      { hint: "Wir haben einen interessanten Film gesehen.", correct: "Wir sahen einen interessanten Film." },
      { hint: "Ich habe einen Brief geschrieben.", correct: "Ich schrieb einen Brief." },
      { hint: "Du hast viel Spaß gehabt.", correct: "Du hattest viel Spaß." }
    ]
  },
  // Bài tập 7: Điền vào ô trống với Präteritum hoặc Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["Letzte Woche ", " ich meine Großeltern."], gaps: ["besuchte"] },
      { text: ["Er ", " den ganzen Tag am Strand."], gaps: ["verbrachte"] },
      { text: ["Sie ", " mir eine Nachricht."], gaps: ["schickte"] },
      { text: ["Wir ", " eine Wanderung in den Bergen."], gaps: ["machten"] },
      { text: ["Ich ", " ein neues Buch."], gaps: ["las"] }
    ]
  },
  // Bài tập 8: Điền vào ô trống với Präteritum hoặc Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["Gestern ", " ich mein Zimmer auf."], gaps: ["räumte"] },
      { text: ["Er ", " eine wichtige E-Mail."], gaps: ["schrieb"] },
      { text: ["Wir ", " ein leckeres Abendessen."], gaps: ["kochten"] },
      { text: ["Sie ", " einen langen Spaziergang."], gaps: ["machte"] },
      { text: ["Ich ", " meine Freunde im Café."], gaps: ["traf"] }
    ]
  },
  // Bài tập 9: Chuyển câu từ Präteritum sang Perfekt
  {
    type: "rewrite",
    sentences: [
      { hint: "Sie besuchte ihre Eltern.", correct: "Sie hat ihre Eltern besucht." },
      { hint: "Er kaufte ein neues Auto.", correct: "Er hat ein neues Auto gekauft." },
      { hint: "Wir aßen ein Eis.", correct: "Wir haben ein Eis gegessen." },
      { hint: "Ich trank einen Kaffee.", correct: "Ich habe einen Kaffee getrunken." },
      { hint: "Du fandest eine schöne Wohnung.", correct: "Du hast eine schöne Wohnung gefunden." }
    ]
  },
  // Bài tập 10: Chuyển câu từ Perfekt sang Präteritum
  {
    type: "rewrite",
    sentences: [
      { hint: "Sie hat ihre Eltern besucht.", correct: "Sie besuchte ihre Eltern." },
      { hint: "Er hat ein neues Auto gekauft.", correct: "Er kaufte ein neues Auto." },
      { hint: "Wir haben ein Eis gegessen.", correct: "Wir aßen ein Eis." },
      { hint: "Ich habe einen Kaffee getrunken.", correct: "Ich trank einen Kaffee." },
      { hint: "Du hast eine schöne Wohnung gefunden.", correct: "Du fandest eine schöne Wohnung." }
    ]
  },
   // Bài tập 11: Chuyển câu sử dụng 'um ... zu'
   {
    type: "rewrite",
    sentences: [
      { hint: "Ich besuche meinen Onkel. Ich möchte ihm helfen.", correct: "Ich besuche meinen Onkel, um ihm zu helfen." },
      { hint: "Er spart Geld. Er möchte eine Weltreise machen.", correct: "Er spart Geld, um eine Weltreise zu machen." },
      { hint: "Sie trainiert jeden Tag. Sie will an einem Marathon teilnehmen.", correct: "Sie trainiert jeden Tag, um an einem Marathon teilzunehmen." },
      { hint: "Wir lernen fleißig. Wir möchten gute Noten bekommen.", correct: "Wir lernen fleißig, um gute Noten zu bekommen." },
      { hint: "Ich stehe früh auf. Ich möchte pünktlich sein.", correct: "Ich stehe früh auf, um pünktlich zu sein." }
    ]
  },
  // Bài tập 12: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe beschlossen, mehr Sport ", " (machen)."], gaps: ["zu machen"] },
      { text: ["Es ist wichtig, regelmäßig ", " (lesen)."], gaps: ["zu lesen"] },
      { text: ["Er versucht, weniger Zeit am Handy ", " (verbringen)."], gaps: ["zu verbringen"] },
      { text: ["Wir haben vor, im Sommer ", " (reisen)."], gaps: ["zu reisen"] },
      { text: ["Sie hat keine Lust, heute Abend ", " (kochen)."], gaps: ["zu kochen"] },
    ]
  },
  // Bài tập 13: Chuyển câu sử dụng 'um ... zu'
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
  // Bài tập 14: Hoàn thành câu với 'zu + Infinitiv'
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe keine Lust, jetzt ", " (aufstehen)."], gaps: ["aufzustehen"] },
      { text: ["Es ist wichtig, jeden Tag ", " (lernen)."], gaps: ["zu lernen"] },
      { text: ["Er versucht, weniger Süßigkeiten ", " (essen)."], gaps: ["zu essen"] },
      { text: ["Wir haben beschlossen, ein neues Haus ", " (bauen)."], gaps: ["zu bauen"] },
      { text: ["Sie hat Angst, alleine ", " (reisen)."], gaps: ["zu reisen"] },
    ]
  },
  // Bài tập 15: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich gehe früher ins Bett. Ich will ausgeruht sein.", correct: "Ich gehe früher ins Bett, um ausgeruht zu sein." },
      { hint: "Er fährt mit dem Fahrrad. Er möchte umweltfreundlich reisen.", correct: "Er fährt mit dem Fahrrad, um umweltfreundlich zu reisen." },
      { hint: "Sie nimmt einen Regenschirm mit. Sie möchte nicht nass werden.", correct: "Sie nimmt einen Regenschirm mit, um nicht nass zu werden." },
      { hint: "Wir sparen Geld. Wir wollen eine neue Wohnung kaufen.", correct: "Wir sparen Geld, um eine neue Wohnung zu kaufen." },
      { hint: "Ich esse gesund. Ich möchte mich fit fühlen.", correct: "Ich esse gesund, um mich fit zu fühlen." }
    ]
  },
  // Bài tập 16: Chuyển câu sử dụng 'um ... zu'
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
  // Bài tập 17: Hoàn thành câu với 'zu + Infinitiv'
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
  // Bài tập 18: Chuyển câu sử dụng 'um ... zu'
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
  // Bài tập 19: Hoàn thành câu với 'zu + Infinitiv'
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
  // Bài tập 20: Chuyển câu sử dụng 'um ... zu'
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich stehe früh auf. Ich will produktiver sein.", correct: "Ich stehe früh auf, um produktiver zu sein." },
      { hint: "Er spart Geld. Er möchte ein neues Fahrrad kaufen.", correct: "Er spart Geld, um ein neues Fahrrad zu kaufen." },
      { hint: "Sie besucht ihre Großeltern. Sie möchte ihnen helfen.", correct: "Sie besucht ihre Großeltern, um ihnen zu helfen." },
      { hint: "Wir fahren in die Natur. Wir wollen uns erholen.", correct: "Wir fahren in die Natur, um uns zu erholen." },
      { hint: "Ich koche heute Abend. Ich will meine Freunde überraschen.", correct: "Ich koche heute Abend, um meine Freunde zu überraschen." }
    ]
  }
];
const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Präteritum & Perfekt (A2)</h1>
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
