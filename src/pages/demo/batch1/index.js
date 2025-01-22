import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';


const irregularVerbData = [
  { verb: 'sein', prateritum: 'war', perfekt: 'gewesen', meaning: 'là, thì' },
  { verb: 'haben', prateritum: 'hatte', perfekt: 'gehabt', meaning: 'có' },
  { verb: 'werden', prateritum: 'wurde', perfekt: 'geworden', meaning: 'trở thành' },
  { verb: 'gehen', prateritum: 'ging', perfekt: 'gegangen', meaning: 'đi' },
  { verb: 'kommen', prateritum: 'kam', perfekt: 'gekommen', meaning: 'đến' },
  { verb: 'sehen', prateritum: 'sah', perfekt: 'gesehen', meaning: 'nhìn, xem' },
  { verb: 'essen', prateritum: 'aß', perfekt: 'gegessen', meaning: 'ăn' },
  { verb: 'trinken', prateritum: 'trank', perfekt: 'getrunken', meaning: 'uống' },
  { verb: 'nehmen', prateritum: 'nahm', perfekt: 'genommen', meaning: 'lấy' },
  { verb: 'geben', prateritum: 'gab', perfekt: 'gegeben', meaning: 'cho, đưa' },
  { verb: 'sprechen', prateritum: 'sprach', perfekt: 'gesprochen', meaning: 'nói' },
  { verb: 'fahren', prateritum: 'fuhr', perfekt: 'gefahren', meaning: 'đi (bằng phương tiện)' },
  { verb: 'lesen', prateritum: 'las', perfekt: 'gelesen', meaning: 'đọc' },
  { verb: 'schreiben', prateritum: 'schrieb', perfekt: 'geschrieben', meaning: 'viết' },
  { verb: 'stehen', prateritum: 'stand', perfekt: 'gestanden', meaning: 'đứng' },
  { verb: 'finden', prateritum: 'fand', perfekt: 'gefunden', meaning: 'tìm thấy' },
  { verb: 'bleiben', prateritum: 'blieb', perfekt: 'geblieben', meaning: 'ở lại' },
  { verb: 'liegen', prateritum: 'lag', perfekt: 'gelegen', meaning: 'nằm' },
  { verb: 'laufen', prateritum: 'lief', perfekt: 'gelaufen', meaning: 'chạy' },
  { verb: 'tragen', prateritum: 'trug', perfekt: 'getragen', meaning: 'mang, vác' },
];

const About = () => {
    return (
      <Layout
        title="Về Chúng Tôi"
        description="Trang about trong mục Demo"
      >
          {/* Cloze Test Section */}
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 1</h2>
            <ClozeTestIrregular data={irregularVerbData} />
          </div>
      </Layout>
    );
  };
  
  export default About;