export async function regUser(data: UserRegFormData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/reg-user", requestOptions);
  const { status } = response;
  const message: string | undefined = await response.json().message;

  return { status, message };
}
