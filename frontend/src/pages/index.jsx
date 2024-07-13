import React, { useState, useContext } from "react";
import Image from "next/image";
import { signUp } from "../service/apiClient";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { canSSRGuest } from "@/utils/canSSRGuest";
import { useRouter } from "next/router";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const { message, status } = await signIn(formData);

      if (status === 200) {
        toast.success(message);
        router.push("/restaurants");
      } else {
        toast.error(message);
      }
    } else {
      const { message, status } = await signUp(formData);

      if (status === 201) {
        toast.success(message);
        toggleForm();
      } else {
        toast.error(message);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      cpf: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-image bg-cover">
      <div className="w-full max-w-md mx-auto mr-52">
        <div className="mb-8 text-center flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-4xl text-white font-bold mb-2">QUEM TEM BOCA</h1>
          <p className="text-xl text-white">
            acesse seus restaurantes prediletos
          </p>
        </div>
        {isLogin ? (
          <form
            className="space-y-4 self-end"
            onSubmit={(e) => handleSubmit(e)}
            method="post"
          >
            <div>
              <input
                name="email"
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleForm}
                className="text-sm text-red-500 hover:underline"
              >
                Cadastre-se
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600"
            >
              Entrar
            </button>
          </form>
        ) : (
          <form
            className="space-y-4 self-end"
            onSubmit={(e) => handleSubmit(e)}
            method="post"
          >
            <div>
              <input
                name="email"
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                value={formData.email}
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Senha"
                value={formData.password}
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                name="name"
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Nome"
                value={formData.name}
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                name="cpf"
                type="text"
                id="cpf"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="CPF"
                value={formData.cpf}
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={toggleForm}
                className="text-sm text-red-500 hover:underline"
              >
                Já tenho conta
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600"
            >
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
