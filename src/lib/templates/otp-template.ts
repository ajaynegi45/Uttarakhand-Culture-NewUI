const otpEmailTemplate = (name: string, otp: string) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>OTP from Uttarakhand Culture</title>
      <style>
        body {
          font-family: Helvetica, sans-serif;
          font-size: 16px;
          background-color: #f4f5f6;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 24px;
        }
        .main {
          background-color: #ffffff;
          border: 1px solid #eaebed;
          border-radius: 16px;
          padding: 24px;
        }
        .btn a {
          background-color: #0867ec;
          border: solid 2px #0867ec;
          border-radius: 4px;
          color: #ffffff;
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          margin: 0;
          padding: 12px 24px;
          text-decoration: none;
        }
        .footer {
          text-align: center;
          color: #9a9ea6;
          padding-top: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="main">
          <p>Hi ${name},
            Here is your OTP to verify your email.
          </p>
         <div class="btn">
          ${otp}
          </div>
          <p>Thank you!</p>
        </div>
        <div class="footer">
          <p>Powered by Uttarakhand Culture</p>
        </div>
      </div>
    </body>
  </html>
`;

export default otpEmailTemplate;
