import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
    { verb: 'wiegen', prateritum: 'wog', perfekt: 'gewogen', meaning: 'cân' },
    { verb: 'wissen', prateritum: 'wusste', perfekt: 'gewusst', meaning: 'biết' },
    { verb: 'ziehen', prateritum: 'zog', perfekt: 'gezogen', meaning: 'kéo, lôi' },
    { verb: 'zwingen', prateritum: 'zwang', perfekt: 'gezwungen', meaning: 'ép buộc, bắt buộc' },
    { verb: 'blasen', prateritum: 'blies', perfekt: 'geblasen', meaning: 'thổi' },
    { verb: 'braten', prateritum: 'briet', perfekt: 'gebraten', meaning: 'rán, nướng' },
    { verb: 'empfangen', prateritum: 'empfing', perfekt: 'empfangen', meaning: 'nhận, tiếp đón' },
    { verb: 'erschrecken', prateritum: 'erschrak', perfekt: 'erschrocken', meaning: 'hoảng sợ' },
    { verb: 'frieren', prateritum: 'fror', perfekt: 'gefroren', meaning: 'lạnh, đông cứng' },
    { verb: 'geraten', prateritum: 'geriet', perfekt: 'geraten', meaning: 'rơi vào, gặp phải' },
    { verb: 'gießen', prateritum: 'goss', perfekt: 'gegossen', meaning: 'tưới, rót' },
    { verb: 'graben', prateritum: 'grub', perfekt: 'gegraben', meaning: 'đào' },
    { verb: 'hängen', prateritum: 'hing', perfekt: 'gehangen', meaning: 'treo' },
    { verb: 'heben', prateritum: 'hob', perfekt: 'gehoben', meaning: 'nâng' },
    { verb: 'klingen', prateritum: 'klang', perfekt: 'geklungen', meaning: 'nghe có vẻ' },
    { verb: 'kriechen', prateritum: 'kroch', perfekt: 'gekrochen', meaning: 'bò, trườn' },
    { verb: 'leiden', prateritum: 'litt', perfekt: 'gelitten', meaning: 'chịu đựng' },
    { verb: 'lügen', prateritum: 'log', perfekt: 'gelogen', meaning: 'nói dối' },
    { verb: 'pfeifen', prateritum: 'pfiff', perfekt: 'gepfiffen', meaning: 'huýt sáo' },
    { verb: 'reißen', prateritum: 'riss', perfekt: 'gerissen', meaning: 'xé, kéo mạnh' },
  ];

const About = () => {
    return (
      <Layout
        title="Về Chúng Tôi"
        description="Trang about trong mục Demo"
      >
          {/* Cloze Test Section */}
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 10</h2>
            <ClozeTestIrregular data={irregularVerbData} />
          </div>
      </Layout>
    );
  };
  
  export default About;