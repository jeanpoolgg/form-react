import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

export function BasicLayout() {
	const bg = useColorModeValue("gray.100", "gray.900");

	return (
		<Box minH="100vh" bg={bg}>
			{/* Botón de modo oscuro/claro */}
			<Flex justify="flex-end" p="4">
				<ColorModeButton />
			</Flex>

			{/* Contenedor centrado */}
			<Container maxW="md" py={10}>
				<Outlet />
			</Container>
		</Box>
	);
}
