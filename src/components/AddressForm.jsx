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

const AddressForm = ({ state, onNext, onPrevious }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: state,
  });
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={3} />
      <ShowState state={state} fields={["status", "type", "toppings"]} />
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>Address</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Address"
          name="address"
          invalid={!!errors.address}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious} style={{ width: "100%" }}>
              Toppings!
            </Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit" style={{ width: "100%" }}>
              Checkout!
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default AddressForm;
