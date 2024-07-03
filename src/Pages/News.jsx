import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const NewsList = () => {
  const { news, loading, error } = useContext(NewsContext);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        {news.map((article, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="card h-100">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
