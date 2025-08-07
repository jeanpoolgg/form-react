// FormPayment.tsx
import {
	Box,
	Button,
	Field,
	Fieldset,
	Flex,
	HStack,
	Icon,
	Input,
	RadioCard,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Banknote, CreditCard, PackageCheck, Truck } from "lucide-react";
import { useState } from "react";

export function FormPayment() {
	const [method, setMethod] = useState<"card" | "bank">("card");
	const [shipping, setShipping] = useState<"fast" | "free" | "pickup">("fast");

	const subtotal = 30;
	const shippingCost = shipping === "fast" ? 4.99 : 0;
	const total = subtotal + shippingCost;

	return (
		<Box
			bg="white"
			_dark={{ bg: "gray.800" }}
			p="8"
			borderRadius="lg"
			boxShadow="sm"
			w="full"
			maxW="lg"
			transition="all 0.2s ease-in-out"
			_hover={{ boxShadow: "md" }}
		>
			<Fieldset.Root as="form" size="lg" onSubmit={(e) => e.preventDefault()}>
				<Stack gap="6">
					<Text fontSize="xl" fontWeight="bold">
						Detalles de Pago
					</Text>

					{/* Correo */}
					<Field.Root>
						<Field.Label>Correo electrónico</Field.Label>
						<Input placeholder="ejemplo@correo.com" type="email" />
					</Field.Root>

					{/* Método de pago como switch */}
					<Field.Root>
						<Field.Label>Método de pago</Field.Label>
						<Flex gap="4" align="center" w="full">
							<Box
								cursor="pointer"
								as="button"
								onClick={() => setMethod("card")}
								w="full"
								h="80px"
								p="4"
								border="1px solid"
								borderColor={method === "card" ? "black" : "gray.700"}
								rounded="md"
								bg={method === "card" ? "gray.100" : "transparent"}
								color={method === "card" ? "black" : "gray.600"}
								textAlign="left"
								transition="all 0.2s"
							>
								<Flex align="center" gap="3">
									<Icon as={CreditCard} boxSize="5" />
									<Text fontWeight="medium">Tarjeta Débito / Crédito </Text>
								</Flex>
							</Box>

							<Box
								as="button"
								cursor="pointer"
								onClick={() => setMethod("bank")}
								w="full"
								h="80px"
								p="4"
								border="1px solid"
								borderColor={method === "bank" ? "black" : "gray.700"}
								rounded="md"
								bg={method === "bank" ? "gray.100" : "transparent"}
								color={method === "bank" ? "black" : "gray.600"}
								textAlign="left"
								transition="all 0.2s"
							>
								<Flex align="center" gap="3">
									<Icon as={Banknote} boxSize="5" />
									<Text fontWeight="medium">Cuenta Bancaria</Text>
								</Flex>
							</Box>
						</Flex>
					</Field.Root>

					{/* Campos dinámicos según método */}
					<VStack gap="4" pt="1" align="stretch">
						{method === "card" ? (
							<>
								<Field.Root>
									<Field.Label>Nombre en la tarjeta</Field.Label>
									<Input placeholder="Tu nombre completo" />
								</Field.Root>
								<Field.Root>
									<Field.Label>Número de tarjeta</Field.Label>
									<Input placeholder="•••• •••• •••• ••••" />
								</Field.Root>
								<Flex gap="4">
									<Field.Root flex="1">
										<Field.Label>Fecha expiración</Field.Label>
										<Input placeholder="MM/AA" />
									</Field.Root>
									<Field.Root flex="1">
										<Field.Label>CVC</Field.Label>
										<Input placeholder="123" />
									</Field.Root>
								</Flex>
							</>
						) : (
							<>
								<Field.Root>
									<Field.Label>Nombre del propietario</Field.Label>
									<Input placeholder="Tu nombre completo" />
								</Field.Root>
								<Field.Root>
									<Field.Label>Cuenta bancaria</Field.Label>
									<Input placeholder="123-456789-00" />
								</Field.Root>
							</>
						)}
					</VStack>

					{/* Información de entrega con RadioGroup */}
					<Field.Root>
						<Field.Label>Información de Entrega</Field.Label>

						<RadioCard.Root
							value={shipping}
							onValueChange={(val) => {
								if (
									val &&
									typeof val === "object" &&
									"value" in val &&
									(val.value === "fast" || val.value === "pickup")
								) {
									setShipping(val.value);
								}
							}}
						>
							<HStack gap="4" align="stretch" flexWrap="wrap">
								<RadioCard.Item value="fast">
									<RadioCard.ItemHiddenInput />
									<RadioCard.ItemControl>
										<RadioCard.ItemContent>
											<Icon as={Truck} fontSize="2xl" color="gray.500" mb="2" />
											<RadioCard.ItemText>
												$4.99 - Entrega rápida
											</RadioCard.ItemText>
											<RadioCard.ItemDescription>
												2–4 días hábiles. Con seguimiento.
											</RadioCard.ItemDescription>
										</RadioCard.ItemContent>
										<RadioCard.ItemIndicator />
									</RadioCard.ItemControl>
								</RadioCard.Item>

								<RadioCard.Item value="pickup">
									<RadioCard.ItemHiddenInput />
									<RadioCard.ItemControl>
										<RadioCard.ItemContent>
											<Icon
												as={PackageCheck}
												fontSize="2xl"
												color="gray.500"
												mb="2"
											/>
											<RadioCard.ItemText>Recoger en tienda</RadioCard.ItemText>
											<RadioCard.ItemDescription>
												Estará disponible en 24 horas.
											</RadioCard.ItemDescription>
										</RadioCard.ItemContent>
										<RadioCard.ItemIndicator />
									</RadioCard.ItemControl>
								</RadioCard.Item>
							</HStack>
						</RadioCard.Root>
					</Field.Root>

					{/* Totales */}
					<VStack align="stretch" pt="4" gap="1" fontSize="sm">
						<Flex justify="space-between">
							<Text color="gray.600">Subtotal</Text>
							<Text>${subtotal.toFixed(2)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text color="gray.600">Envío</Text>
							<Text>${shippingCost.toFixed(2)}</Text>
						</Flex>
						<Flex justify="space-between" fontWeight="bold">
							<Text>Total</Text>
							<Text>${total.toFixed(2)}</Text>
						</Flex>
					</VStack>

					{/* Botón de pago */}
					<Button
						type="submit"
						mt="6"
						bg="black"
						color="white"
						borderRadius="md"
						size="lg"
						fontWeight="bold"
						_hover={{ bg: "gray.700" }}
						w="full"
					>
						Pagar ${total.toFixed(2)}
					</Button>
				</Stack>
			</Fieldset.Root>
		</Box>
	);
}
