<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Cross2Icon } from '@radix-icons/vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { type SheetVariants, sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/30 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="absolute right-2 top-2 rounded-sm transition-opacity outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <div class="relative w-14 h-12 flex flex-col justify-between cursor-pointer">
          <div class="absolute rotate-45 top-1/2 translate-y-1/2 h-2.5 w-full bg-white"></div>
          <div class="absolute -rotate-45 top-1/2 translate-y-1/2 h-2.5 w-full bg-white"></div>
        </div>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
