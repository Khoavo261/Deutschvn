import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Điền đại từ nhân xưng (Personalpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(ich) ", " gehe zur Schule."], gaps: ["Ich"] },
      { text: ["(du) Woher kommst ", "?"], gaps: ["du"] },
      { text: ["(er) ", " spielt Fußball."], gaps: ["Er"] },
      { text: ["(ihr) Wir gehen ins Kino. Kommt ", " mit?"], gaps: ["ihr"] },
      { text: ["(sie) ", " sind meine Freunde."], gaps: ["Sie"] },
    ]
  },
  // Bài tập 2: Điền đại từ sở hữu (Possessivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(mein) Das ist ", " Buch."], gaps: ["mein"] },
      { text: ["(dein) Hast du ", " Handy dabei?"], gaps: ["dein"] },
      { text: ["(sein) Er liebt ", " Hund."], gaps: ["seinen"] },
      { text: ["(unser) Wir wohnen in ", " Haus."], gaps: ["unserem"] },
      { text: ["(ihr) Wo ist ", " Tasche?"], gaps: ["ihre"] },
    ]
  },
  // Bài tập 3: Điền đại từ phản thân (Reflexivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich wasche ", "."], gaps: ["mich"] },
      { text: ["Du setzt ", " hin."], gaps: ["dich"] },
      { text: ["Er freut ", " auf den Urlaub."], gaps: ["sich"] },
      { text: ["Wir treffen ", " morgen."], gaps: ["uns"] },
      { text: ["Ihr ärgert ", " über den Lärm."], gaps: ["euch"] },
    ]
  },
  // Bài tập 4: Điền đại từ chỉ định (Demonstrativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(dieser) ", " Mann ist mein Lehrer."], gaps: ["Dieser"] },
      { text: ["(diese) Ich mag ", " Blume."], gaps: ["diese"] },
      { text: ["(jenes) Kaufst du ", " Auto?"], gaps: ["jenes"] },
      { text: ["(dieses) ", " Buch ist sehr interessant."], gaps: ["Dieses"] },
      { text: ["(diesen) Ich nehme ", " Stuhl."], gaps: ["diesen"] },
    ]
  },
  // Bài tập 5: Hoàn thành câu với đại từ quan hệ (Relativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Das ist der Mann, ", " mir geholfen hat."], gaps: ["der"] },
      { text: ["Die Frau, ", " du kennst, ist meine Tante."], gaps: ["die"] },
      { text: ["Das ist das Buch, ", " ich gelesen habe."], gaps: ["das"] },
      { text: ["Der Hund, ", " dort steht, gehört mir."], gaps: ["der"] },
      { text: ["Ich liebe den Film, ", " wir gestern gesehen haben."], gaps: ["den"] },
    ]
  },
  // Bài tập 6: Điền đại từ bất định (Indefinitpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich habe ", " (nichts) verstanden."], gaps: ["nichts"] },
      { text: ["Gibt es hier ", " (etwas) zu essen?"], gaps: ["etwas"] },
      { text: ["Wir brauchen ", " (alle), um das Problem zu lösen."], gaps: ["alle"] },
      { text: ["Hast du ", " (keiner) gesehen?"], gaps: ["keinen"] },
    ]
  },

  // Bài tập 7: Điền đại từ nhân xưng (Personalpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(ich) ", " gehe zur Schule."], gaps: ["Ich"] },
      { text: ["(du) Woher kommst ", "?"], gaps: ["du"] },
      { text: ["(er) ", " spielt Fußball."], gaps: ["Er"] },
      { text: ["(ihr) Wir gehen ins Kino. Kommt ", " mit?"], gaps: ["ihr"] },
      { text: ["(sie) ", " sind meine Freunde."], gaps: ["Sie"] },
    ]
  },
  // Bài tập 8: Điền đại từ sở hữu (Possessivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(mein) Das ist ", " Buch."], gaps: ["mein"] },
      { text: ["(dein) Hast du ", " Handy dabei?"], gaps: ["dein"] },
      { text: ["(sein) Er liebt ", " Hund."], gaps: ["seinen"] },
      { text: ["(unser) Wir wohnen in ", " Haus."], gaps: ["unserem"] },
      { text: ["(ihr) Wo ist ", " Tasche?"], gaps: ["ihre"] },
    ]
  },
  // Bài tập 9: Điền đại từ phản thân (Reflexivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich wasche ", "."], gaps: ["mich"] },
      { text: ["Du setzt ", " hin."], gaps: ["dich"] },
      { text: ["Er freut ", " auf den Urlaub."], gaps: ["sich"] },
      { text: ["Wir treffen ", " morgen."], gaps: ["uns"] },
      { text: ["Ihr ärgert ", " über den Lärm."], gaps: ["euch"] },
    ]
  },
  // Bài tập 10: Điền đại từ chỉ định (Demonstrativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(dieser) ", " Mann ist mein Lehrer."], gaps: ["Dieser"] },
      { text: ["(diese) Ich mag ", " Blume."], gaps: ["diese"] },
      { text: ["(jenes) Kaufst du ", " Auto?"], gaps: ["jenes"] },
      { text: ["(dieses) ", " Buch ist sehr interessant."], gaps: ["Dieses"] },
      { text: ["(diesen) Ich nehme ", " Stuhl."], gaps: ["diesen"] },
    ]
  },
  // Bài tập 11: Hoàn thành câu với đại từ quan hệ (Relativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Das ist der Mann, ", " mir geholfen hat."], gaps: ["der"] },
      { text: ["Die Frau, ", " du kennst, ist meine Tante."], gaps: ["die"] },
      { text: ["Das ist das Buch, ", " ich gelesen habe."], gaps: ["das"] },
      { text: ["Der Hund, ", " dort steht, gehört mir."], gaps: ["der"] },
      { text: ["Ich liebe den Film, ", " wir gestern gesehen haben."], gaps: ["den"] },
    ]
  },
  // Bài tập 12: Điền đại từ bất định (Indefinitpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Jemand) hat mein Handy genommen."], gaps: ["Jemand"] },
      { text: ["Ich habe ", " (nichts) verstanden."], gaps: ["nichts"] },
      { text: ["Gibt es hier ", " (etwas) zu essen?"], gaps: ["etwas"] },
      { text: ["Wir brauchen ", " (alle), um das Problem zu lösen."], gaps: ["alle"] },
      { text: ["Hast du ", " (keiner) gesehen?"], gaps: ["keinen"] },
    ]
  },
  // Bài tập 13: Điền đại từ nhân xưng (Personalpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(ich) ", " gehe zur Schule."], gaps: ["Ich"] },
      { text: ["(du) Woher kommst ", "?"], gaps: ["du"] },
      { text: ["(er) ", " spielt Fußball."], gaps: ["Er"] },
      { text: ["(ihr) Wir gehen ins Kino. Kommt ", " mit?"], gaps: ["ihr"] },
      { text: ["(sie) ", " sind meine Freunde."], gaps: ["Sie"] },
    ]
  },
  // Bài tập 14: Điền đại từ sở hữu (Possessivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(mein) Das ist ", " Buch."], gaps: ["mein"] },
      { text: ["(dein) Hast du ", " Handy dabei?"], gaps: ["dein"] },
      { text: ["(sein) Er liebt ", " Hund."], gaps: ["seinen"] },
      { text: ["(unser) Wir wohnen in ", " Haus."], gaps: ["unserem"] },
      { text: ["(ihr) Wo ist ", " Tasche?"], gaps: ["ihre"] },
    ]
  },
  // Bài tập 15: Điền đại từ phản thân (Reflexivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Ich wasche ", "."], gaps: ["mich"] },
      { text: ["Du setzt ", " hin."], gaps: ["dich"] },
      { text: ["Er freut ", " auf den Urlaub."], gaps: ["sich"] },
      { text: ["Wir treffen ", " morgen."], gaps: ["uns"] },
      { text: ["Ihr ärgert ", " über den Lärm."], gaps: ["euch"] },
    ]
  },
  // Bài tập 16: Điền đại từ chỉ định (Demonstrativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(dieser) ", " Mann ist mein Lehrer."], gaps: ["Dieser"] },
      { text: ["(diese) Ich mag ", " Blume."], gaps: ["diese"] },
      { text: ["(jenes) Kaufst du ", " Auto?"], gaps: ["jenes"] },
      { text: ["(dieses) ", " Buch ist sehr interessant."], gaps: ["Dieses"] },
      { text: ["(diesen) Ich nehme ", " Stuhl."], gaps: ["diesen"] },
    ]
  },
  // Bài tập 17: Điền đại từ quan hệ (Relativpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["Das ist der Mann, ", " mir geholfen hat."], gaps: ["der"] },
      { text: ["Die Frau, ", " du kennst, ist meine Tante."], gaps: ["die"] },
      { text: ["Das ist das Buch, ", " ich gelesen habe."], gaps: ["das"] },
      { text: ["Der Hund, ", " dort steht, gehört mir."], gaps: ["der"] },
      { text: ["Ich liebe den Film, ", " wir gestern gesehen haben."], gaps: ["den"] },
    ]
  },
  // Bài tập 18: Điền đại từ bất định (Indefinitpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["", " (Jemand) hat mein Handy genommen."], gaps: ["Jemand"] },
      { text: ["Ich habe ", " (nichts) verstanden."], gaps: ["nichts"] },
      { text: ["Gibt es hier ", " (etwas) zu essen?"], gaps: ["etwas"] },
      { text: ["Wir brauchen ", " (alle), um das Problem zu lösen."], gaps: ["alle"] },
      { text: ["Hast du ", " (keiner) gesehen?"], gaps: ["keinen"] },
    ]
  },
  // Bài tập 19: Điền đại từ nhân xưng (Personalpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(ich) ", " gehe zur Schule."], gaps: ["Ich"] },
      { text: ["(du) Woher kommst ", "?"], gaps: ["du"] },
      { text: ["(er) ", " spielt Fußball."], gaps: ["Er"] },
      { text: ["(ihr) Wir gehen ins Kino. Kommt ", " mit?"], gaps: ["ihr"] },
      { text: ["(sie) ", " sind meine Freunde."], gaps: ["Sie"] },
    ]
  },
  // Bài tập 20: Điền đại từ sở hữu (Possessivpronomen)
  {
    type: "cloze",
    sentences: [
      { text: ["(mein) Das ist ", " Buch."], gaps: ["mein"] },
      { text: ["(dein) Hast du ", " Handy dabei?"], gaps: ["dein"] },
      { text: ["(sein) Er liebt ", " Hund."], gaps: ["seinen"] },
      { text: ["(unser) Wir wohnen in ", " Haus."], gaps: ["unserem"] },
      { text: ["(ihr) Wo ist ", " Tasche?"], gaps: ["ihre"] },
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Pronomen (A2)</h1>
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
