import {
	Box,
	Button,
	Checkbox,
	Field,
	Fieldset,
	Input,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export function FormBasic() {
	const cardBg = useColorModeValue("white", "gray.800");
	const shadow = "0 1px 4px rgba(0,0,0,0.05)";
	const shadowHover = "0 2px 8px rgba(0,0,0,0.08)";

	return (
		<VStack gap="6" textAlign="center">
			{/* Título y descripción */}
			<Text
				fontSize="3xl"
				fontWeight="bold"
				color={useColorModeValue("gray.800", "white")}
			>
				Únete a la Comunidad
			</Text>
			<Text
				fontSize="md"
				color={useColorModeValue("gray.600", "gray.400")}
				maxW="sm"
			>
				Regístrate para ser parte de nuestra comunidad y acceder a contenido
				exclusivo.
			</Text>

			{/* Card con Fieldset */}
			<Box
				bg={cardBg}
				p="8"
				borderRadius="lg"
				boxShadow={shadow}
				_hover={{ boxShadow: shadowHover }}
				transition="all 0.2s ease-in-out"
				w="full"
				maxW="md"
			>
				<Fieldset.Root size="lg" as="form" onSubmit={(e) => e.preventDefault()}>
					<Stack gap="4">
						<Fieldset.Legend fontSize="xl" fontWeight="bold">
							Registro
						</Fieldset.Legend>
						<Fieldset.HelperText>
							Completa los campos para crear tu cuenta.
						</Fieldset.HelperText>
					</Stack>

					<Fieldset.Content mt="4">
						{/* Nombre */}
						<Field.Root>
							<Field.Label>Nombre</Field.Label>
							<Input name="name" placeholder="Tu nombre" />
						</Field.Root>

						{/* Correo */}
						<Field.Root>
							<Field.Label>Correo electrónico</Field.Label>
							<Input name="email" type="email" placeholder="tu@email.com" />
						</Field.Root>

						{/* Contraseña */}
						<Field.Root>
							<Field.Label>Contraseña</Field.Label>
							<Input name="password" type="password" placeholder="********" />
						</Field.Root>

						{/* Confirmar Contraseña */}
						<Field.Root>
							<Field.Label>Confirmar Contraseña</Field.Label>
							<Input
								name="confirmPassword"
								type="password"
								placeholder="********"
							/>
						</Field.Root>

						<Checkbox.Root colorScheme="purple" mt="2">
							<Checkbox.HiddenInput />
							<Checkbox.Control />
							<Checkbox.Label>Accept terms and conditions</Checkbox.Label>
						</Checkbox.Root>
					</Fieldset.Content>

					{/* Botón de registro */}
					<Button
						type="submit"
						mt="8"
						bg="#A83265"
						color="white"
						fontWeight="bold"
						borderRadius="md"
						_hover={{ bg: "#8C2855" }}
					>
						Registrarme
					</Button>
				</Fieldset.Root>
			</Box>
		</VStack>
	);
}
