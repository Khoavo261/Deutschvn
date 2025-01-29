import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";

const exercises = [
  // Bài tập 1: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Das Buch ", " (lesen) von vielen Menschen."], gaps: ["wird gelesen"] },
      { text: ["Die Arbeit ", " (machen) von den Mitarbeitern."], gaps: ["wird gemacht"] },
      { text: ["Der Müll ", " (sortieren) jeden Tag."], gaps: ["wird sortiert"] },
      { text: ["Die Gäste ", " (bedienen) im Restaurant."], gaps: ["werden bedient"] },
      { text: ["Das Haus ", " (bauen) von einer Baufirma."], gaps: ["wird gebaut"] },
    ]
  },
  // Bài tập 2: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Lehrer erklärt die Grammatik. → Die Grammatik ", " (erklären) vom Lehrer."], gaps: ["wird erklärt"] },
      { text: ["Die Firma produziert neue Autos. → Neue Autos ", " (produzieren) von der Firma."], gaps: ["werden produziert"] },
      { text: ["Der Koch bereitet das Essen vor. → Das Essen ", " (vorbereiten) vom Koch."], gaps: ["wird vorbereitet"] },
      { text: ["Die Polizei kontrolliert die Autos. → Die Autos ", " (kontrollieren) von der Polizei."], gaps: ["werden kontrolliert"] },
      { text: ["Die Schüler schreiben einen Test. → Ein Test ", " (schreiben) von den Schülern."], gaps: ["wird geschrieben"] },
    ]
  },
  // Bài tập 3: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Brief ", " (schreiben) von Maria."], gaps: ["wird geschrieben"] },
      { text: ["Das Fenster ", " (öffnen) von Peter."], gaps: ["wird geöffnet"] },
      { text: ["Die E-Mail ", " (schicken) an den Chef."], gaps: ["wird geschickt"] },
      { text: ["Das Auto ", " (reparieren) in der Werkstatt."], gaps: ["wird repariert"] },
      { text: ["Die Rechnung ", " (bezahlen) von den Kunden."], gaps: ["wird bezahlt"] },
    ]
  },
  // Bài tập 4: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Mutter kocht das Essen. → Das Essen ", " (kochen) von der Mutter."], gaps: ["wird gekocht"] },
      { text: ["Der Mechaniker repariert das Fahrrad. → Das Fahrrad ", " (reparieren) vom Mechaniker."], gaps: ["wird repariert"] },
      { text: ["Der Lehrer gibt den Schülern die Hausaufgaben. → Die Hausaufgaben ", " (geben) den Schülern."], gaps: ["werden gegeben"] },
      { text: ["Der Kellner serviert das Essen. → Das Essen ", " (servieren) vom Kellner."], gaps: ["wird serviert"] },
      { text: ["Die Kinder spielen Fußball. → Fußball ", " (spielen) von den Kindern."], gaps: ["wird gespielt"] },
    ]
  },
  // Bài tập 5: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Zeitung ", " (lesen) von vielen Menschen."], gaps: ["wird gelesen"] },
      { text: ["Das Zimmer ", " (putzen) von der Reinigungskraft."], gaps: ["wird geputzt"] },
      { text: ["Die Pakete ", " (verschicken) jeden Tag."], gaps: ["werden verschickt"] },
      { text: ["Die Musik ", " (spielen) im Radio."], gaps: ["wird gespielt"] },
      { text: ["Die Straßen ", " (bauen) von der Stadtverwaltung."], gaps: ["werden gebaut"] },
    ]
  },
  // Bài tập 6: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Arzt untersucht den Patienten. → Der Patient ", " (untersuchen) vom Arzt."], gaps: ["wird untersucht"] },
      { text: ["Der Gärtner gießt die Blumen. → Die Blumen ", " (gießen) vom Gärtner."], gaps: ["werden gegossen"] },
      { text: ["Die Lehrerin lobt den Schüler. → Der Schüler ", " (loben) von der Lehrerin."], gaps: ["wird gelobt"] },
      { text: ["Die Kinder backen einen Kuchen. → Ein Kuchen ", " (backen) von den Kindern."], gaps: ["wird gebacken"] },
      { text: ["Der Mechaniker wechselt die Reifen. → Die Reifen ", " (wechseln) vom Mechaniker."], gaps: ["werden gewechselt"] },
    ]
  },
  // Bài tập 7: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Das Mittagessen ", " (servieren) um 12 Uhr."], gaps: ["wird serviert"] },
      { text: ["Die Briefe ", " (schreiben) von der Sekretärin."], gaps: ["werden geschrieben"] },
      { text: ["Der Computer ", " (reparieren) im Servicezentrum."], gaps: ["wird repariert"] },
      { text: ["Die Fenster ", " (putzen) einmal pro Woche."], gaps: ["werden geputzt"] },
      { text: ["Der Rasen ", " (mähen) von den Nachbarn."], gaps: ["wird gemäht"] },
    ]
  },
  // Bài tập 8: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Vater erzählt eine Geschichte. → Eine Geschichte ", " (erzählen) vom Vater."], gaps: ["wird erzählt"] },
      { text: ["Die Verkäuferin verkauft die Waren. → Die Waren ", " (verkaufen) von der Verkäuferin."], gaps: ["werden verkauft"] },
      { text: ["Der Maler streicht das Haus. → Das Haus ", " (streichen) vom Maler."], gaps: ["wird gestrichen"] },
      { text: ["Die Schüler lösen die Aufgaben. → Die Aufgaben ", " (lösen) von den Schülern."], gaps: ["werden gelöst"] },
      { text: ["Die Polizei sucht den Verbrecher. → Der Verbrecher ", " (suchen) von der Polizei."], gaps: ["wird gesucht"] },
    ]
  },
  // Bài tập 9: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Film ", " (zeigen) im Kino."], gaps: ["wird gezeigt"] },
      { text: ["Die Pakete ", " (liefern) am Morgen."], gaps: ["werden geliefert"] },
      { text: ["Das Auto ", " (waschen) in der Werkstatt."], gaps: ["wird gewaschen"] },
      { text: ["Die Blumen ", " (pflanzen) im Garten."], gaps: ["werden gepflanzt"] },
      { text: ["Das Licht ", " (anschalten) um 18 Uhr."], gaps: ["wird angeschaltet"] },
    ]
  },
  // Bài tập 10: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Der Lehrer fragt die Schüler. → Die Schüler ", " (fragen) vom Lehrer."], gaps: ["werden gefragt"] },
      { text: ["Die Mutter wäscht die Wäsche. → Die Wäsche ", " (waschen) von der Mutter."], gaps: ["wird gewaschen"] },
      { text: ["Die Kinder dekorieren das Klassenzimmer. → Das Klassenzimmer ", " (dekorieren) von den Kindern."], gaps: ["wird dekoriert"] },
      { text: ["Die Polizei kontrolliert die Pässe. → Die Pässe ", " (kontrollieren) von der Polizei."], gaps: ["werden kontrolliert"] },
      { text: ["Der Architekt plant das Gebäude. → Das Gebäude ", " (planen) vom Architekten."], gaps: ["wird geplant"] },
    ]
  },
  // Bài tập 11: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Firma stellt neue Mitarbeiter ein. → Neue Mitarbeiter ", " (einstellen) von der Firma."], gaps: ["werden eingestellt"] },
      { text: ["Der Bäcker backt das Brot. → Das Brot ", " (backen) vom Bäcker."], gaps: ["wird gebacken"] },
      { text: ["Die Schüler lesen den Text. → Der Text ", " (lesen) von den Schülern."], gaps: ["wird gelesen"] },
      { text: ["Der Lehrer gibt den Schülern die Bücher. → Die Bücher ", " (geben) den Schülern."], gaps: ["werden gegeben"] },
      { text: ["Die Feuerwehr löscht das Feuer. → Das Feuer ", " (löschen) von der Feuerwehr."], gaps: ["wird gelöscht"] },
    ]
  },
  // Bài tập 12: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Fenster ", " (putzen) einmal im Monat."], gaps: ["werden geputzt"] },
      { text: ["Der Brief ", " (schreiben) von der Sekretärin."], gaps: ["wird geschrieben"] },
      { text: ["Die Straße ", " (reparieren) von der Stadtverwaltung."], gaps: ["wird repariert"] },
      { text: ["Die Rechnungen ", " (bezahlen) von den Kunden."], gaps: ["werden bezahlt"] },
      { text: ["Die Pakete ", " (verschicken) per Post."], gaps: ["werden verschickt"] },
    ]
  },
  // Bài tập 13: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Firma entwickelt ein neues Produkt. → Ein neues Produkt ", " (entwickeln) von der Firma."], gaps: ["wird entwickelt"] },
      { text: ["Die Polizei untersucht den Fall. → Der Fall ", " (untersuchen) von der Polizei."], gaps: ["wird untersucht"] },
      { text: ["Die Schüler machen die Hausaufgaben. → Die Hausaufgaben ", " (machen) von den Schülern."], gaps: ["werden gemacht"] },
      { text: ["Der Arzt verschreibt Medikamente. → Medikamente ", " (verschreiben) vom Arzt."], gaps: ["werden verschrieben"] },
      { text: ["Der Kellner bringt das Essen. → Das Essen ", " (bringen) vom Kellner."], gaps: ["wird gebracht"] },
    ]
  },
  // Bài tập 14: Hoàn thành câu bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Tür ", " (öffnen) um 8 Uhr morgens."], gaps: ["wird geöffnet"] },
      { text: ["Die Blumen ", " (gießen) jeden Tag."], gaps: ["werden gegossen"] },
      { text: ["Das Auto ", " (reparieren) in der Werkstatt."], gaps: ["wird repariert"] },
      { text: ["Der Bericht ", " (schreiben) von der Assistentin."], gaps: ["wird geschrieben"] },
      { text: ["Die Tickets ", " (verkaufen) an der Kasse."], gaps: ["werden verkauft"] },
    ]
  },
  // Bài tập 15: Chuyển câu chủ động sang bị động
  {
    type: "cloze",
    sentences: [
      { text: ["Die Kinder essen den Kuchen. → Der Kuchen ", " (essen) von den Kindern."], gaps: ["wird gegessen"] },
      { text: ["Die Universität organisiert die Veranstaltung. → Die Veranstaltung ", " (organisieren) von der Universität."], gaps: ["wird organisiert"] },
      { text: ["Der Techniker repariert das Telefon. → Das Telefon ", " (reparieren) vom Techniker."], gaps: ["wird repariert"] },
      { text: ["Die Schüler lesen die Bücher. → Die Bücher ", " (lesen) von den Schülern."], gaps: ["werden gelesen"] },
      { text: ["Der Arzt untersucht den Patienten. → Der Patient ", " (untersuchen) vom Arzt."], gaps: ["wird untersucht"] },
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Passiv Präsens (A2)</h1>
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
