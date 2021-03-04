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
          @click="submitFormHandler"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ModalSubmit',
  methods: {
    submitFormHandler(clickEvent) {
      clickEvent.preventDefault();

      const formFields = this.returnFormInputs();
      const fieldsJson = JSON.stringify(formFields);

      parent.window.sessionStorage.setItem('tldr-form', fieldsJson);
      window.close();
    },

    returnFormInputs() {
      return Array.from(document.getElementsByClassName('input'))
        .filter(e => e.value)
        .map(e => {
          return {
            id: e.id,
            value: e.value,
          };
        });
    },

    async triggerFlowWithFetch() {
      const flowEndpoint = process.env.VUE_APP_FLOW_ENDPOINT;
      const formFields = this.returnFormInputs();

      await fetch(flowEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(formFields),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              'Multipage Modal Failure: POST response status not ok',
            );
          }
        })
        .then(result => {
          console.log('Fetch Response', result);
        })
        .catch(error => {
          console.error(error);
        });
    },

    async triggerFlowWithAxios() {
      const flowEndpoint = process.env.VUE_APP_FLOW_ENDPOINT;
      const formFields = this.returnFormInputs();

      axios
        .post(flowEndpoint, {
          headers: { 'content-type': 'application/json;charset=UTF-8' },
          data: JSON.stringify(formFields),
        })
        .then(response => {
          console.log('axios response', response);
        })
        .catch(error => {
          console.error(
            'Multipage Modal Failure: POST response status not ok',
            error.message,
          );
        });
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
