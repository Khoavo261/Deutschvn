import React from 'react';
import Layout from '@theme/Layout';
import ClozeTestIrregular from '@site/src/components/ClozeTestIrregular/ClozeTestIrregular';

const irregularVerbData = [
    { verb: 'streichen', prateritum: 'strich', perfekt: 'gestrichen', meaning: 'sơn, gạch bỏ' },
    { verb: 'streiten', prateritum: 'stritt', perfekt: 'gestritten', meaning: 'cãi nhau' },
    { verb: 'tragen', prateritum: 'trug', perfekt: 'getragen', meaning: 'mang, vác' },
    { verb: 'treffen', prateritum: 'traf', perfekt: 'getroffen', meaning: 'gặp' },
    { verb: 'treiben', prateritum: 'trieb', perfekt: 'getrieben', meaning: 'điều khiển, thúc đẩy' },
    { verb: 'treten', prateritum: 'trat', perfekt: 'getreten', meaning: 'bước, đạp' },
    { verb: 'trinken', prateritum: 'trank', perfekt: 'getrunken', meaning: 'uống' },
    { verb: 'tun', prateritum: 'tat', perfekt: 'getan', meaning: 'làm' },
    { verb: 'vergessen', prateritum: 'vergaß', perfekt: 'vergessen', meaning: 'quên' },
    { verb: 'vergleichen', prateritum: 'verglich', perfekt: 'verglichen', meaning: 'so sánh' },
    { verb: 'verlieren', prateritum: 'verlor', perfekt: 'verloren', meaning: 'mất, thua' },
    { verb: 'vermeiden', prateritum: 'vermied', perfekt: 'vermieden', meaning: 'tránh né' },
    { verb: 'verzeihen', prateritum: 'verzieh', perfekt: 'verziehen', meaning: 'tha thứ' },
    { verb: 'wachsen', prateritum: 'wuchs', perfekt: 'gewachsen', meaning: 'lớn lên, phát triển' },
    { verb: 'waschen', prateritum: 'wusch', perfekt: 'gewaschen', meaning: 'rửa' },
    { verb: 'weichen', prateritum: 'wich', perfekt: 'gewichen', meaning: 'nhường chỗ, tránh đường' },
    { verb: 'weisen', prateritum: 'wies', perfekt: 'gewiesen', meaning: 'chỉ dẫn' },
    { verb: 'wenden', prateritum: 'wandte', perfekt: 'gewandt', meaning: 'xoay, quay lại' },
    { verb: 'werben', prateritum: 'warb', perfekt: 'geworben', meaning: 'quảng cáo' },
    { verb: 'werfen', prateritum: 'warf', perfekt: 'geworfen', meaning: 'ném' },
  ];

  const About = () => {
    return (
      <Layout
        title="Về Chúng Tôi"
        description="Trang about trong mục Demo"
      >
          {/* Cloze Test Section */}
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}> Động từ bất quy tắc bảng 9</h2>
            <ClozeTestIrregular data={irregularVerbData} />
          </div>
      </Layout>
    );
  };
  
  export default About;