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
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useColorModeValue } from "@/components/ui/color-mode";

type Inputs = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	terms: boolean;
};

export function FormBasic() {
	const cardBg = useColorModeValue("white", "gray.800");
	const shadow = "0 1px 4px rgba(0,0,0,0.05)";
	const shadowHover = "0 2px 8px rgba(0,0,0,0.08)";

	const {
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<Fieldset.Root size="lg">
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
							<Field.Root invalid={!!errors.name}>
								<Field.Label>Nombre</Field.Label>
								<Input
									placeholder="Tu nombre"
									{...register("name", { required: true, maxLength: 50 })}
								/>

								{errors.name?.type === "required" && (
									<Field.ErrorText>Este campo es requerido</Field.ErrorText>
								)}
								{errors.name?.type === "maxLength" && (
									<Field.ErrorText>
										Este campo debe tener menos de 50 caracteres
									</Field.ErrorText>
								)}
							</Field.Root>

							{/* Correo */}
							<Field.Root invalid={!!errors.email}>
								<Field.Label>Correo electrónico</Field.Label>
								<Input
									type="email"
									placeholder="tu@email.com"
									{...register("email", {
										required: "Este campo es requerido",
										maxLength: {
											value: 50,
											message: "Este campo debe tener menos de 50 caracteres",
										},
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message:
												"Por favor, ingresa un correo electrónico válido",
										},
									})}
								/>

								{errors.email?.type === "required" && (
									<Field.ErrorText>{errors.email?.message}</Field.ErrorText>
								)}
								{errors.email?.type === "maxLength" && (
									<Field.ErrorText>{errors.email?.message}</Field.ErrorText>
								)}
								{errors.email?.type === "pattern" && (
									<Field.ErrorText>{errors.email?.message}</Field.ErrorText>
								)}
							</Field.Root>

							{/* Contraseña */}
							<Field.Root invalid={!!errors.password}>
								<Field.Label>Contraseña</Field.Label>
								<Input
									type="password"
									placeholder="********"
									{...register("password", {
										required: "Este campo es requerido",
										minLength: {
											value: 8,
											message: "Este campo debe tener al menos 8 caracteres",
										},
									})}
								/>

								{errors.password?.type === "required" && (
									<Field.ErrorText>{errors.password?.message}</Field.ErrorText>
								)}
								{errors.password?.type === "minLength" && (
									<Field.ErrorText>{errors.password?.message}</Field.ErrorText>
								)}
							</Field.Root>

							{/* Confirmar Contraseña */}
							<Field.Root invalid={!!errors.confirmPassword}>
								<Field.Label>Confirmar Contraseña</Field.Label>
								<Input
									type="password"
									placeholder="********"
									{...register("confirmPassword", {
										required: "Este campo es requerido",
										minLength: {
											value: 8,
											message: "Este campo debe tener al menos 8 caracteres",
										},
										validate: (value) =>
											value === watch("password") ||
											"Las contraseñas no coinciden",
									})}
								/>

								{errors.confirmPassword?.type === "required" && (
									<Field.ErrorText>
										{errors.confirmPassword?.message}
									</Field.ErrorText>
								)}
								{errors.confirmPassword?.type === "minLength" && (
									<Field.ErrorText>
										{errors.confirmPassword?.message}
									</Field.ErrorText>
								)}
								{errors.confirmPassword?.type === "validate" && (
									<Field.ErrorText>
										{errors.confirmPassword?.message}
									</Field.ErrorText>
								)}
							</Field.Root>
							<Field.Root invalid={!!errors.terms}>
								<Controller
									name="terms"
									control={control}
									rules={{
										required: "Debes aceptar los términos y condiciones",
									}}
									render={({ field }) => (
										<Checkbox.Root
											colorScheme="purple"
											mt="2"
											checked={!!field.value}
											onCheckedChange={(e) => field.onChange(!!e.checked)}
										>
											<Checkbox.HiddenInput />
											<Checkbox.Control />
											<Checkbox.Label>
												Acepto los términos y condiciones
											</Checkbox.Label>
										</Checkbox.Root>
									)}
								/>
								{errors.terms && (
									<Field.ErrorText>{errors.terms.message}</Field.ErrorText>
								)}
							</Field.Root>
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
							disabled={!isValid}
						>
							Registrarme
						</Button>
					</Fieldset.Root>
				</form>
			</Box>
		</VStack>
	);
}
