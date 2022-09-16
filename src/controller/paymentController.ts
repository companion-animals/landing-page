export async function confirmTossPayment(data: ConfirmTossPaymentData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(
    "/api/payment/confirm-toss-payment",
    requestOptions,
  );
  const { status } = response;
  const { message } = (await response.json()) as { message?: string };

  return { status, message };
}
