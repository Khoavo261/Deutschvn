import React from "react";
import ClozeTest from "@site/src/components/ClozeTest/ClozeTest";
import RewriteTest from "@site/src/components/RewriteTest/RewriteTest";

const exercises = [
  // Bài tập 1: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich habe keine Zeit. Ich mache meine Hausaufgaben. (weil)", correct: "Ich mache meine Hausaufgaben, weil ich keine Zeit habe." },
      { hint: "Er kauft ein Auto. Er hat genug Geld. (wenn)", correct: "Er kauft ein Auto, wenn er genug Geld hat." },
      { hint: "Sie geht nicht ins Kino. Sie mag keine Filme. (obwohl)", correct: "Sie geht nicht ins Kino, obwohl sie keine Filme mag." },
      { hint: "Ich bin glücklich. Ich habe eine gute Note bekommen. (dass)", correct: "Ich bin glücklich, dass ich eine gute Note bekommen habe." },
      { hint: "Wir bleiben zu Hause. Es regnet. (weil)", correct: "Wir bleiben zu Hause, weil es regnet." }
    ]
  },
  // Bài tập 2: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich lerne Deutsch, ", " ich in Deutschland arbeiten möchte."], gaps: ["weil"] },
      { text: ["Er bleibt zu Hause, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Wir gehen ins Kino, ", " wir den Film sehen möchten."], gaps: ["weil"] },
      { text: ["Sie kommt nicht zur Party, ", " sie keine Zeit hat."], gaps: ["weil"] },
      { text: ["Ich gehe spazieren, ", " das Wetter schlecht ist."], gaps: ["obwohl"] }
    ]
  },
  // Bài tập 3: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich arbeite viel. Ich will erfolgreich sein. (weil)", correct: "Ich arbeite viel, weil ich erfolgreich sein will." },
      { hint: "Wir gehen ins Restaurant. Wir haben Hunger. (weil)", correct: "Wir gehen ins Restaurant, weil wir Hunger haben." },
      { hint: "Er fährt mit dem Fahrrad. Er hat kein Auto. (weil)", correct: "Er fährt mit dem Fahrrad, weil er kein Auto hat." },
      { hint: "Sie ist müde. Sie hat nicht gut geschlafen. (weil)", correct: "Sie ist müde, weil sie nicht gut geschlafen hat." },
      { hint: "Ich nehme eine Jacke mit. Es ist kalt. (weil)", correct: "Ich nehme eine Jacke mit, weil es kalt ist." }
    ]
  },
  // Bài tập 4: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Er bleibt im Bett, ", " er krank ist."], gaps: ["weil"] },
      { text: ["Ich kaufe ein neues Handy, ", " mein altes kaputt ist."], gaps: ["weil"] },
      { text: ["Wir fahren ans Meer, ", " wir Urlaub haben."], gaps: ["weil"] },
      { text: ["Sie weint, ", " sie traurig ist."], gaps: ["weil"] },
      { text: ["Ich gehe nach Hause, ", " es spät ist."], gaps: ["weil"] }
    ]
  },
  // Bài tập 5: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lerne jeden Tag. Ich will eine gute Note bekommen. (weil)", correct: "Ich lerne jeden Tag, weil ich eine gute Note bekommen will." },
      { hint: "Er trainiert viel. Er möchte stark sein. (weil)", correct: "Er trainiert viel, weil er stark sein möchte." },
      { hint: "Sie liest viele Bücher. Sie liebt Geschichten. (weil)", correct: "Sie liest viele Bücher, weil sie Geschichten liebt." },
      { hint: "Wir essen gesund. Wir wollen fit bleiben. (weil)", correct: "Wir essen gesund, weil wir fit bleiben wollen." },
      { hint: "Ich trage eine Sonnenbrille. Die Sonne scheint. (weil)", correct: "Ich trage eine Sonnenbrille, weil die Sonne scheint." }
    ]
  },
    // Bài tập 6: Kết hợp câu với liên từ thích hợp
    {
        type: "rewrite",
        sentences: [
          { hint: "Ich arbeite viel. Ich möchte erfolgreich sein. (weil)", correct: "Ich arbeite viel, weil ich erfolgreich sein möchte." },
          { hint: "Wir fahren ans Meer. Wir haben Urlaub. (weil)", correct: "Wir fahren ans Meer, weil wir Urlaub haben." },
          { hint: "Er geht ins Fitnessstudio. Er will fit bleiben. (weil)", correct: "Er geht ins Fitnessstudio, weil er fit bleiben will." },
          { hint: "Sie kauft neue Schuhe. Ihre alten sind kaputt. (weil)", correct: "Sie kauft neue Schuhe, weil ihre alten kaputt sind." },
          { hint: "Ich nehme einen Regenschirm mit. Es regnet. (weil)", correct: "Ich nehme einen Regenschirm mit, weil es regnet." }
        ]
      },
      // Bài tập 7: Hoàn thành câu với liên từ phù hợp
      {
        type: "cloze",
        sentences: [
          { text: ["Ich esse gesund, ", " ich fit bleiben möchte."], gaps: ["weil"] },
          { text: ["Er lernt viel, ", " er eine gute Note bekommen möchte."], gaps: ["weil"] },
          { text: ["Wir gehen ins Kino, ", " wir den neuen Film sehen wollen."], gaps: ["weil"] },
          { text: ["Sie bleibt zu Hause, ", " sie sich nicht gut fühlt."], gaps: ["weil"] },
          { text: ["Ich kaufe einen Laptop, ", " mein alter kaputt ist."], gaps: ["weil"] }
        ]
      },
      // Bài tập 8: Kết hợp câu với liên từ thích hợp
      {
        type: "rewrite",
        sentences: [
          { hint: "Ich bin müde. Ich habe nicht genug geschlafen. (weil)", correct: "Ich bin müde, weil ich nicht genug geschlafen habe." },
          { hint: "Er hat Hunger. Er hat noch nichts gegessen. (weil)", correct: "Er hat Hunger, weil er noch nichts gegessen hat." },
          { hint: "Wir gehen spazieren. Das Wetter ist schön. (weil)", correct: "Wir gehen spazieren, weil das Wetter schön ist." },
          { hint: "Sie kauft eine Jacke. Es ist kalt. (weil)", correct: "Sie kauft eine Jacke, weil es kalt ist." },
          { hint: "Ich trinke Wasser. Ich bin durstig. (weil)", correct: "Ich trinke Wasser, weil ich durstig bin." }
        ]
      },
      // Bài tập 9: Hoàn thành câu với liên từ phù hợp
      {
        type: "cloze",
        sentences: [
          { text: ["Er macht Sport, ", " er gesund bleiben will."], gaps: ["weil"] },
          { text: ["Ich gehe ins Bett, ", " ich müde bin."], gaps: ["weil"] },
          { text: ["Sie arbeitet viel, ", " sie erfolgreich sein möchte."], gaps: ["weil"] },
          { text: ["Wir reisen nach Spanien, ", " wir das Land lieben."], gaps: ["weil"] },
          { text: ["Ich esse keinen Zucker, ", " es nicht gesund ist."], gaps: ["weil"] }
        ]
      },
      // Bài tập 10: Kết hợp câu với liên từ thích hợp
      {
        type: "rewrite",
        sentences: [
          { hint: "Ich lerne Deutsch. Ich will in Deutschland arbeiten. (weil)", correct: "Ich lerne Deutsch, weil ich in Deutschland arbeiten will." },
          { hint: "Er fährt mit dem Fahrrad. Er hat kein Auto. (weil)", correct: "Er fährt mit dem Fahrrad, weil er kein Auto hat." },
          { hint: "Sie kocht selbst. Sie mag frisches Essen. (weil)", correct: "Sie kocht selbst, weil sie frisches Essen mag." },
          { hint: "Wir bleiben zu Hause. Es regnet stark. (weil)", correct: "Wir bleiben zu Hause, weil es stark regnet." },
          { hint: "Ich nehme einen Mantel mit. Es ist kalt. (weil)", correct: "Ich nehme einen Mantel mit, weil es kalt ist." }
        ]
      },
      // Bài tập 11: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich bin spät dran. Ich habe den Wecker nicht gehört. (weil)", correct: "Ich bin spät dran, weil ich den Wecker nicht gehört habe." },
      { hint: "Er lernt fleißig. Er möchte eine gute Note bekommen. (weil)", correct: "Er lernt fleißig, weil er eine gute Note bekommen möchte." },
      { hint: "Wir kaufen frisches Obst. Es ist gesünder. (weil)", correct: "Wir kaufen frisches Obst, weil es gesünder ist." },
      { hint: "Sie nimmt den Bus. Ihr Auto ist kaputt. (weil)", correct: "Sie nimmt den Bus, weil ihr Auto kaputt ist." },
      { hint: "Ich bringe einen Regenschirm mit. Es könnte regnen. (weil)", correct: "Ich bringe einen Regenschirm mit, weil es regnen könnte." }
    ]
  },
  // Bài tập 12: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Er bleibt zu Hause, ", " er sich nicht gut fühlt."], gaps: ["weil"] },
      { text: ["Ich esse weniger Zucker, ", " es gesünder ist."], gaps: ["weil"] },
      { text: ["Wir machen Urlaub, ", " wir eine Pause brauchen."], gaps: ["weil"] },
      { text: ["Sie lernt fleißig, ", " sie die Prüfung bestehen will."], gaps: ["weil"] },
      { text: ["Ich nehme die Treppe, ", " sie gesünder ist als der Aufzug."], gaps: ["weil"] }
    ]
  },
  // Bài tập 13: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich lese ein Buch. Ich habe Freizeit. (weil)", correct: "Ich lese ein Buch, weil ich Freizeit habe." },
      { hint: "Er geht ins Fitnessstudio. Er möchte Muskeln aufbauen. (weil)", correct: "Er geht ins Fitnessstudio, weil er Muskeln aufbauen möchte." },
      { hint: "Wir fahren ans Meer. Wir lieben das Wasser. (weil)", correct: "Wir fahren ans Meer, weil wir das Wasser lieben." },
      { hint: "Sie kauft Bioprodukte. Sie sind gesünder. (weil)", correct: "Sie kauft Bioprodukte, weil sie gesünder sind." },
      { hint: "Ich lerne Spanisch. Ich will nach Spanien reisen. (weil)", correct: "Ich lerne Spanisch, weil ich nach Spanien reisen will." }
    ]
  },
  // Bài tập 14: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Er fährt langsam, ", " die Straße nass ist."], gaps: ["weil"] },
      { text: ["Ich esse viel Gemüse, ", " es gesund ist."], gaps: ["weil"] },
      { text: ["Wir bleiben drinnen, ", " es draußen kalt ist."], gaps: ["weil"] },
      { text: ["Sie arbeitet lange, ", " sie viel zu tun hat."], gaps: ["weil"] },
      { text: ["Ich gehe früh schlafen, ", " ich morgen früh aufstehen muss."], gaps: ["weil"] }
    ]
  },
  // Bài tập 15: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich trinke Tee. Ich mag seinen Geschmack. (weil)", correct: "Ich trinke Tee, weil ich seinen Geschmack mag." },
      { hint: "Er joggt jeden Morgen. Er möchte fit bleiben. (weil)", correct: "Er joggt jeden Morgen, weil er fit bleiben möchte." },
      { hint: "Wir kaufen eine neue Kaffeemaschine. Die alte ist kaputt. (weil)", correct: "Wir kaufen eine neue Kaffeemaschine, weil die alte kaputt ist." },
      { hint: "Sie trägt einen Hut. Die Sonne scheint stark. (weil)", correct: "Sie trägt einen Hut, weil die Sonne stark scheint." },
      { hint: "Ich nehme eine Jacke mit. Es ist windig. (weil)", correct: "Ich nehme eine Jacke mit, weil es windig ist." }
    ]
  },
  // Bài tập 16: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich stehe früh auf. Ich habe viel zu tun. (weil)", correct: "Ich stehe früh auf, weil ich viel zu tun habe." },
      { hint: "Er trinkt Kaffee. Er ist müde. (weil)", correct: "Er trinkt Kaffee, weil er müde ist." },
      { hint: "Wir kaufen ein Geschenk. Es ist Marias Geburtstag. (weil)", correct: "Wir kaufen ein Geschenk, weil es Marias Geburtstag ist." },
      { hint: "Sie nimmt eine Jacke mit. Es ist kalt draußen. (weil)", correct: "Sie nimmt eine Jacke mit, weil es kalt draußen ist." },
      { hint: "Ich fahre mit dem Fahrrad. Das Wetter ist schön. (weil)", correct: "Ich fahre mit dem Fahrrad, weil das Wetter schön ist." }
    ]
  },
  // Bài tập 17: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Ich esse Schokolade, ", " sie mir schmeckt."], gaps: ["weil"] },
      { text: ["Er liest ein Buch, ", " er sich entspannen möchte."], gaps: ["weil"] },
      { text: ["Wir hören Musik, ", " wir Musik lieben."], gaps: ["weil"] },
      { text: ["Sie bleibt zu Hause, ", " sie sich nicht wohl fühlt."], gaps: ["weil"] },
      { text: ["Ich lerne Deutsch, ", " ich in Deutschland studieren möchte."], gaps: ["weil"] }
    ]
  },
  // Bài tập 18: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich gehe ins Bett. Ich bin müde. (weil)", correct: "Ich gehe ins Bett, weil ich müde bin." },
      { hint: "Er kauft ein Fahrrad. Sein Auto ist kaputt. (weil)", correct: "Er kauft ein Fahrrad, weil sein Auto kaputt ist." },
      { hint: "Wir trinken Tee. Es ist kalt draußen. (weil)", correct: "Wir trinken Tee, weil es kalt draußen ist." },
      { hint: "Sie nimmt eine Sonnenbrille mit. Die Sonne scheint stark. (weil)", correct: "Sie nimmt eine Sonnenbrille mit, weil die Sonne stark scheint." },
      { hint: "Ich esse Gemüse. Es ist gesund. (weil)", correct: "Ich esse Gemüse, weil es gesund ist." }
    ]
  },
  // Bài tập 19: Hoàn thành câu với liên từ phù hợp
  {
    type: "cloze",
    sentences: [
      { text: ["Er fährt langsam, ", " die Straße rutschig ist."], gaps: ["weil"] },
      { text: ["Ich koche selbst, ", " ich gerne koche."], gaps: ["weil"] },
      { text: ["Wir machen Sport, ", " es uns Spaß macht."], gaps: ["weil"] },
      { text: ["Sie kauft Bio-Produkte, ", " sie gesünder sind."], gaps: ["weil"] },
      { text: ["Ich nehme den Zug, ", " er schneller als das Auto ist."], gaps: ["weil"] }
    ]
  },
  // Bài tập 20: Kết hợp câu với liên từ thích hợp
  {
    type: "rewrite",
    sentences: [
      { hint: "Ich gehe schwimmen. Ich liebe das Wasser. (weil)", correct: "Ich gehe schwimmen, weil ich das Wasser liebe." },
      { hint: "Er geht ins Museum. Er interessiert sich für Kunst. (weil)", correct: "Er geht ins Museum, weil er sich für Kunst interessiert." },
      { hint: "Wir fahren in die Berge. Wir mögen die Natur. (weil)", correct: "Wir fahren in die Berge, weil wir die Natur mögen." },
      { hint: "Sie trägt einen Hut. Die Sonne scheint. (weil)", correct: "Sie trägt einen Hut, weil die Sonne scheint." },
      { hint: "Ich nehme meine Kamera mit. Ich mache gerne Fotos. (weil)", correct: "Ich nehme meine Kamera mit, weil ich gerne Fotos mache." }
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Bài Tập Tiếng Đức - Nebensätze (A2)</h1>
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