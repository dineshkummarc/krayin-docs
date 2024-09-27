(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{321:function(e,n,t){"use strict";t.r(n);var i=t(10),a=Object(i.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#sendgrid-inbound-parse"}},[e._v("SendGrid Inbound Parse")])])])]),n("p"),e._v(" "),n("h3",{attrs:{id:"sendgrid-inbound-parse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sendgrid-inbound-parse"}},[e._v("#")]),e._v(" "),n("strong",[e._v("SendGrid Inbound Parse")])]),e._v(" "),n("p",[e._v("Krayin CRM can be integrated with SendGrid’s "),n("strong",[e._v("Inbound Parse Webhook")]),e._v(" to handle incoming emails. This allows emails sent to a specific domain to be automatically processed by Krayin and displayed in the "),n("strong",[e._v("Mail > Inbox")]),e._v(" section.")]),e._v(" "),n("h4",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Overview")])]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("Inbound Parse Webhook")]),e._v(" feature of SendGrid allows emails to be converted into HTTP POST requests and forwarded to a specified URL in your application. By integrating SendGrid with Krayin CRM, you can seamlessly receive and display incoming emails.")]),e._v(" "),n("h4",{attrs:{id:"setting-up-sendgrid-inbound-parse-with-krayin-crm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-sendgrid-inbound-parse-with-krayin-crm"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Setting Up SendGrid Inbound Parse with Krayin CRM")])]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("Create a Domain and Email in SendGrid")])]),e._v(" "),n("ul",[n("li",[e._v("Log into your "),n("a",{attrs:{href:"https://app.sendgrid.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SendGrid account"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Go to "),n("strong",[e._v("Settings")]),e._v(" > "),n("strong",[e._v("Inbound Parse")]),e._v(".")]),e._v(" "),n("li",[e._v("Click "),n("strong",[e._v("Add Host & URL")]),e._v(" to configure a new Parse Webhook.")]),e._v(" "),n("li",[e._v("Add the domain from which you want to receive emails (e.g., "),n("code",[e._v("example.com")]),e._v(").")]),e._v(" "),n("li",[e._v("Under the "),n("strong",[e._v("URL")]),e._v(" field, specify your Krayin CRM webhook URL, which should be in the format:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse\n")])])]),e._v("Replace "),n("code",[e._v("yourdomain.com")]),e._v(" with your actual domain and ensure the endpoint matches your Krayin setup.")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Configure Krayin CRM to Receive Emails")])]),e._v(" "),n("ul",[n("li",[e._v("Once the webhook is set up in SendGrid, all emails sent to the configured domain will be forwarded to the specified Krayin webhook.")]),e._v(" "),n("li",[e._v("Krayin CRM will handle the incoming email data, including:\n"),n("ul",[n("li",[n("strong",[e._v("From Address:")]),e._v(" The sender's email.")]),e._v(" "),n("li",[n("strong",[e._v("To Address:")]),e._v(" The recipient (your configured email).")]),e._v(" "),n("li",[n("strong",[e._v("Subject:")]),e._v(" Email subject.")]),e._v(" "),n("li",[n("strong",[e._v("Text/HTML Body:")]),e._v(" Email content in plain text or HTML.")]),e._v(" "),n("li",[n("strong",[e._v("Attachments:")]),e._v(" Any files attached to the email.")])])])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Krayin Endpoint for Inbound Parse")])]),e._v(" "),n("ul",[n("li",[e._v("Ensure that Krayin CRM is set up to receive the POST data from SendGrid. The email content will be sent to the following Krayin endpoint:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse\n")])])])]),e._v(" "),n("li",[e._v("Krayin will parse the data sent by SendGrid, store the email information in the database, and display it in the "),n("strong",[e._v("Mail > Inbox")]),e._v(" section.")])])])]),e._v(" "),n("h4",{attrs:{id:"handling-email-attachments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handling-email-attachments"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Handling Email Attachments")])]),e._v(" "),n("p",[e._v("Krayin CRM is capable of handling attachments that are sent via email. These attachments will be forwarded from SendGrid to your endpoint as "),n("code",[e._v("multipart/form-data")]),e._v(". Make sure your server can process and store these files for later retrieval in the "),n("strong",[e._v("Mail > Inbox")]),e._v(" section of the CRM.")]),e._v(" "),n("h4",{attrs:{id:"security-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Security Considerations")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Verify the Request Origin:")]),e._v(" Ensure that incoming requests to your webhook are actually coming from SendGrid. You can verify the origin by checking headers or configuring an API key in SendGrid for additional security.")]),e._v(" "),n("li",[n("strong",[e._v("HTTPS:")]),e._v(" Always use an HTTPS endpoint for secure communication between SendGrid and your server.")])]),e._v(" "),n("h4",{attrs:{id:"debugging-and-testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debugging-and-testing"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Debugging and Testing")])]),e._v(" "),n("ul",[n("li",[e._v("SendGrid provides tools to simulate incoming emails, which can be used to test your webhook configuration.")]),e._v(" "),n("li",[e._v("Ensure that your server’s response time is efficient. SendGrid expects a response within 20 seconds. If the email processing takes longer (e.g., saving attachments), consider using asynchronous background tasks.")])]),e._v(" "),n("h4",{attrs:{id:"example-workflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-workflow"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Example Workflow")])]),e._v(" "),n("ol",[n("li",[e._v("A user sends an email to "),n("code",[e._v("contact@example.com")]),e._v(".")]),e._v(" "),n("li",[e._v("SendGrid captures the email and forwards it to your Krayin webhook ("),n("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse")]),e._v(").")]),e._v(" "),n("li",[e._v("Krayin CRM processes the incoming email, stores the details, and displays the email in the "),n("strong",[e._v("Mail > Inbox")]),e._v(" section.")])])])}),[],!1,null,null,null);n.default=a.exports}}]);