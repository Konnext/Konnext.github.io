const USER_ID = "user_OFchQQqFe3KtrdymPIGzv";
const TEMPLATE_ID = "template_4968edk";
const SERVICE_ID = "service_3jdq1cf";

emailjs.init("user_OFchQQqFe3KtrdymPIGzv");

const alertSuccess = $("#alertSuccess");
const alertInfo = $("#alertInfo");
const alertError = $("#alertError");
const formC = $("form");

formC.submit((e) => {
    e.preventDefault();
    alertError.hide();
    alertSuccess.hide();
    alertInfo.show();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
            console.log(result.text);
            alertInfo.hide();
            alertError.hide();
            alertSuccess.show();
            formC.trigger("reset");
        },
        (error) => {
            console.log(error.text);
            alertInfo.hide();
            alertSuccess.hide();
            alertError.show();
        }
    );

    console.log("send email");
});
