import {
	Box,
	Button,
	Flex,
	Heading,
	SimpleGrid,
	Stack,
	Tag,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { useColorModeValue } from "@/components/ui/color-mode";

interface FormCardData {
	id: string;
	title: string;
	description: string;
	tags: string[];
	route: string;
}

const forms: FormCardData[] = [
	{
		id: "basic-form",
		title: "Formulario Básico",
		description:
			"Registro simple con validación elegante y minimalista para comenzar rápidamente.",
		tags: ["React", "TypeScript", "Responsive"],
		route: "/form-basic",
	},
	{
		id: "advanced-form",
		title: "Formulario Avanzado",
		description:
			"Validación compleja con campos dinámicos y múltiples pasos para flujos avanzados.",
		tags: ["react-hook-form", "zod"],
		route: "/form-advanced",
	},
];

export function HomePage() {
	const cardBg = useColorModeValue("white", "gray.800");
	const cardShadow = "0 1px 4px rgba(0, 0, 0, 0.05)";
	const cardShadowHover = "0 2px 6px rgba(0, 0, 0, 0.08)";

	return (
		<VStack gap="6" textAlign="left" w="full">
			{/* Título y descripción */}
			<Heading size="4xl" color={useColorModeValue("gray.800", "white")}>
				Forms with React
			</Heading>
			<Text
				fontSize="md"
				textAlign="center"
				color={useColorModeValue("gray.600", "gray.400")}
				maxW="lg"
				mb="6"
			>
				Ejemplos de formularios modernos con validaciones y diseño elegante
				usando React y Chakra UI.
			</Text>

			{/* Grid de Cards */}
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				gap="10"
				justifyItems="center"
				alignItems="center"
				w="full"
			>
				{forms.map((form) => (
					<Box
						key={form.id}
						bg={cardBg}
						borderRadius="lg"
						boxShadow={cardShadow}
						p="6"
						maxW="sm"
						_hover={{
							boxShadow: cardShadowHover,
							transform: "translateY(-2px)",
						}}
						transition="all 0.2s ease-in-out"
					>
						<Stack gap="3">
							<Heading size="md" color={useColorModeValue("gray.800", "white")}>
								{form.title}
							</Heading>

							<Text
								fontSize="sm"
								color={useColorModeValue("gray.600", "gray.300")}
							>
								{form.description}
							</Text>

							<Flex wrap="wrap" gap="2">
								{form.tags.map((tag) => (
									<Tag.Root
										key={tag}
										size="md"
										variant="subtle"
										borderRadius="full"
										bg="pink.50"
										color="pink.700"
										px="3"
										py="1"
										mt="2"
										mb="4"
									>
										<Tag.Label>{tag}</Tag.Label>
									</Tag.Root>
								))}
							</Flex>

							<Link to={form.route}>
								<Button
									w="full"
									size="md"
									bg="#A83265"
									color="white"
									fontWeight="bold"
									borderRadius="md"
									_hover={{ bg: "#8C2855" }}
									mt="2"
								>
									Ver ejemplo
								</Button>
							</Link>
						</Stack>
					</Box>
				))}
			</SimpleGrid>
		</VStack>
	);
}
