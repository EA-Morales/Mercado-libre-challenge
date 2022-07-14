import { Input, Image, Stack, Container } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import mlpuntos from "../assets/ml-puntos.webp";

const Navbar = () => {
  return (
    <Container bg="primary.500" maxW="full">
      <Stack direction={"column"}>
        <Stack direction={"row"} px={14} py={2} spacing="14">
          <Image src={logo} objectFit="contain" />
          <Input
            _placeholder={{
              opacity: 0.75,
              color: "gray.400",
              fontSize: "14px",
            }}
            placeholder="Buscar productos, marcas y mas..."
            variant="filled"
            boxShadow="base"
            focusBorderColor="none"
          />

          <Image src={mlpuntos} w="340px" h="39px" />
        </Stack>
        <Stack></Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
