<template>
  <div class='body'>
    <p>PAGE 3</p>
    <strong>IMPORTANT FORM</strong>
    <div class='form-wrapper'>
      <div class='field'>
        <label class='label'>Name</label>
        <div class='control'>
          <input id='name' class='input' type='text' placeholder='Text input'>
        </div>
      </div>
      <div class='field'>
        <label class='label'>Username</label>
        <div class='control'>
          <input id='username' class='input' type='text' placeholder='Text input'>
        </div>
      </div>
      <div class='field'>
        <label class='label'>Email</label>
        <div class='control'>
          <input id='email' class='input' type='text' placeholder='Text input'>
        </div>
      </div>
      <div style='text-align: right;'>
        <button @click="submitForm()" class="button is-primary is-medium">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalSubmit',
  methods: {
    submitForm() {
      const formFields = Array.from(document.getElementsByClassName('input'))
        .filter((e) => e.value)
        .map((e) => this.createObj(e))
      const fieldsJson = JSON.stringify(formFields);
      parent.window.sessionStorage.setItem('tldr-form', fieldsJson);
      parent.document.getElementById('defaultDialogChromeCloseIconButton').click(); // to close pop-up
    },
    createObj (e) {
      let obj = {};
      obj.id = e.id;
      obj.value = e.value;
      return obj;
    },
  }
}
</script>

<style scoped>
.form-wrapper {
  margin: 20px;
}
</style>
