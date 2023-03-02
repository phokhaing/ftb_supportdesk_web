import Swal from "sweetalert2";
export const Alert = {
  success: (credentials) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged in sucess!",
      showConfirmButton: false,
      timer: 1500,
    });
  },
};

export const Confirm = {
  delete: (credentials) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      // showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#28a745",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#5A6268",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchAllUsers());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  },
};
