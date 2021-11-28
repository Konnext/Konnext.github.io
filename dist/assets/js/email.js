const USER_ID = "user_OFchQQqFe3KtrdymPIGzv";
const TEMPLATE_ID = "template_4968edk";
const SERVICE_ID = "service_3jdq1cf";

emailjs.init("user_OFchQQqFe3KtrdymPIGzv");

console.log(emailjs);
const alert = $(".alertC");

$("form").submit((e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
            console.log(result.text);
            alert.show();
        },
        (error) => {
            console.log(error.text);
        }
    );

    console.log("send email");
});
