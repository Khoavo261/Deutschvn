import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'lassen', prateritum: 'ließ', perfekt: 'gelassen', meaning: 'để, cho phép' },
  { verb: 'fallen', prateritum: 'fiel', perfekt: 'gefallen', meaning: 'ngã' },
  { verb: 'bekommen', prateritum: 'bekam', perfekt: 'bekommen', meaning: 'nhận' },
  { verb: 'bieten', prateritum: 'bot', perfekt: 'geboten', meaning: 'cung cấp' },
  { verb: 'gewinnen', prateritum: 'gewann', perfekt: 'gewonnen', meaning: 'thắng' },
  { verb: 'verlieren', prateritum: 'verlor', perfekt: 'verloren', meaning: 'mất, thua' },
  { verb: 'treffen', prateritum: 'traf', perfekt: 'getroffen', meaning: 'gặp' },
  { verb: 'bitten', prateritum: 'bat', perfekt: 'gebeten', meaning: 'yêu cầu' },
  { verb: 'scheinen', prateritum: 'schien', perfekt: 'geschienen', meaning: 'chiếu sáng, dường như' },
  { verb: 'reiben', prateritum: 'rieb', perfekt: 'gerieben', meaning: 'chà, xát' },
  { verb: 'gelingen', prateritum: 'gelang', perfekt: 'gelungen', meaning: 'thành công' },
  { verb: 'binden', prateritum: 'band', perfekt: 'gebunden', meaning: 'buộc, trói' },
  { verb: 'riechen', prateritum: 'roch', perfekt: 'gerochen', meaning: 'ngửi' },
  { verb: 'springen', prateritum: 'sprang', perfekt: 'gesprungen', meaning: 'nhảy' },
  { verb: 'steigen', prateritum: 'stieg', perfekt: 'gestiegen', meaning: 'leo lên, tăng lên' },
  { verb: 'verschwinden', prateritum: 'verschwand', perfekt: 'verschwunden', meaning: 'biến mất' },
  { verb: 'schießen', prateritum: 'schoss', perfekt: 'geschossen', meaning: 'bắn' },
  { verb: 'leihen', prateritum: 'lieh', perfekt: 'geliehen', meaning: 'mượn' },
  { verb: 'heben', prateritum: 'hob', perfekt: 'gehoben', meaning: 'nâng' },
  { verb: 'scheiden', prateritum: 'schied', perfekt: 'geschieden', meaning: 'chia tách, ly hôn' },
];

const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 3</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;