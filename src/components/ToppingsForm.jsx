import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  Button,
  Container,
  Row,
  Col,
} from "shards-react";
import { useForm } from "react-hook-form";

import ShowState from "./ShowState";
import Steps from "./Steps";

const ToppingsForm = ({ state, onNext, onPrevious }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: state,
  });
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={2} />
      <ShowState state={state} fields={["status", "type"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Toppings</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Toppings"
          name="toppings"
          invalid={!!errors.toppings}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious} style={{ width: "100%" }}>
              Pizza Type!
            </Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit" style={{ width: "100%" }}>
              Address!
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default ToppingsForm;
