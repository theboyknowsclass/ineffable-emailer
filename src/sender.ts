import { Resource } from "sst";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import handler from "./handler";
import { formatPlainTextEmail, formatHtmlEmail, formatSubject } from "./utils";

const client = new SESv2Client();

export const sendEmail = handler(async (event) => {
  console.log("body: " + event.body);

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No body provided" }),
    };
  }

  const formData = JSON.parse(event.body);

  await client.send(
    new SendEmailCommand({
      FromEmailAddress: Resource.MyEmail.sender,
      ReplyToAddresses: [formData.email],
      Destination: {
        ToAddresses: [Resource.MyEmail.sender],
      },
      Content: {
        Simple: {
          Subject: {
            Data: formatSubject(formData),
          },
          Body: {
            Text: {
              Data: formatPlainTextEmail(formData),
            },
            Html: {
              Data: formatHtmlEmail(formData),
            },
          },
        },
      },
    })
  );

  return {
    statusCode: 200,
    body: "Sent OK",
  };
});
