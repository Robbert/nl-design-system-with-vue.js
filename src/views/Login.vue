<template>
  <utrecht-heading-1>Login</utrecht-heading-1>
  <form action="/login" method="post">
    <utrecht-form-field-textbox v-model="username" autocomplete="username">Username</utrecht-form-field-textbox>
    <utrecht-form-field-textbox v-model="password" autocomplete="current-password" type="password"
      >Password</utrecht-form-field-textbox
    >
    <div>
      <utrecht-button type="submit">Login</utrecht-button>
    </div>
  </form>
</template>

<script>
import { UtrechtButton, UtrechtFormFieldTextbox, UtrechtHeading1 } from "@utrecht/web-component-library-vue";

export default {
  components: {
    "utrecht-button": UtrechtButton,
    "utrecht-form-field-textbox": UtrechtFormFieldTextbox,
    "utrecht-heading-1": UtrechtHeading1,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
