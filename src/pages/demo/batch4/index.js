import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'treiben', prateritum: 'trieb', perfekt: 'getrieben', meaning: 'điều khiển, thúc đẩy' },
  { verb: 'verzeihen', prateritum: 'verzieh', perfekt: 'verziehen', meaning: 'tha thứ' },
  { verb: 'lügen', prateritum: 'log', perfekt: 'gelogen', meaning: 'nói dối' },
  { verb: 'gleichen', prateritum: 'glich', perfekt: 'geglichen', meaning: 'giống' },
  { verb: 'schmelzen', prateritum: 'schmolz', perfekt: 'geschmolzen', meaning: 'tan chảy' },
  { verb: 'brechen', prateritum: 'brach', perfekt: 'gebrochen', meaning: 'làm gãy, phá vỡ' },
  { verb: 'fliehen', prateritum: 'floh', perfekt: 'geflohen', meaning: 'chạy trốn' },
  { verb: 'gelten', prateritum: 'galt', perfekt: 'gegolten', meaning: 'có giá trị, áp dụng' },
  { verb: 'rufen', prateritum: 'rief', perfekt: 'gerufen', meaning: 'gọi' },
  { verb: 'hängen', prateritum: 'hing', perfekt: 'gehangen', meaning: 'treo' },
  { verb: 'fangen', prateritum: 'fing', perfekt: 'gefangen', meaning: 'bắt, nắm' },
  { verb: 'hehlen', prateritum: 'hahl', perfekt: 'gehehlt', meaning: 'che giấu' },
  { verb: 'meiden', prateritum: 'mied', perfekt: 'gemieden', meaning: 'tránh né' },
  { verb: 'biegen', prateritum: 'bog', perfekt: 'gebogen', meaning: 'bẻ cong' },
  { verb: 'wiegen', prateritum: 'wog', perfekt: 'gewogen', meaning: 'cân' },
  { verb: 'fressen', prateritum: 'fraß', perfekt: 'gefressen', meaning: 'ăn (dùng cho động vật)' },
  { verb: 'gewinnen', prateritum: 'gewann', perfekt: 'gewonnen', meaning: 'chiến thắng' },
  { verb: 'saufen', prateritum: 'soff', perfekt: 'gesoffen', meaning: 'uống (dùng cho động vật)' },
  { verb: 'reiten', prateritum: 'ritt', perfekt: 'geritten', meaning: 'cưỡi' },
  { verb: 'stehlen', prateritum: 'stahl', perfekt: 'gestohlen', meaning: 'ăn trộm' },
];

const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 4</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;