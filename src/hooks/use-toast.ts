import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
};

function toast({ title, description, variant, duration }: ToastOptions) {
  const fn = variant === "destructive" ? sonnerToast.error : sonnerToast;
  return fn(title, { description, duration });
}

export function useToast() {
  return { toast };
}

export { toast };
