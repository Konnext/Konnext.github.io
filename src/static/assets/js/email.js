const USER_ID = "user_OFchQQqFe3KtrdymPIGzv";
const TEMPLATE_ID = "template_4968edk";
const SERVICE_ID = "service_3jdq1cf";

emailjs.init("user_OFchQQqFe3KtrdymPIGzv");

console.log(emailjs);
const alertSuccess = $("#alertSuccess");
const alertInfo = $("#alertInfo");
const alertError = $("#alertError");

$("form").submit((e) => {
    e.preventDefault();
    alertInfo.show();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
            console.log(result.text);
            alertInfo.hide();
            alertSuccess.show();
        },
        (error) => {
            alertError.show();
        }
    );

    console.log("send email");
});
