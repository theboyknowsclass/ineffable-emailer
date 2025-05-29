interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const formatSubject = (data: ContactFormData): string => {
  return `New message from ${data.name} (${data.email})`;
};

export const formatPlainTextEmail = (data: ContactFormData): string => {
  return `Name: ${data.name}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}`;
};

export const formatHtmlEmail = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .message { margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="field">
      <span class="label">Name:</span> ${data.name}
    </div>
    <div class="field">
      <span class="label">Email:</span> ${data.email}
    </div>
    <div class="field">
      <span class="label">Company:</span> ${data.company}
    </div>
    <div class="message">
      <div class="label">Message:</div>
      ${data.message.replace(/\n/g, "<br>")}
    </div>
  </div>
</body>
</html>`;
};
