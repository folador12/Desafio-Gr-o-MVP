import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
