import emailjs from '@emailjs/browser'

//@ts-ignore
const sendEmail = async ({ name, email, website, message }) => {
  emailjs.send("service_uit1qj9","template_dp9vsja",{
    from_name: name,
    email: email,
    website: website,
    message: message,
  }, 'hlj0HQBljcFduvdz9')
  .then(function(response: { status: any; text: any; }) {
    return true;
  }, function(error: any) {
    return false;
 });
}

export { sendEmail };