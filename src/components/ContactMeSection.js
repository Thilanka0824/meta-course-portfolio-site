import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  VStack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useSubmit from "../hooks/useSubmit";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  type: Yup.string(),
  comment: Yup.string()
    .min(25, "Must be at least 25 characters")
    .required("Required"),
});

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submit(values.firstName, values.email, values.type, values.comment);
    },
  });

  useEffect(() => {
    if (response) {
      toast({
        title: response.type === "success" ? "Success" : "Error",
        description: response.message,
        status: response.type,
        duration: 5000,
        isClosable: true,
      });

      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, toast, formik]);

  return (
    <Box id="contactme-section" bg="white" h="100vh" p={8}>
      <VStack
        as="form"
        onSubmit={formik.handleSubmit}
        spacing={4}
        align="stretch"
      >
        <FormControl
          id="firstName"
          isInvalid={formik.touched.firstName && formik.errors.firstName}
        >
          <FormLabel>Name</FormLabel>
          <Input type="text" {...formik.getFieldProps("firstName")} />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="email"
          isInvalid={formik.touched.email && formik.errors.email}
        >
          <FormLabel>Email address</FormLabel>
          <Input type="email" {...formik.getFieldProps("email")} />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="type">
          <FormLabel>Type of Enquiry</FormLabel>
          <Select placeholder="Select option" {...formik.getFieldProps("type")}>
            <option value="hireMe">Hire Me</option>
            <option value="openSource">Open Source</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl
          id="comment"
          isInvalid={formik.touched.comment && formik.errors.comment}
        >
          <FormLabel>Message</FormLabel>
          <Textarea {...formik.getFieldProps("comment")} />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
