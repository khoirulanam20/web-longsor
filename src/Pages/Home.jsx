import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import InfoCard from "../Components/InfoCard";
import { setCards } from "../features/infoCard/infoCardSlice";

function Home() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.infoCard.cards);

  useEffect(() => {
    // Dispatch an action to set initial cards data
    dispatch(setCards([
      {
        title: "Apa Itu Tanah Longsor?",
        text: "",
        buttonLabel: "Learn More",
        additionalText: "Badan Nasional Penanggulangan Bencana (BNPB) mendefinisikan tanah longsor sebagai salah satu jenis gerakan massa tanah atau batuan, ataupun percampuran keduanya, yang menuruni atau keluar lereng akibat terganggunya kestabilan tanah atau batuan penyusun lereng."
      },
      {
        title: "Mitigasi Tanah Longsor",
        text: "Cara-cara Mitigasi saat tanah longsor.",
        buttonLabel: "Learn More",
        additionalText: `Jangan panik dan tetap tenang, karena kondisi panik akan mengakibatkan kita tidak dapat bertindak tepat.
            Segera tinggalkan rumah, jika tanah longsor terjadi di sekitar rumah kita.
            Berlindunglah ke tempat yang aman dan jangan mendekati daerah longsor karena longsor susulan masih mungkin terjadi.
            Bila memungkinkan bantu keluarga dan orang lain yang mengalami situasi sulit akibat longsor.
            Hubungi petugas di lingkungan tempat tinggal.
            Jika kondisi di sekitar tempat kita tinggal membahayakan, mengungsilah.
            Pantau terus informasi, apabila informasi menyatakan kondisi belum aman, jangan dulu kembali ke rumah.`
      }
    ]));
  }, [dispatch]);

  return (
    <div>
      <center><h1>Selamat Datang Di Tanggap Darurat Tanah Longsor</h1></center>
      <div className="container-fluid mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Bencana Tanah Longsor Di Bogor</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/hero2.webp`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>Penanggulangan Tanah Longsor</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <InfoCard 
            key={index}
            title={card.title}
            text={card.text}
            buttonLabel={card.buttonLabel}
            additionalText={card.additionalText}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
