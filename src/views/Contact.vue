<template>
  <div class="contact">
    <div class="utrecht-html">
      <h1>Contact</h1>
    </div>
    <form>
      <div class="utrecht-form-field utrecht-form-field--distanced">
        <input v-model="name" type="text" class="utrecht-form-field__input utrecht-textbox" />
      </div>
      <div class="utrecht-form-field utrecht-form-field--distanced">
        <input v-model="email" type="email" class="utrecht-form-field__input utrecht-textbox" />
      </div>
      <div class="utrecht-form-field utrecht-form-field--distanced">
        <textarea v-model="message" class="utrecht-form-field__input utrecht-textarea"></textarea>
      </div>
      <div class="utrecht-form-field-checkbox utrecht-form-field-checkbox--distanced">
        <input
          v-model="agree"
          type="checkbox"
          class="utrecht-form-field-checkbox__input utrecht-checkbox"
          id="id-ce0239e2"
        />
        <label
          class="utrecht-form-field-checkbox__label utrecht-form-label utrecht-form-label--checkbox"
          for="id-ce0239e2"
          >I agree with the privacy policy</label
        >
      </div>
      <div>
        <button type="submit" class="utrecht-button">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
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
