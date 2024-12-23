import Nylas from "nylas";

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID,
  callbackUri: `${process.env.NEXT_PUBLIC_URL}/${process.env.NYLAS_CALLBACK_URI}`,
  apiKey: process.env.NYLAS_API_SECRET_KEY,
  apiUri: process.env.NYLAS_API_URL,
};

export const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_SECRET_KEY!,
  apiUri: process.env.NYLAS_API_URL,
});
