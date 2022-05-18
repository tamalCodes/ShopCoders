import Axios from "axios";

export const getsingleuser = async (data) => {
  try {
    console.log(data);
    const alldata = await Axios.post(
      "http://localhost:3001/api/user/viewuserdetails",
      data
    );

    return alldata;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
