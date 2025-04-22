import { ContactFormState } from "../../types/contactForm";

export async function sendContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  console.log("Sending contact form data:", data);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    success: true,
    data,
    error: null,
  };
}
