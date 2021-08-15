<template>
  <div class="contact">
    <div class="utrecht-html">
      <h1>Contact us using Web Components</h1>
    </div>
    <form>
      <utrecht-form-field-textbox v-model="name"></utrecht-form-field-textbox>
      <utrecht-form-field-textbox v-model="email" type="email"></utrecht-form-field-textbox>
      <div class="utrecht-form-field utrecht-form-field--distanced">
        <textarea v-model="message" class="utrecht-form-field__input utrecht-textarea"></textarea>
      </div>
      <utrecht-form-field-checkbox v-model="agree">I agree with the privacy policy</utrecht-form-field-checkbox>
      <div>
        <utrecht-button type="submit">Send</utrecht-button>
      </div>
    </form>
    <utrecht-separator></utrecht-separator>
    <dl>
      <div>
        <dt>Name</dt>
        <dd>{{ name }}</dd>
      </div>
      <div>
        <dt>E-mail</dt>
        <dd>{{ email }}</dd>
      </div>
      <div>
        <dt>Message</dt>
        <dd>{{ message }}</dd>
      </div>
      <div>
        <dt>Agrees with the privacy policy</dt>
        <dd>{{ agree }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
import {
  UtrechtButton,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldTextbox,
  UtrechtSeparator,
} from "@utrecht/web-component-library-vue";

export default {
  components: {
    "utrecht-button": UtrechtButton,
    "utrecht-form-field-checkbox": UtrechtFormFieldCheckbox,
    "utrecht-form-field-textbox": UtrechtFormFieldTextbox,
    "utrecht-separator": UtrechtSeparator,
  },
  data() {
    return {
      name: "Sam Doe",
      email: "sam@example.com",
      message: "Hello, world!",
      agree: true,
    };
  },
};
</script>
