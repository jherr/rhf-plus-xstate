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

const TypeForm = ({ state, onNext }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: state,
  });
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={1} />
      <ShowState state={state} fields={["status"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Type</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Pizza type"
          name="type"
          invalid={!!errors.type}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2, offset: 10 }}>
            <Button type="submit" style={{ width: "100%" }}>
              Toppings!
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default TypeForm;
