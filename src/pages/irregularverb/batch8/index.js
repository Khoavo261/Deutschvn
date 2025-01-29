import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'schieben', prateritum: 'schob', perfekt: 'geschoben', meaning: 'đẩy' },
  { verb: 'schießen', prateritum: 'schoss', perfekt: 'geschossen', meaning: 'bắn' },
  { verb: 'schleichen', prateritum: 'schlich', perfekt: 'geschlichen', meaning: 'đi rón rén' },
  { verb: 'schlingen', prateritum: 'schlang', perfekt: 'geschlungen', meaning: 'nuốt chửng' },
  { verb: 'schmelzen', prateritum: 'schmolz', perfekt: 'geschmolzen', meaning: 'tan chảy' },
  { verb: 'schneiden', prateritum: 'schnitt', perfekt: 'geschnitten', meaning: 'cắt' },
  { verb: 'schreien', prateritum: 'schrie', perfekt: 'geschrien', meaning: 'hét, kêu la' },
  { verb: 'schwellen', prateritum: 'schwoll', perfekt: 'geschwollen', meaning: 'sưng lên' },
  { verb: 'schwingen', prateritum: 'schwang', perfekt: 'geschwungen', meaning: 'đung đưa, vung' },
  { verb: 'senden', prateritum: 'sandte', perfekt: 'gesandt', meaning: 'gửi' },
  { verb: 'sinken', prateritum: 'sank', perfekt: 'gesunken', meaning: 'chìm xuống' },
  { verb: 'sitzen', prateritum: 'saß', perfekt: 'gesessen', meaning: 'ngồi' },
  { verb: 'spinnen', prateritum: 'spann', perfekt: 'gesponnen', meaning: 'kéo sợi, bịa chuyện' },
  { verb: 'springen', prateritum: 'sprang', perfekt: 'gesprungen', meaning: 'nhảy' },
  { verb: 'stechen', prateritum: 'stach', perfekt: 'gestochen', meaning: 'châm, đâm' },
  { verb: 'stehen', prateritum: 'stand', perfekt: 'gestanden', meaning: 'đứng' },
  { verb: 'stehlen', prateritum: 'stahl', perfekt: 'gestohlen', meaning: 'ăn trộm' },
  { verb: 'steigen', prateritum: 'stieg', perfekt: 'gestiegen', meaning: 'leo lên' },
  { verb: 'sterben', prateritum: 'starb', perfekt: 'gestorben', meaning: 'chết' },
  { verb: 'stinken', prateritum: 'stank', perfekt: 'gestunken', meaning: 'bốc mùi' },
];

const About = () => {
    return (
      <Layout
        title="Về Chúng Tôi"
        description="Trang about trong mục Demo"
      >
          {/* Cloze Test Section */}
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 8</h2>
            <ClozeTestIrregular data={irregularVerbData} />
          </div>
      </Layout>
    );
  };
  
  export default About;