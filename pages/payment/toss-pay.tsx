import { useCallback } from "react";

import { loadTossPayments } from "@tosspayments/payment-sdk";

import Button from "src/components/atom/button/BasicButton";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";

const TossPaymentPage = () => {
  const payWithCard = useCallback(async () => {
    const tossPayments = await loadTossPayments(clientKey);

    tossPayments.requestPayment("카드", {
      amount: 20000,
      orderId: "5eVnF0avDW1hxNb8RudZW",
      orderName: "우리동네 특별반 시터 이용 요금",
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
    });
  }, []);

  return (
    <>
      결제 관련 정보
      <Button onClick={payWithCard}>카드결제</Button>
    </>
  );
};

export default TossPaymentPage;
