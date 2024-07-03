import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5 mb-5"> 
      <Row>
        <Col md={6}>
          <h1 className="mb-4">Tanggap Darurat Tanah Longsor</h1>
          <p>
            Tanggap Darurat Tanah Longsor adalah platform informasi dan layanan untuk penanggulangan bencana tanah longsor. Kami berkomitmen untuk menyediakan informasi terkini, tips mitigasi, dan dukungan bagi masyarakat yang terdampak bencana ini.
          </p>
          <p>
            Platform ini dikembangkan oleh mahasiswa Universitas Dian Nuswantoro sebagai bagian dari proyek pengembangan perangkat lunuk untuk memfasilitasi penanggulangan bencana dengan lebih efektif.
          </p>
          <h3 className="mt-5 mb-3">Tujuan Kami</h3>
          <p>
            Kami bertujuan untuk meningkatkan kesadaran dan kesiapsiagaan masyarakat dalam menghadapi bahaya longsor melalui edukasi dan informasi yang akurat.
          </p>
          <h3 className="mt-5 mb-3">Layanan Kami</h3>
          <ul>
            <li>Penyediaan informasi terkini tentang risiko dan mitigasi longsor.</li>
            <li>Dukungan psikososial dan bantuan bagi korban bencana.</li>
            <li>Kolaborasi dengan pihak terkait untuk meningkatkan koordinasi dalam penanggulangan bencana.</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={`${process.env.PUBLIC_URL}/images/about-image.jpg`} className="img-fluid" alt="About Us" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
