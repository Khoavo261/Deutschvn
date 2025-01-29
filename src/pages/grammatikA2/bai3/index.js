import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(gehen) Ich ", " jeden Tag zur Schule."], gaps: ["gehe"] },
      { text: ["(haben) Sie ", " viele Bücher."], gaps: ["haben"] },
      { text: ["(sein) Wir ", " sehr müde."], gaps: ["sind"] },
      { text: ["(arbeiten) Mein Vater ", " in einer Firma."], gaps: ["arbeitet"] },
      { text: ["(kommen) Ihr ", " aus Frankreich."], gaps: ["kommt"] },
    ]
  },
  // Bài tập 2: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(sehen) Ich ", " einen schönen Film ", " ."], gaps: ["habe", "gesehen"] },
      { text: ["(machen) Er ", " seine Hausaufgaben ", " ."], gaps: ["hat", "gemacht"] },
      { text: ["(fahren) Wir ", " nach Hamburg ", " ."], gaps: ["sind", "gefahren"] },
      { text: ["(essen) Sie ", " ein leckeres Frühstück ", " ."], gaps: ["hat", "gegessen"] },
      { text: ["(lernen) Du ", " viel Deutsch ", " ."], gaps: ["hast", "gelernt"] },
    ]
  },
  // Bài tập 3: Chia động từ ở thì Präteritum
  {
    type: "cloze",
    sentences: [
      { text: ["(gehen) Ich ", " gestern in den Park."], gaps: ["ging"] },
      { text: ["(haben) Sie ", " früher viele Haustiere."], gaps: ["hatte"] },
      { text: ["(sein) Wir ", " letztes Jahr in Italien."], gaps: ["waren"] },
      { text: ["(arbeiten) Mein Vater ", " früher als Lehrer."], gaps: ["arbeitete"] },
      { text: ["(kommen) Ihr ", " spät nach Hause."], gaps: ["kamt"] },
    ]
  },
  // Bài tập 4: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(besuchen) Morgen ", " ich meine Freunde besuchen."], gaps: ["werde"] },
      { text: ["(arbeiten) Du ", " nächste Woche in Berlin arbeiten."], gaps: ["wirst"] },
      { text: ["(sein) Er ", " bald sehr glücklich sein."], gaps: ["wird"] },
      { text: ["(machen) Wir ", " am Wochenende eine Party machen."], gaps: ["werden"] },
      { text: ["(reisen) Ihr ", " im Sommer nach Spanien reisen."], gaps: ["werdet"] },
    ]
  },
  // Bài tập 5: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Ich ", " jeden Tag Deutsch."], gaps: ["lerne"] },
      { text: ["(trinken) Du ", " oft Kaffee."], gaps: ["trinkst"] },
      { text: ["(schlafen) Er ", " lange am Wochenende."], gaps: ["schläft"] },
      { text: ["(fahren) Wir ", " mit dem Fahrrad zur Arbeit."], gaps: ["fahren"] },
      { text: ["(sehen) Ihr ", " einen Film im Kino."], gaps: ["seht"] },
    ]
  },
  // Bài tập 6: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Ich ", " gestern viel Deutsch ", " ."], gaps: ["habe", "gelernt"] },
      { text: ["(trinken) Du ", " heute Morgen Kaffee ", " ."], gaps: ["hast", "getrunken"] },
      { text: ["(schlafen) Er ", " bis 10 Uhr ", " ."], gaps: ["hat", "geschlafen"] },
      { text: ["(fahren) Wir ", " nach Hamburg ", " ."], gaps: ["sind", "gefahren"] },
      { text: ["(sehen) Ihr ", " einen neuen Film ", " ."], gaps: ["habt", "gesehen"] },
    ]
  },
  // Bài tập 7: Chia động từ ở thì Präteritum
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Ich ", " früher jeden Tag Deutsch."], gaps: ["lernte"] },
      { text: ["(trinken) Du ", " früher viel Milch."], gaps: ["trankst"] },
      { text: ["(schlafen) Er ", " gestern lange."], gaps: ["schlief"] },
      { text: ["(fahren) Wir ", " mit dem Zug nach Berlin."], gaps: ["fuhren"] },
      { text: ["(sehen) Ihr ", " einen tollen Film."], gaps: ["saht"] },
    ]
  },
  // Bài tập 8: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Morgen ", " ich Deutsch lernen."], gaps: ["werde"] },
      { text: ["(trinken) Du ", " weniger Kaffee trinken."], gaps: ["wirst"] },
      { text: ["(schlafen) Er ", " heute früh schlafen."], gaps: ["wird"] },
      { text: ["(fahren) Wir ", " nach Italien fahren."], gaps: ["werden"] },
      { text: ["(sehen) Ihr ", " nächste Woche einen Film sehen."], gaps: ["werdet"] },
    ]
  },
  // Bài tập 9: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(spielen) Ich ", " Fußball im Park."], gaps: ["spiele"] },
      { text: ["(kochen) Du ", " oft zu Hause."], gaps: ["kochst"] },
      { text: ["(lesen) Er ", " jeden Abend ein Buch."], gaps: ["liest"] },
      { text: ["(schreiben) Wir ", " viele E-Mails."], gaps: ["schreiben"] },
      { text: ["(tanzen) Ihr ", " in der Disko."], gaps: ["tanzt"] },
    ]
  },
  // Bài tập 10: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(spielen) Ich ", " gestern Fußball ", " ."], gaps: ["habe", "gespielt"] },
      { text: ["(kochen) Du ", " eine leckere Suppe ", " ."], gaps: ["hast", "gekocht"] },
      { text: ["(lesen) Er ", " einen spannenden Roman ", " ."], gaps: ["hat", "gelesen"] },
      { text: ["(schreiben) Wir ", " einen Brief ", " ."], gaps: ["haben", "geschrieben"] },
      { text: ["(tanzen) Ihr ", " bis spät in die Nacht ", " ."], gaps: ["habt", "getanzt"] },
    ]
  },
  // Bài tập 11: Chia động từ ở thì Präteritum
  {
    type: "cloze",
    sentences: [
      { text: ["(spielen) Ich ", " früher oft Fußball."], gaps: ["spielte"] },
      { text: ["(kochen) Du ", " gestern eine Suppe."], gaps: ["kochtest"] },
      { text: ["(lesen) Er ", " letztes Jahr viele Bücher."], gaps: ["las"] },
      { text: ["(schreiben) Wir ", " Briefe an Freunde."], gaps: ["schrieben"] },
      { text: ["(tanzen) Ihr ", " gestern lange."], gaps: ["tanztet"] },
    ]
  },
  // Bài tập 12: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(spielen) Morgen ", " ich Fußball spielen."], gaps: ["werde"] },
      { text: ["(kochen) Du ", " morgen Abend kochen."], gaps: ["wirst"] },
      { text: ["(lesen) Er ", " bald ein neues Buch lesen."], gaps: ["wird"] },
      { text: ["(schreiben) Wir ", " nächste Woche eine E-Mail schreiben."], gaps: ["werden"] },
      { text: ["(tanzen) Ihr ", " am Wochenende tanzen."], gaps: ["werdet"] },
    ]
  },
  // Bài tập 13: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(arbeiten) Ich ", " jeden Tag im Büro."], gaps: ["arbeite"] },
      { text: ["(helfen) Du ", " oft deiner Mutter."], gaps: ["hilfst"] },
      { text: ["(fahren) Er ", " mit dem Bus zur Arbeit."], gaps: ["fährt"] },
      { text: ["(singen) Wir ", " im Chor."], gaps: ["singen"] },
      { text: ["(laufen) Ihr ", " im Park."], gaps: ["lauft"] },
    ]
  },
   // Bài tập 14: Chia động từ ở thì Perfekt
   {
    type: "cloze",
    sentences: [
      { text: ["(arbeiten) Ich ", " gestern lange ", " ."], gaps: ["habe", "gearbeitet"] },
      { text: ["(helfen) Du ", " deiner Schwester ", " ."], gaps: ["hast", "geholfen"] },
      { text: ["(laufen) Er ", " eine Stunde im Park ", " ."], gaps: ["ist", "gelaufen"] },
      { text: ["(singen) Wir ", " ein schönes Lied ", " ."], gaps: ["haben", "gesungen"] },
      { text: ["(fahren) Ihr ", " nach München ", " ."], gaps: ["seid", "gefahren"] },
    ]
  },
  // Bài tập 15: Chia động từ ở thì Präteritum
  {
    type: "cloze",
    sentences: [
      { text: ["(arbeiten) Ich ", " früher in einem Büro."], gaps: ["arbeitete"] },
      { text: ["(helfen) Du ", " deiner Mutter oft."], gaps: ["halfst"] },
      { text: ["(laufen) Er ", " jeden Morgen früh."], gaps: ["lief"] },
      { text: ["(singen) Wir ", " in der Schule."], gaps: ["sangen"] },
      { text: ["(fahren) Ihr ", " nach Hause."], gaps: ["fuhrt"] },
    ]
  },
  // Bài tập 16: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(arbeiten) Morgen ", " ich im Büro arbeiten."], gaps: ["werde"] },
      { text: ["(helfen) Du ", " deiner Freundin helfen."], gaps: ["wirst"] },
      { text: ["(laufen) Er ", " einen Marathon laufen."], gaps: ["wird"] },
      { text: ["(singen) Wir ", " im Konzert singen."], gaps: ["werden"] },
      { text: ["(fahren) Ihr ", " nach Berlin fahren."], gaps: ["werdet"] },
    ]
  },
  // Bài tập 17: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Ich ", " gern Gemüse."], gaps: ["esse"] },
      { text: ["(trinken) Du ", " eine Tasse Tee."], gaps: ["trinkst"] },
      { text: ["(machen) Er ", " seine Hausaufgaben."], gaps: ["macht"] },
      { text: ["(gehen) Wir ", " in die Stadt."], gaps: ["gehen"] },
      { text: ["(spielen) Ihr ", " Fußball im Park."], gaps: ["spielt"] },
    ]
  },
  // Bài tập 18: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Ich ", " heute eine Pizza ", " ."], gaps: ["habe", "gegessen"] },
      { text: ["(trinken) Du ", " gestern eine Cola ", " ."], gaps: ["hast", "getrunken"] },
      { text: ["(machen) Er ", " seine Arbeit ", " ."], gaps: ["hat", "gemacht"] },
      { text: ["(gehen) Wir ", " ins Theater ", " ."], gaps: ["sind", "gegangen"] },
      { text: ["(spielen) Ihr ", " ein neues Spiel ", " ."], gaps: ["habt", "gespielt"] },
    ]
  },
  // Bài tập 19: Chia động từ ở thì Präteritum
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Ich ", " gestern einen Apfel."], gaps: ["aß"] },
      { text: ["(trinken) Du ", " früher viel Milch."], gaps: ["trankst"] },
      { text: ["(machen) Er ", " immer Sport."], gaps: ["machte"] },
      { text: ["(gehen) Wir ", " oft in den Park."], gaps: ["gingen"] },
      { text: ["(spielen) Ihr ", " mit Freunden."], gaps: ["spieltet"] },
    ]
  },
  // Bài tập 20: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Morgen ", " ich Sushi essen."], gaps: ["werde"] },
      { text: ["(trinken) Du ", " mehr Wasser trinken."], gaps: ["wirst"] },
      { text: ["(machen) Er ", " seine Präsentation vorbereiten."], gaps: ["wird"] },
      { text: ["(gehen) Wir ", " ins Fitnessstudio gehen."], gaps: ["werden"] },
      { text: ["(spielen) Ihr ", " am Wochenende Tennis spielen."], gaps: ["werdet"] },
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Verben (A2)</h1>
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
