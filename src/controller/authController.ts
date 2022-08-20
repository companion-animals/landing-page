export async function regUser(data: UserRegFormData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/reg-user", requestOptions);
  const { status } = response;
  const { message } = (await response.json()) as { message?: string };

  return { status, message };
}

export async function login(data: LoginData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/login", requestOptions);
  const { status } = response;

  const { message } = (await response.json()) as { message?: string };

  return { status, message };
}

export async function initialLoginCheck() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch("/api/login-check", requestOptions);
  const { status } = response;
  const { message, isLogin } = (await response.json()) as {
    message?: string;
    isLogin?: boolean;
  };

  return { status, message, isLogin };
}

export async function logout() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch("/api/logout", requestOptions);
  const { status } = response;

  return { status };
}
