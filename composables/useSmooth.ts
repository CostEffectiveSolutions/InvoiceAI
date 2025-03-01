import Lenis from '@studio-freight/lenis'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export const useSmooth = () => {
  const lenis = ref<Lenis | null>(null)

  const initLenis = () => {
    lenis.value = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.value?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  onMounted(() => {
    initLenis()
  })

  onBeforeUnmount(() => {
    lenis.value?.destroy()
  })

  return {
    lenis
  }
} 