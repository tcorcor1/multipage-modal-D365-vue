<template>
  <div class="body">
    <p>PAGE 3</p>
    <strong>IMPORTANT FORM</strong>
    <form>
      <div class="form-field">
        <label class="label" for="name">Name</label>
        <input
          id="name"
          class="input"
          type="text"
          placeholder="Provide Fullname"
        />
      </div>
      <div class="form-field">
        <label class="label" for="username">Username</label>
        <input
          id="username"
          class="input"
          type="text"
          placeholder="Provide Username"
        />
      </div>
      <div class="form-field">
        <label class="label" for="email">Email</label>
        <input
          id="email"
          class="input"
          type="text"
          placeholder="Provide Email"
        />
      </div>
      <div style="text-align: right;">
        <input
          type="submit"
          class="button is-primary is-medium"
          value="Submit"
          @click="submitForm"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalSubmit',
  methods: {
    submitForm(clickEvent) {
      clickEvent.preventDefault();
      const formFields = Array.from(document.getElementsByClassName('input'))
        .filter(e => e.value)
        .map(e => {
          return {
            id: e.id,
            value: e.value,
          };
        });
      const fieldsJson = JSON.stringify(formFields);
      parent.window.sessionStorage.setItem('tldr-form', fieldsJson);
      window.close();
    },
  },
};
</script>

<style scoped>
form {
  margin: 20px;
}

.form-field {
  padding: 10px 0;
}
</style>
