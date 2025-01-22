import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'beginnen', prateritum: 'begann', perfekt: 'begonnen', meaning: 'bắt đầu' },
  { verb: 'bewerben', prateritum: 'bewarb', perfekt: 'beworben', meaning: 'ứng tuyển' },
  { verb: 'empfehlen', prateritum: 'empfahl', perfekt: 'empfohlen', meaning: 'khuyên, giới thiệu' },
  { verb: 'geschehen', prateritum: 'geschah', perfekt: 'geschehen', meaning: 'xảy ra' },
  { verb: 'helfen', prateritum: 'half', perfekt: 'geholfen', meaning: 'giúp đỡ' },
  { verb: 'laden', prateritum: 'lud', perfekt: 'geladen', meaning: 'tải, mời' },
  { verb: 'lesen', prateritum: 'las', perfekt: 'gelesen', meaning: 'đọc' },
  { verb: 'messen', prateritum: 'maß', perfekt: 'gemessen', meaning: 'đo' },
  { verb: 'raten', prateritum: 'riet', perfekt: 'geraten', meaning: 'khuyên bảo, đoán' },
  { verb: 'schlagen', prateritum: 'schlug', perfekt: 'geschlagen', meaning: 'đánh' },
  { verb: 'schließen', prateritum: 'schloss', perfekt: 'geschlossen', meaning: 'đóng' },
  { verb: 'schreiben', prateritum: 'schrieb', perfekt: 'geschrieben', meaning: 'viết' },
  { verb: 'schreiten', prateritum: 'schritt', perfekt: 'geschritten', meaning: 'bước đi' },
  { verb: 'schwören', prateritum: 'schwor', perfekt: 'geschworen', meaning: 'thề' },
  { verb: 'singen', prateritum: 'sang', perfekt: 'gesungen', meaning: 'hát' },
  { verb: 'sinken', prateritum: 'sank', perfekt: 'gesunken', meaning: 'chìm xuống' },
  { verb: 'springen', prateritum: 'sprang', perfekt: 'gesprungen', meaning: 'nhảy' },
  { verb: 'stinken', prateritum: 'stank', perfekt: 'gestunken', meaning: 'bốc mùi' },
  { verb: 'streiten', prateritum: 'stritt', perfekt: 'gestritten', meaning: 'cãi nhau' },
  { verb: 'verbergen', prateritum: 'verbarg', perfekt: 'verborgen', meaning: 'giấu giếm' },
];

const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 6</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;