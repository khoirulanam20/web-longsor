// src/Components/InfoCard.jsx
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function InfoCard({ title, text, buttonLabel, buttonLink, additionalText}) {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {showMore && <Card.Text>{additionalText}</Card.Text>}
        <Button variant="dark" onClick={handleLearnMoreClick}>
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
