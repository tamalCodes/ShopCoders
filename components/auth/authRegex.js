import { showErrorToast } from "@/middleware/toastMessage";

export const AuthRegex = (creds) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const nameRegex = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})?$/;

  const usernameRegex = /^[a-zA-Z0-9]+$/;

  if (creds.name) {
    const nameArray = creds.name.split(" ");
    if (nameArray.length !== 2) {
      console.log(nameArray);

      showErrorToast(
        "Full Name should contain firstname and lastname separated by space"
      );

      return false;
    }
    if (nameArray[0].length < 3) {
      showErrorToast("Your first name should be at least 3 characters long");

      return false;
    }
    if (nameArray[1].length < 2) {
      showErrorToast("Your last name should be at least 2 characters long");

      return false;
    }
    if (!nameRegex.test(creds.name)) {
      showErrorToast("Invalid Full Name, special characters not allowed");
      return false;
    }
  }

  if (creds.email && !emailRegex.test(creds.email)) {
    showErrorToast("Invalid Email");
    return false;
  }

  if (creds.username && !usernameRegex.test(creds.username)) {
    showErrorToast("No special characters allowed in username");
    return false;
  }

  if (creds.city && !usernameRegex.test(creds.city)) {
    showErrorToast("No special characters allowed in city name");
    return false;
  }
  if (creds.phone && !phoneRegex.test(creds.phone)) {
    showErrorToast("Invalid Phone Number");
    return false;
  }

  return true;
};
