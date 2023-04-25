import { showErrorToast } from "@/middleware/toastMessage";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const usernameRegex = /^[a-zA-Z0-9]+$/;
const nameRegex = /^[a-zA-Z]+$/;

export const AuthRegex = (creds) => {


  if (creds.firstName && !nameRegex.test(creds.firstName)) {
    showErrorToast("No special characters allowed in first name");
    return false;
  }

  if (creds.lastName && !nameRegex.test(creds.lastName)) {
    showErrorToast("No special characters allowed in last name");
    return false;
  }

  if (creds.firstName && creds.firstName.length < 2) {
    showErrorToast("First name must be bigger than 2 characters");
    return false;
  }

  if (creds.lastName && creds.lastName.length < 2) {
    showErrorToast("Last name must be bigger than 2 characters");
    return false;
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
