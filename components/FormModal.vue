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
      <UiDialogContent class="h-full tablet:h-auto tablet:max-w-[450px]">
        <UiScrollArea class="h-full tablet:h-[700px] p-6 rounded-md">
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
                <UiFormItem class="mb-3">
                  <UiFormLabel class="text-white">Уровень образования</UiFormLabel>

                  <UiFormControl>
                    <UiRadioGroup class="flex justify-between" v-bind="componentField">
                      <UiFormItem class="flex items-center space-y-0 gap-x-3">
                        <UiFormControl>
                          <UiRadioGroupItem value="soo" class="border-white" />
                        </UiFormControl>
                        <UiFormLabel class="font-normal text-white"> 11 классов </UiFormLabel>
                      </UiFormItem>
                      <UiFormItem class="flex items-center space-y-0 gap-x-3">
                        <UiFormControl>
                          <UiRadioGroupItem value="spo" class="border-white" />
                        </UiFormControl>
                        <UiFormLabel class="font-normal text-white"> СПО </UiFormLabel>
                      </UiFormItem>
                      <UiFormItem class="flex items-center space-y-0 gap-x-3">
                        <UiFormControl>
                          <UiRadioGroupItem value="other" class="border-white" />
                        </UiFormControl>
                        <UiFormLabel class="font-normal text-white"> Другое </UiFormLabel>
                      </UiFormItem>
                    </UiRadioGroup>
                  </UiFormControl>
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>

              <UiFormField v-slot="{ componentField }" name="gpa">
                <UiFormItem>
                  <UiFormLabel class="text-white">Средний балл аттестата</UiFormLabel>
                  <UiFormControl>
                    <UiInput
                      type="number"
                      max="5"
                      step="0.01"
                      v-bind="componentField"
                      class="text-white"
                    />
                  </UiFormControl>
                  <UiFormDescription></UiFormDescription>
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>

              <UiFormField v-slot="{ componentField }" type="radio" name="ege">
                <UiFormItem class="mb-3">
                  <UiFormLabel class="text-white">Есть ли результаты ЕГЭ?</UiFormLabel>

                  <UiFormControl>
                    <UiRadioGroup class="flex gap-5" v-bind="componentField">
                      <UiFormItem class="flex items-center space-y-0 gap-x-3">
                        <UiFormControl>
                          <UiRadioGroupItem value="egeYes" class="border-white" />
                        </UiFormControl>
                        <UiFormLabel class="font-normal text-white"> Да </UiFormLabel>
                      </UiFormItem>
                      <UiFormItem class="flex items-center space-y-0 gap-x-3">
                        <UiFormControl>
                          <UiRadioGroupItem value="egeNo" class="border-white" />
                        </UiFormControl>
                        <UiFormLabel class="font-normal text-white"> Нет </UiFormLabel>
                      </UiFormItem>
                    </UiRadioGroup>
                  </UiFormControl>
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>

              <UiFormField name="exams">
                <UiFormItem>
                  <UiFormLabel class="text-white"> Какие экзамены ты сдавал(а)? </UiFormLabel>
                  <div class="flex flex-wrap justify-normal gap-x-10 gap-y-1 pb-3">
                    <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="math">
                      <UiFormItem class="flex items-end gap-1">
                        <UiFormControl>
                          <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                        </UiFormControl>
                        <UiFormLabel class="text-white">Математика</UiFormLabel>
                        <UiFormMessage />
                      </UiFormItem>
                    </UiFormField>
                    <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="it">
                      <UiFormItem class="flex items-end gap-1">
                        <UiFormControl>
                          <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                        </UiFormControl>
                        <UiFormLabel class="text-white">Информатика</UiFormLabel>
                        <UiFormMessage />
                      </UiFormItem>
                    </UiFormField>
                    <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="physics">
                      <UiFormItem class="flex items-end gap-1">
                        <UiFormControl>
                          <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                        </UiFormControl>
                        <UiFormLabel class="text-white">Физика</UiFormLabel>
                        <UiFormMessage />
                      </UiFormItem>
                    </UiFormField>
                    <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="rus">
                      <UiFormItem class="flex items-end gap-1">
                        <UiFormControl>
                          <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                        </UiFormControl>
                        <UiFormLabel class="text-white">Русский язык</UiFormLabel>
                        <UiFormMessage />
                      </UiFormItem>
                    </UiFormField>
                    <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="other">
                      <UiFormItem class="flex items-end gap-1">
                        <UiFormControl>
                          <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                        </UiFormControl>
                        <UiFormLabel class="text-white">Другие</UiFormLabel>
                        <UiFormMessage />
                      </UiFormItem>
                    </UiFormField>
                  </div>
                </UiFormItem>
              </UiFormField>

              <UiFormField v-slot="{ componentField }" name="gpa">
                <UiFormItem>
                  <UiFormLabel class="text-white">Прикрепить файлы</UiFormLabel>
                  <UiFormControl>
                    <UiInput type="file" v-bind="componentField" class="text-white" />
                  </UiFormControl>
                  <UiFormDescription></UiFormDescription>
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>

              <UiFormField v-slot="{ componentField }" name="comment">
                <UiFormItem>
                  <UiFormLabel class="text-white">Комментарий</UiFormLabel>
                  <UiFormControl>
                    <UiTextarea class="resize-none" v-bind="componentField" />
                  </UiFormControl>
                  <UiFormDescription> </UiFormDescription>
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>

              <UiFormField v-slot="{ value, handleChange }" type="checkbox" name="personalData">
                <UiFormItem class="flex items-end gap-1">
                  <UiFormControl>
                    <UiCheckbox :model-value="value" @update:model-value="handleChange" />
                  </UiFormControl>
                  <UiFormLabel class="text-white"
                    >Согласие на обработку персональных данных</UiFormLabel
                  >
                  <UiFormMessage />
                </UiFormItem>
              </UiFormField>
            </form>

            <UiDialogFooter>
              <button
                type="submit"
                form="dialogForm"
                class="mt-5 bg-white bg-opacity-20 border hover:bg-white hover:bg-opacity-100 rounded-md py-1"
              >
                Save changes
              </button>
            </UiDialogFooter>
          </div>
          <div v-else>"Successfully"</div>
        </UiScrollArea>
      </UiDialogContent>
    </UiDialog>
  </UiForm>
</template>

<style scoped></style>
