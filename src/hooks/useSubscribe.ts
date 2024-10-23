import { useState } from "react";
import { validateEmailDomain } from "@/lib/utils";
import { addSubscriber } from "@/lib/mailerlite";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate email domain
      validateEmailDomain(email);

      await addSubscriber(email);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, success, error };
};

export default useSubscribe;
