const newsLetterEmail = (clientName) => `<p>Hi ${clientName}, here you have today news.</p>`

const loginEmail = (sendCompanyName, sendTitle, sendReceiverName, sendMessage, logo) =>
    `<!DOCTYPE html>
    <html>
    <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    } 
    @media screen and (max-width: 480px) {
        .mobile-hide {
            display: none !important;
        }
        .mobile-center {
            text-align: center !important;
        }
    }
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
    <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
    
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
            
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#1D2667">
                
                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                            <tr>
                                <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 25px; font-weight: 700; line-height: 35px;" class="mobile-center">
                            <h3 style="font-size: 25px; font-weight: 700; margin: 0; color: #ffffff;">${sendCompanyName}</h3>
                        </td>
                    </tr>
                </table>
            </div>
            
            <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;" class="mobile-hide">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                    <tr>
                        <td align="right" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                            <table cellspacing="0" cellpadding="0" border="0" align="right">
                                <tr>
                                    <td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                        <p style="font-size: 18px; font-weight: 400; margin: 0; color: #ffffff;"><a href="#" target="_blank" style="color: #ffffff; text-decoration: none;">
                                        ${logo} &nbsp;</a></p>
                                    </td>
                                   
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
          
            </td>
        </tr>
        <tr>
            <td height="296" align="center" bgcolor="#ffffff" style="padding: 35px 35px 20px 35px; background-color: #ffffff;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                    <img src="https://img.icons8.com/ios/100/null/user-male-circle--v2.png" style="display: block; border: 0px;" /><br>
                        <h4 style="font-size: 20px; font-weight: 600; line-height: 26px; color: #333333; margin: 0;">
                            ${sendTitle}
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                        <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                        Hello ${sendReceiverName}, ${sendMessage}
                        </p>
                    </td>
                </tr>
                <tr>
                      <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                      <h3 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                       
                      </h3>
                          <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                          
                          </p>
                      </td>
                  </tr>
                <tr>
                    <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                        <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                        </p>
                    </td>
                </tr>
            </table>
            
            </td>
        </tr>
        
        <tr>
            <td align="center" style=" padding: 35px; background-color: #010A4F;" bgcolor="#010A4F">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                        <h5 style="font-size: 18px; font-weight: 600; line-height: 15px; color: #ffffff; margin: 0;">
                            Contact support for more details.
                        </h5>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 25px 0 15px 0;">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" style="border-radius: 5px;" bgcolor="#66b3b7">
                                  <a href="https://ozaapp.com/contact-us" target="_blank" style="font-size: 18px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; background-color: #1D2667; padding: 15px 30px; border: 1px solid #1D2667; display: block;">Contact</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                
                <tr>
                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                        <p style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">&nbsp;</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                        <p style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                            
                            You have received this email because you are a Customer of ${sendCompanyName}<br>
                            This email, its attachment and any rights attaching hereto are, unless the content clearly indicates otherwise are the property of ${sendCompanyName}. It is confidential, private and intended for the address only.
                        
                        </p>
                    </td>
                </tr>
            </table>
            </td>
        </tr>
    </table>
    </td>
</tr>
</table>
</body>
    </html>`

const loginText = (sendReceiverName, textMessage) =>
    `Hello ${sendReceiverName}, ${textMessage}`

module.exports = {newsLetterEmail, loginEmail, loginText}