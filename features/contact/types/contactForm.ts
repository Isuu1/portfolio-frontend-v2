export type ContactFormState = {
  success: boolean;
  data: { name: string; email: string; message: string };
  error: string | null;
};
