<script setup lang="ts">
import { useEdProgramsStore } from '@/stores/edPrograms.store'
import { toTypedSchema } from '@vee-validate/zod'
import { h, ref } from 'vue'
import * as z from 'zod'

const isFormSent = ref(false)

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50)
  })
)

const edProgramsStore = useEdProgramsStore()

const edPrograms = edProgramsStore.filteredPrograms

const onSubmit = () => {
  isFormSent.value = true
}
</script>

<template>
  <UiForm v-slot="{ handleSubmit }" as="" keep-values :validation-schema="formSchema">
    <UiDialog>
      <UiDialogTrigger as-child>
        <button
          class="text-md font-bold tracking-wide bg-white bg-opacity-10 border-2 border-white border-opacity-20 py-2 px-5 rounded-full hover:border-opacity-80 relative z-0 hover:z-10 hover:border-white hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-white before:rounded-full before:opacity-0 hover:before:opacity-20"
        >
          Подать заявку
        </button>
      </UiDialogTrigger>
      <UiDialogContent class="max-w-[450px]">
        <div v-if="!isFormSent">
          <UiDialogHeader>
            <UiDialogTitle class="font-bold text-xl text-white">Подать заявление</UiDialogTitle>
            <UiDialogDescription class="text-white opacity-50">
              Вы можете быстро подать заявление на поступление прямо здесь!
            </UiDialogDescription>
          </UiDialogHeader>

          <form id="dialogForm" @submit="handleSubmit($event, onSubmit)">
            <UiFormField v-slot="{ componentField }" name="username">
              <UiFormItem>
                <UiFormLabel class="text-white">ФИО</UiFormLabel>
                <UiFormControl>
                  <UiInput type="text" v-bind="componentField" class="text-white" />
                </UiFormControl>
                <UiFormDescription></UiFormDescription>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
            <UiFormField v-slot="{ componentField }" name="birthday">
              <UiFormItem>
                <UiFormLabel class="text-white">Дата рождения</UiFormLabel>
                <UiFormControl>
                  <UiInput type="date" v-bind="componentField" class="text-white" />
                </UiFormControl>
                <UiFormDescription></UiFormDescription>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
            <UiFormField v-slot="{ componentField }" name="email">
              <UiFormItem>
                <UiFormLabel class="text-white">Email</UiFormLabel>
                <UiFormControl>
                  <UiInput type="email" v-bind="componentField" class="text-white" />
                </UiFormControl>
                <UiFormDescription></UiFormDescription>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
            <UiFormField v-slot="{ componentField }" name="birthDate">
              <UiFormItem>
                <UiFormLabel class="text-white">Номер телефона</UiFormLabel>
                <UiFormControl>
                  <UiInput type="tel" v-bind="componentField" class="text-white" />
                </UiFormControl>
                <UiFormDescription></UiFormDescription>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
            <UiFormField v-slot="{ componentField }" name="program">
              <UiFormItem>
                <UiFormLabel class="text-white">Выбранная программа</UiFormLabel>
                <UiSelect v-bind="componentField">
                  <UiFormControl>
                    <UiSelectTrigger>
                      <UiSelectValue class="text-white" />
                    </UiSelectTrigger>
                  </UiFormControl>
                  <UiSelectContent
                    class="backdrop-blur-2xl bg-white bg-opacity-20 max-w-[400px] text-white"
                  >
                    <UiSelectGroup>
                      <UiSelectItem
                        v-for="program in edPrograms"
                        :key="program.id"
                        :value="program.title"
                      >
                        {{ program.title }}
                      </UiSelectItem>
                    </UiSelectGroup>
                  </UiSelectContent>
                </UiSelect>
                <UiFormDescription></UiFormDescription>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
            <UiFormField v-slot="{ componentField }" type="radio" name="type">
              <UiFormItem class="space-y-3">
                <UiFormLabel>Notify me about...</UiFormLabel>

                <UiFormControl>
                  <UiRadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                    <UiFormItem class="flex items-center space-y-0 gap-x-3">
                      <UiFormControl>
                        <UiRadioGroupItem value="all" />
                      </UiFormControl>
                      <UiFormLabel class="font-normal"> All new messages </UiFormLabel>
                    </UiFormItem>
                    <UiFormItem class="flex items-center space-y-0 gap-x-3">
                      <UiFormControl>
                        <UiRadioGroupItem value="mentions" />
                      </UiFormControl>
                      <UiFormLabel class="font-normal"> Direct messages and mentions </UiFormLabel>
                    </UiFormItem>
                    <UiFormItem class="flex items-center space-y-0 gap-x-3">
                      <UiFormControl>
                        <UiRadioGroupItem value="none" />
                      </UiFormControl>
                      <UiFormLabel class="font-normal"> Nothing </UiFormLabel>
                    </UiFormItem>
                  </UiRadioGroup>
                </UiFormControl>
                <UiFormMessage />
              </UiFormItem>
            </UiFormField>
          </form>

          <UiDialogFooter>
            <button
              type="submit"
              form="dialogForm"
              class="bg-white bg-opacity-20 border hover:bg-white hover:bg-opacity-100 rounded-md py-1"
            >
              Save changes
            </button>
          </UiDialogFooter>
        </div>
        <div v-else>"Successfully"</div>
      </UiDialogContent>
    </UiDialog>
  </UiForm>
</template>

<style scoped></style>
