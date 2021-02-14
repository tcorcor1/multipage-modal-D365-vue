/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function multiModalForm(executionContext) {
  const formContext = executionContext.getFormContext();

  const dialogParameters = {
    pageType: 'webresource',
    webresourceName: 'cr847_/tldr/index.html',
  };

  const navigationOptions = {
    target: 2,
    width: 400,
    height: 600,
    position: 1,
  };

  Xrm.Navigation.navigateTo(dialogParameters, navigationOptions).then(
    function success() {
      const formFields = window.sessionStorage.getItem('tldr-form');
      console.log(JSON.parse(formFields));
      formContext.getAttribute('cr847_forminputs').setValue(formFields);
      /*
			DO YOUR PROCESSING WITH FORM DATA
			*/
      //clean-up after
      window.sessionStorage.setItem('tldr-form', '');
    },
    function error(e) {
      console.log(e.message);
    },
  );
}
