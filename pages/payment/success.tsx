import { useEffect } from "react";

import { confirmTossPayment } from "src/controller/paymentController";
import useURLQuery from "src/hooks/useURLQuery";

const PaymentSuccessPage = () => {
  const querys = useURLQuery();
  useEffect(() => {
    const confirmPayment = async () => {
      const sendData = {
        paymentKey: querys.paymentKey,
        orderId: querys.orderId,
        amount: Number(querys.amount),
      };
      const { status, message } = await confirmTossPayment(sendData);
    };
  }, [querys]);

  return <div />;
};

export default PaymentSuccessPage;
