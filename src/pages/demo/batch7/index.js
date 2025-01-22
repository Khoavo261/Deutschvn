import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'verbinden', prateritum: 'verband', perfekt: 'verbunden', meaning: 'kết nối, liên kết' },
  { verb: 'verzeihen', prateritum: 'verzieh', perfekt: 'verziehen', meaning: 'tha thứ' },
  { verb: 'vermeiden', prateritum: 'vermied', perfekt: 'vermieden', meaning: 'tránh né' },
  { verb: 'betrügen', prateritum: 'betrog', perfekt: 'betrogen', meaning: 'lừa dối' },
  { verb: 'beweisen', prateritum: 'bewies', perfekt: 'bewiesen', meaning: 'chứng minh' },
  { verb: 'empfinden', prateritum: 'empfand', perfekt: 'empfunden', meaning: 'cảm nhận' },
  { verb: 'erfinden', prateritum: 'erfand', perfekt: 'erfunden', meaning: 'phát minh' },
  { verb: 'gebären', prateritum: 'gebar', perfekt: 'geboren', meaning: 'sinh ra' },
  { verb: 'genießen', prateritum: 'genoss', perfekt: 'genossen', meaning: 'thưởng thức' },
  { verb: 'gewinnen', prateritum: 'gewann', perfekt: 'gewonnen', meaning: 'chiến thắng' },
  { verb: 'gleichen', prateritum: 'glich', perfekt: 'geglichen', meaning: 'giống' },
  { verb: 'greifen', prateritum: 'griff', perfekt: 'gegriffen', meaning: 'nắm, chụp' },
  { verb: 'klingen', prateritum: 'klang', perfekt: 'geklungen', meaning: 'vang, nghe có vẻ' },
  { verb: 'leiden', prateritum: 'litt', perfekt: 'gelitten', meaning: 'chịu đựng' },
  { verb: 'leihen', prateritum: 'lieh', perfekt: 'geliehen', meaning: 'mượn' },
  { verb: 'meiden', prateritum: 'mied', perfekt: 'gemieden', meaning: 'tránh né' },
  { verb: 'pfeifen', prateritum: 'pfiff', perfekt: 'gepfiffen', meaning: 'huýt sáo' },
  { verb: 'ringen', prateritum: 'rang', perfekt: 'gerungen', meaning: 'đấu tranh, vật lộn' },
  { verb: 'scheiden', prateritum: 'schied', perfekt: 'geschieden', meaning: 'chia tách, ly hôn' },
  { verb: 'scheinen', prateritum: 'schien', perfekt: 'geschienen', meaning: 'chiếu sáng, dường như' },
];

const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 7</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;