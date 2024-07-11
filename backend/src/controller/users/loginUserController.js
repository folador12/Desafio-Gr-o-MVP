import loginUserService from "../../service/users/loginUserService.js";

async function loginUserController(req, res) {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUserService({ email, password });

    return res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export default loginUserController;
