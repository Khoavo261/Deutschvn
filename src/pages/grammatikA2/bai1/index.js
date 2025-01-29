import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Exercise 1: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(gehen) Ich ", " jeden Tag zur Schule."], gaps: ["gehe"] },
      { text: ["(haben) Sie ", " viel zu tun."], gaps: ["haben"] },
      { text: ["(sein) Wir ", " sehr müde."], gaps: ["sind"] },
      { text: ["(arbeiten) Mein Vater ", " in einer Bank."], gaps: ["arbeitet"] },
      { text: ["(kommen) Ihr ", " aus Deutschland."], gaps: ["kommt"] },
    ],
  },
  // Exercise 2: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(sehen) Ich ", " einen schönen Film ", " ."], gaps: ["habe", "gesehen"] },
      { text: ["(machen) Er ", " seine Hausaufgaben ", " ."], gaps: ["hat", "gemacht"] },
      { text: ["(fahren) Wir ", " nach Berlin ", " ."], gaps: ["sind", "gefahren"] },
      { text: ["(essen) Sie ", " ein leckeres Frühstück ", " ."], gaps: ["hat", "gegessen"] },
      { text: ["(lernen) Du ", " viel Deutsch ", " ."], gaps: ["hast", "gelernt"] },
    ],
  },
  // Exercise 3: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(besuchen) Morgen ", " ich meine Freunde besuchen."], gaps: ["werde"] },
      { text: ["(arbeiten) Du ", " nächste Woche in München arbeiten."], gaps: ["wirst"] },
      { text: ["(sein) Er ", " bald sehr glücklich sein."], gaps: ["wird"] },
      { text: ["(machen) Wir ", " am Wochenende eine Party machen."], gaps: ["werden"] },
      { text: ["(reisen) Ihr ", " im Sommer nach Spanien reisen."], gaps: ["werdet"] },
    ],
  },
  // Exercise 4: Tổng hợp Präsens, Perfekt, Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(gehen) Ich ", " jeden Morgen zur Arbeit."], gaps: ["gehe"] },
      { text: ["(essen) Er ", " ein Sandwich zum Frühstück."], gaps: ["isst"] },
      { text: ["(sehen) Wir ", " einen schönen Film ", " ."], gaps: ["haben", "gesehen"] },
      { text: ["(arbeiten) Sie ", " hart in ihrem Job."], gaps: ["arbeitet"] },
      { text: ["(reisen) Ihr ", " nächstes Jahr nach Australien reisen."], gaps: ["werdet"] },
    ],
  },
  // Exercise 5: Chia động từ ở thì Präsens
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Ich ", " jeden Tag Deutsch."], gaps: ["lerne"] },
      { text: ["(trinken) Du ", " oft Kaffee."], gaps: ["trinkst"] },
      { text: ["(schlafen) Er ", " lange am Wochenende."], gaps: ["schläft"] },
      { text: ["(fahren) Wir ", " mit dem Fahrrad zur Arbeit."], gaps: ["fahren"] },
      { text: ["(sehen) Ihr ", " einen Film im Kino."], gaps: ["seht"] },
    ],
  },
  // Exercise 6: Chia động từ ở thì Perfekt
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Ich ", " gestern viel Deutsch ", " ."], gaps: ["habe", "gelernt"] },
      { text: ["(trinken) Du ", " heute Morgen Kaffee ", " ."], gaps: ["hast", "getrunken"] },
      { text: ["(schlafen) Er ", " bis 10 Uhr ", " ."], gaps: ["hat", "geschlafen"] },
      { text: ["(fahren) Wir ", " nach Hamburg ", " ."], gaps: ["sind", "gefahren"] },
      { text: ["(sehen) Ihr ", " einen neuen Film ", " ."], gaps: ["habt", "gesehen"] },
    ],
  },
  // Exercise 7: Chia động từ ở thì Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(lernen) Morgen ", " ich Deutsch lernen."], gaps: ["werde"] },
      { text: ["(trinken) Du ", " weniger Kaffee trinken."], gaps: ["wirst"] },
      { text: ["(schlafen) Er ", " heute früh schlafen."], gaps: ["wird"] },
      { text: ["(fahren) Wir ", " nach Italien fahren."], gaps: ["werden"] },
      { text: ["(sehen) Ihr ", " nächste Woche einen Film sehen."], gaps: ["werdet"] },
    ],
  },
  // Exercise 8: Tổng hợp Präsens, Perfekt, Futur I
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Ich ", " oft Gemüse."], gaps: ["esse"] },
      { text: ["(trinken) Du ", " eine Tasse Tee."], gaps: ["trinkst"] },
      { text: ["(machen) Er ", " seine Hausaufgaben."], gaps: ["macht"] },
      { text: ["(gehen) Wir ", " am Wochenende spazieren."], gaps: ["gehen"] },
      { text: ["(spielen) Ihr ", " Fußball im Park."], gaps: ["spielt"] },
    ],
  },
  // Exercise 9: Chia động từ ở thì Perfekt nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Ich ", " heute eine Pizza ", " ."], gaps: ["habe", "gegessen"] },
      { text: ["(trinken) Du ", " gestern eine Cola ", " ."], gaps: ["hast", "getrunken"] },
      { text: ["(machen) Er ", " seine Arbeit ", " ."], gaps: ["hat", "gemacht"] },
      { text: ["(gehen) Wir ", " ins Theater ", " ."], gaps: ["sind", "gegangen"] },
      { text: ["(spielen) Ihr ", " ein neues Spiel ", " ."], gaps: ["habt", "gespielt"] },
    ],
  },
  // Exercise 10: Chia động từ ở thì Futur I nâng cao
  {
    type: "cloze",
    sentences: [
      { text: ["(essen) Morgen ", " ich Sushi essen."], gaps: ["werde"] },
      { text: ["(trinken) Du ", " mehr Wasser trinken."], gaps: ["wirst"] },
      { text: ["(machen) Er ", " seine Präsentation vorbereiten."], gaps: ["wird"] },
      { text: ["(gehen) Wir ", " ins Fitnessstudio gehen."], gaps: ["werden"] },
      { text: ["(spielen) Ihr ", " am Wochenende Tennis spielen."], gaps: ["werdet"] },
    ],
  },
    // Exercise 11: Chia động từ ở thì Präsens nâng cao
    {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Ich ", " jeden Tag im Büro."], gaps: ["arbeite"] },
          { text: ["(helfen) Du ", " deinen Eltern oft."], gaps: ["hilfst"] },
          { text: ["(laufen) Er ", " jeden Morgen im Park."], gaps: ["läuft"] },
          { text: ["(kochen) Wir ", " jeden Abend zusammen."], gaps: ["kochen"] },
          { text: ["(lesen) Ihr ", " viele interessante Bücher."], gaps: ["lest"] },
        ],
      },
      // Exercise 12: Chia động từ ở thì Perfekt nâng cao
      {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Ich ", " gestern lange ", " ."], gaps: ["habe", "gearbeitet"] },
          { text: ["(helfen) Du ", " deiner Schwester ", " ."], gaps: ["hast", "geholfen"] },
          { text: ["(laufen) Er ", " eine Stunde im Park ", " ."], gaps: ["ist", "gelaufen"] },
          { text: ["(kochen) Wir ", " ein leckeres Abendessen ", " ."], gaps: ["haben", "gekocht"] },
          { text: ["(lesen) Ihr ", " gestern einen spannenden Roman ", " ."], gaps: ["habt", "gelesen"] },
        ],
      },
      // Exercise 13: Chia động từ ở thì Futur I nâng cao
      {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Morgen ", " ich an einem neuen Projekt arbeiten."], gaps: ["werde"] },
          { text: ["(helfen) Du ", " deinen Freunden helfen."], gaps: ["wirst"] },
          { text: ["(laufen) Er ", " einen Marathon laufen."], gaps: ["wird"] },
          { text: ["(kochen) Wir ", " am Wochenende etwas Besonderes kochen."], gaps: ["werden"] },
          { text: ["(lesen) Ihr ", " bald ein neues Buch lesen."], gaps: ["werdet"] },
        ],
      },
      // Exercise 14: Tổng hợp Präsens, Perfekt, Futur I
      {
        type: "cloze",
        sentences: [
          { text: ["(spielen) Ich ", " gern Schach."], gaps: ["spiele"] },
          { text: ["(sehen) Du ", " eine tolle Serie ", " ."], gaps: ["hast", "gesehen"] },
          { text: ["(machen) Er ", " eine spannende Reise ", " ."], gaps: ["hat", "gemacht"] },
          { text: ["(lernen) Wir ", " bald eine neue Sprache lernen."], gaps: ["werden"] },
          { text: ["(reisen) Ihr ", " nächsten Sommer nach Frankreich reisen."], gaps: ["werdet"] },
        ],
      },
      // Exercise 15: Chia động từ ở thì Präsens - tình huống thực tế
      {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Ich ", " von Montag bis Freitag."], gaps: ["arbeite"] },
          { text: ["(lernen) Du ", " jeden Tag Deutsch."], gaps: ["lernst"] },
          { text: ["(fahren) Er ", " immer mit dem Fahrrad zur Arbeit."], gaps: ["fährt"] },
          { text: ["(schlafen) Wir ", " normalerweise früh."], gaps: ["schlafen"] },
          { text: ["(sehen) Ihr ", " oft Filme im Kino."], gaps: ["seht"] },
        ],
      },
      // Exercise 16: Chia động từ ở thì Perfekt - tình huống thực tế
      {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Ich ", " gestern zehn Stunden ", " ."], gaps: ["habe", "gearbeitet"] },
          { text: ["(lernen) Du ", " viel für die Prüfung ", " ."], gaps: ["hast", "gelernt"] },
          { text: ["(fahren) Er ", " mit dem Zug nach Berlin ", " ."], gaps: ["ist", "gefahren"] },
          { text: ["(schlafen) Wir ", " am Wochenende lange ", " ."], gaps: ["haben", "geschlafen"] },
          { text: ["(sehen) Ihr ", " einen interessanten Film ", " ."], gaps: ["habt", "gesehen"] },
        ],
      },
      // Exercise 17: Chia động từ ở thì Futur I - tình huống thực tế
      {
        type: "cloze",
        sentences: [
          { text: ["(arbeiten) Morgen ", " ich an einem neuen Projekt arbeiten."], gaps: ["werde"] },
          { text: ["(lernen) Du ", " bald eine neue Sprache lernen."], gaps: ["wirst"] },
          { text: ["(fahren) Er ", " mit dem Bus zur Arbeit fahren."], gaps: ["wird"] },
          { text: ["(schlafen) Wir ", " heute früh schlafen."], gaps: ["werden"] },
          { text: ["(sehen) Ihr ", " nächste Woche einen neuen Film sehen."], gaps: ["werdet"] },
        ],
      },
      // Exercise 18: Chia động từ ở thì Präsens - mở rộng
  {
    type: "cloze",
    sentences: [
      { text: ["(singen) Ich ", " ein Lied."], gaps: ["singe"] },
      { text: ["(baden) Du ", " jeden Abend."], gaps: ["badest"] },
      { text: ["(fragen) Er ", " oft nach Hilfe."], gaps: ["fragt"] },
      { text: ["(arbeiten) Wir ", " gemeinsam an dem Projekt."], gaps: ["arbeiten"] },
      { text: ["(fahren) Ihr ", " mit dem Auto zur Uni."], gaps: ["fahrt"] },
    ],
  },
  // Exercise 19: Chia động từ ở thì Perfekt - mở rộng
  {
    type: "cloze",
    sentences: [
      { text: ["(singen) Ich ", " gestern ein Lied ", " ."], gaps: ["habe", "gesungen"] },
      { text: ["(baden) Du ", " heute Morgen ", " ."], gaps: ["hast", "gebadet"] },
      { text: ["(fragen) Er ", " nach der Adresse ", " ."], gaps: ["hat", "gefragt"] },
      { text: ["(arbeiten) Wir ", " zusammen an einem Projekt ", " ."], gaps: ["haben", "gearbeitet"] },
      { text: ["(fahren) Ihr ", " nach Berlin ", " ."], gaps: ["seid", "gefahren"] },
    ],
  },
  // Exercise 20: Chia động từ ở thì Futur I - mở rộng
  {
    type: "cloze",
    sentences: [
      { text: ["(singen) Morgen ", " ich ein Lied singen."], gaps: ["werde"] },
      { text: ["(baden) Du ", " heute Abend baden."], gaps: ["wirst"] },
      { text: ["(fragen) Er ", " später nach der Adresse fragen."], gaps: ["wird"] },
      { text: ["(arbeiten) Wir ", " an einem neuen Projekt arbeiten."], gaps: ["werden"] },
      { text: ["(fahren) Ihr ", " nächsten Monat nach Italien fahren."], gaps: ["werdet"] },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Präsens, Perfekt, Futur I</h1>
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
