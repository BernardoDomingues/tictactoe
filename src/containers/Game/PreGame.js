import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useGames } from "../../providers/game";

import InputField from "../../components/FormField";
import Button from "../../components/Button";
import SecondStyleButton from "../../components/SecondStyleButton";

const PreGame = () => {
  const { setUsersData, backToMenu } = useGames();
  const values = { X: "", O: "", Xwins: 0, Owins: 0, draws: 0 };

  const validations = Yup.object().shape({
    X: Yup.string()
      .min(3, "Your name is to short!")
      .max(15, "Your name is to long!")
      .required("Required!"),
    O: Yup.string()
      .min(3, "Your name is to short!")
      .max(15, "Your name is to long!")
      .required("Required!")
      .notOneOf([Yup.ref("X"), null], "Choose different names"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setUsersData(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={validations}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <FormData>
            <Container>
              <InputField name="X" type="string" label="X Player Name:" />
              <InputField name="O" type="string" label="O Player Name:" />
              <Button type="submit" disabled={isSubmitting}>
                Start
              </Button>
              <SecondStyleButton onClick={() => backToMenu()}>
                Back
              </SecondStyleButton>
            </Container>
          </FormData>
        );
      }}
    </Formik>
  );
};

const FormData = styled(Form)`
  font-family: sans-serif;
  display: grid;
  justify-content: center;
  align-items: center;
  height: calc(97vh - 105px);
`;

const Container = styled.div`
  display: grid;
  gap: 20px;
`;

export default PreGame;
