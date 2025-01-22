import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'wissen', prateritum: 'wusste', perfekt: 'gewusst', meaning: 'biết' },
  { verb: 'bringen', prateritum: 'brachte', perfekt: 'gebracht', meaning: 'mang' },
  { verb: 'denken', prateritum: 'dachte', perfekt: 'gedacht', meaning: 'nghĩ' },
  { verb: 'vergessen', prateritum: 'vergaß', perfekt: 'vergessen', meaning: 'quên' },
  { verb: 'fliegen', prateritum: 'flog', perfekt: 'geflogen', meaning: 'bay' },
  { verb: 'schwimmen', prateritum: 'schwamm', perfekt: 'geschwommen', meaning: 'bơi' },
  { verb: 'ziehen', prateritum: 'zog', perfekt: 'gezogen', meaning: 'kéo' },
  { verb: 'sitzen', prateritum: 'saß', perfekt: 'gesessen', meaning: 'ngồi' },
  { verb: 'schlafen', prateritum: 'schlief', perfekt: 'geschlafen', meaning: 'ngủ' },
  { verb: 'halten', prateritum: 'hielt', perfekt: 'gehalten', meaning: 'giữ' },
  { verb: 'rufen', prateritum: 'rief', perfekt: 'gerufen', meaning: 'gọi' },
  { verb: 'schlagen', prateritum: 'schlug', perfekt: 'geschlagen', meaning: 'đánh' },
  { verb: 'lassen', prateritum: 'ließ', perfekt: 'gelassen', meaning: 'để, cho phép' },
  { verb: 'fallen', prateritum: 'fiel', perfekt: 'gefallen', meaning: 'ngã' },
  { verb: 'bekommen', prateritum: 'bekam', perfekt: 'bekommen', meaning: 'nhận' },
  { verb: 'bieten', prateritum: 'bot', perfekt: 'geboten', meaning: 'cung cấp' },
  { verb: 'gewinnen', prateritum: 'gewann', perfekt: 'gewonnen', meaning: 'thắng' },
  { verb: 'verlieren', prateritum: 'verlor', perfekt: 'verloren', meaning: 'mất, thua' },
  { verb: 'treffen', prateritum: 'traf', perfekt: 'getroffen', meaning: 'gặp' },
  { verb: 'bitten', prateritum: 'bat', perfekt: 'gebeten', meaning: 'yêu cầu' },
];

const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 2</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;
