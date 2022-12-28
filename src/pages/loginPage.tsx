import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginFormInputType } from "../appTypes/loginFormInputType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginPage() {
  const toast = useToast();

  // schema validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("ป้อนข้อมูลอีเมล์ด้วย")
      .email("รูปแบบอีเมล์ไม่ถูกต้อง"),
    password: yup
      .string()
      .required("ป้อนข้อมูลรหัสผ่านด้วย")
      .min(3, "รหัสผ่านต้องอย่างน้อย 3 ตัวอักษรขึ้นไป"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputType>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data: LoginFormInputType) => {
    console.log(data);
    toast({
      title: "Login Success.",
      description: JSON.stringify(data),
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log In</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  isLoading={isSubmitting}
                  loadingText="กำลังเข้าระบบ"
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
