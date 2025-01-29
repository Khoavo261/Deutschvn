import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
  { verb: 'schreien', prateritum: 'schrie', perfekt: 'geschrien', meaning: 'hét, kêu la' },
  { verb: 'schneiden', prateritum: 'schnitt', perfekt: 'geschnitten', meaning: 'cắt' },
  { verb: 'springen', prateritum: 'sprang', perfekt: 'gesprungen', meaning: 'nhảy' },
  { verb: 'steigen', prateritum: 'stieg', perfekt: 'gestiegen', meaning: 'leo, tăng' },
  { verb: 'tragen', prateritum: 'trug', perfekt: 'getragen', meaning: 'mang, vác' },
  { verb: 'treffen', prateritum: 'traf', perfekt: 'getroffen', meaning: 'gặp' },
  { verb: 'vergessen', prateritum: 'vergaß', perfekt: 'vergessen', meaning: 'quên' },
  { verb: 'waschen', prateritum: 'wusch', perfekt: 'gewaschen', meaning: 'rửa' },
  { verb: 'wachsen', prateritum: 'wuchs', perfekt: 'gewachsen', meaning: 'lớn lên, phát triển' },
  { verb: 'werfen', prateritum: 'warf', perfekt: 'geworfen', meaning: 'ném' },
  { verb: 'ziehen', prateritum: 'zog', perfekt: 'gezogen', meaning: 'kéo, lôi' },
  { verb: 'binden', prateritum: 'band', perfekt: 'gebunden', meaning: 'buộc, trói' },
  { verb: 'brennen', prateritum: 'brannte', perfekt: 'gebrannt', meaning: 'cháy, đốt' },
  { verb: 'denken', prateritum: 'dachte', perfekt: 'gedacht', meaning: 'nghĩ' },
  { verb: 'kennen', prateritum: 'kannte', perfekt: 'gekannt', meaning: 'biết, quen thuộc' },
  { verb: 'nennen', prateritum: 'nannte', perfekt: 'genannt', meaning: 'gọi tên' },
  { verb: 'rennen', prateritum: 'rannte', perfekt: 'gerannt', meaning: 'chạy nhanh' },
  { verb: 'senden', prateritum: 'sandte', perfekt: 'gesandt', meaning: 'gửi' },
  { verb: 'wenden', prateritum: 'wandte', perfekt: 'gewandt', meaning: 'xoay, quay lại' },
  { verb: 'wissen', prateritum: 'wusste', perfekt: 'gewusst', meaning: 'biết' },
];


const About = () => {
  return (
    <Layout
      title="Về Chúng Tôi"
      description="Trang about trong mục Demo"
    >
        {/* Cloze Test Section */}
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 5</h2>
          <ClozeTestIrregular data={irregularVerbData} />
        </div>
    </Layout>
  );
};

export default About;