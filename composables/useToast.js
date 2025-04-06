import { toast } from 'vue-sonner'

// Export toast directly for auto-import
export { toast }

// Also provide as a composable
export function useToast() {
  return toast
} 