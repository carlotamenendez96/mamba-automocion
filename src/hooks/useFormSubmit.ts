import { useState } from 'react';

interface FormSubmitState {
    submitting: boolean;
    success: boolean;
    error: string | null;
}

interface UseFormSubmitProps {
    endpoint: string;
}

export const useFormSubmit = ({ endpoint }: UseFormSubmitProps) => {
    const [formState, setFormState] = useState<FormSubmitState>({
        submitting: false,
        success: false,
        error: null,
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormState({ submitting: true, success: false, error: null });

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormState({ submitting: false, success: true, error: null });
                form.reset();
                // Optionally reset success state after some time
                setTimeout(() => setFormState(s => ({...s, success: false})), 5000);
            } else {
                const data = await response.json();
                const errorMessage = data.errors ? data.errors.map((e: { message: string }) => e.message).join(', ') : "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.";
                setFormState({ submitting: false, success: false, error: errorMessage });
            }
        } catch (error) {
            setFormState({ submitting: false, success: false, error: "Error de red. Por favor, comprueba tu conexión e inténtalo de nuevo." });
        }
    };

    return { ...formState, handleSubmit };
};
