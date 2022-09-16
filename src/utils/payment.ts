import { loadTossPayments } from "@tosspayments/payment-sdk";

export enum PayMethod { // todo: 간편결제 추가
  CARD = "카드",
  TRANSFER = "계좌이체",
  PHONE = "휴대폰",
}

interface PayProps {
  method: PayMethod;
  price: number;
  orderID: string;
  orderName: string;
  userName: string;
  userEmail: string;
}

const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENT_CLIENT_KEY as string;

export async function pay({
  method,
  price,
  orderID,
  orderName,
  userName,
  userEmail,
}: PayProps) {
  const tossPayments = await loadTossPayments(clientKey);

  await tossPayments.requestPayment(method, {
    amount: price,
    orderId: orderID,
    orderName,
    successUrl: `${window.location.origin}/payment/success`,
    failUrl: `${window.location.origin}/payment/fail`,
    customerName: userName,
    customerEmail: userEmail,
  });
}
