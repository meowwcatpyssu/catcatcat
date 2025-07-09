<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Хочу работать в студии",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:lunera.studio@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=Здравствуйте! Меня зовут ${firstName} ${lastName}, мой email: ${email}.%0D%0A%0D%0A${encodeURIComponent(
    message
  )}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Контакты</h2>
          <h2 class="text-3xl md:text-4xl font-bold">Свяжись с нами</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Остались вопросы? Хочешь присоединиться к студии? Заполни форму или свяжись с нами удобным способом.
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">Наш адрес</div>
            </div>
            <div>Нови Сад, Сербия</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">Телефон</div>
            </div>
            <div>+381 (62) 9651115</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">Почта</div>
            </div>
            <div>lunera.studio@gmail.com</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock />
              <div class="font-bold">Часы работы</div>
            </div>
            <div>
              <div>Пн – Вс</div>
              <div>00:00 – 00:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Форма -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl">Форма обратной связи</CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Имя</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Анастасия"
                  v-model="contactForm.firstName"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Фамилия</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Иванова"
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Тема обращения</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тему" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Хочу работать в студии">Хочу работать в студии</SelectItem>
                    <SelectItem value="Сотрудничество">Сотрудничество</SelectItem>
                    <SelectItem value="Вопрос по условиям">Вопрос по условиям</SelectItem>
                    <SelectItem value="Другое">Другое</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Сообщение</Label>
              <Textarea
                id="message"
                placeholder="Напишите, что вас интересует..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Ошибка</AlertTitle>
              <AlertDescription>
                Пожалуйста, проверьте правильность заполнения формы.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Отправить сообщение</Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
