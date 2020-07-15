import React from "react";
import { Container, Row, Col } from "shards-react";

const ShowState = ({ state, fields }) => (
  <Container
    style={{
      marginBottom: "1em",
      fontSize: "18pt",
    }}
  >
    {fields.map((field) => (
      <Row key={field}>
        <Col xs="2" style={{ fontWeight: "bold" }}>
          {field}
        </Col>
        <Col xs="10">{state[field]}</Col>
      </Row>
    ))}
  </Container>
);

export default ShowState;
