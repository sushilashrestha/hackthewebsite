import MailerLite, {
  CreateOrUpdateSubscriberParams,
} from "@mailerlite/mailerlite-nodejs";

const apiKey = import.meta.env.VITE_MAILERLITE_API_KEY;
const groupID = import.meta.env.VITE_MAILERLITE_GROUP_ID;

const mailerlite = new MailerLite({
  api_key: apiKey,
});

export async function addSubscriber(email: string) {
  const params: CreateOrUpdateSubscriberParams = {
    email,
    groups: [groupID],
    status: "active",
  };
  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    console.log(response);
  } catch (error) {
    console.error("Error creating or updating subscriber:", error);
  }
}
