import { redirect } from "react-router-dom";

export function checkAuthLoader() {
  if (!localStorage.getItem("currentUser")) {
    return redirect("/login");
  }
  return null;
}
