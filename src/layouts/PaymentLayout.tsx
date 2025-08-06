// PaymentLayout.tsx
import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FormPayment } from "@/pages/FormPayment";

export function PaymentLayout() {
	const bg = useColorModeValue("gray.100", "gray.800");

	return (
		<Box minH="100vh" bg={bg} py="10" px="4">
			<Stack
				direction={{ base: "column", md: "row" }}
				gap="10"
				maxW="6xl"
				mx="auto"
				align="flex-start"
			>
				{/* Información de Producto */}
				<VStack w="full" maxW="xl" gap="6">
					<Box
						bg="white"
						_dark={{ bg: "gray.700" }}
						p="6"
						rounded="lg"
						shadow="sm"
						w="full"
					>
						<Stack direction="row" gap="4" align="center">
							<Image
								src="https://media.falabella.com/falabellaPE/18229114_1/w=1500,h=1500,fit=pad" // Usa la ruta correcta
								alt="Mouse Logitech"
								boxSize="80px"
								objectFit="contain"
							/>
							<Box>
								<Text fontWeight="bold">Mouse Logitech G203 - $30</Text>
								<Text fontSize="sm" color="gray.600">
									Con la tecnología LIGHTSYNC, un sensor para juegos y un diseño
									clásico de 6 botones, animarás tu acción y tu espacio.
								</Text>
								<Text fontSize="sm" mt="1" fontWeight="medium">
									Color: Negro
								</Text>
							</Box>
						</Stack>
					</Box>
				</VStack>

				{/* Formulario completo (incluye entrega y pago) */}
				<FormPayment />
			</Stack>
		</Box>
	);
}
