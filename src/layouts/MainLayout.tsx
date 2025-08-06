import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

export function MainLayout() {
	const bg = useColorModeValue("gray.100", "gray.900");

	return (
		<Box minH="100vh" bg={bg}>
			<Flex justify="flex-end" p="4">
				<ColorModeButton />
			</Flex>
			<Container maxW="4xl" py={10}>
				<Outlet />
			</Container>
		</Box>
	);
}
