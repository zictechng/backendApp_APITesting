const express = require('express');
const router = express.Router()
const jwt = require("jsonwebtoken");

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const multer = require("multer");

const {MailtrapClient} = require('mailtrap')

// email method here
const transporterMailer = require('../controllers/mailSender');

const TOKEN = process.env.EMAIL_API_PASSWORD;
const client = new MailtrapClient({ token: TOKEN });

const AppSetting = require('../models/AppSettingDetails')
const Ticket = require('../models/ticketData');

const { fetchApp } = require('../middleware/appDetails');
const { loginEmail, loginText } = require('../emailTemplate/emailLogin');

const uploadLocation = "public/images"; // this is the image store location in the project
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, uploadLocation);
  },
  filename: (req, file, callBack) => {
    var img_name = Date.now() + "." + file.mimetype.split("/")[1];
    callBack(null, img_name);
  },
});

var upload = multer({ storage: storage });

  // generate ticket ID for ticket submission here
  function generateTagID() {
    return Math.floor(10000000 + Math.random() * 90000000);
    }

var appName = '';

// get company name details here..
router.get("/fetchApp_info", async (req, res) => {
    try {
      const getAppSetting = await AppSetting.findOne();
      //.sort({field_name: sort order})
      if(!getAppSetting){
        return res.json({status: 404, message: 'No record found'})
      }
      else if(getAppSetting){
        //console.log(getAppSetting.app_name)
       
        res.status(200).json({msg: '200', infoData: getAppSetting}) // success message
      }
      //console.log('App name: ' + appName)
    } catch (err) {
      res.status(500).json(err);
      console.log(err.message);
    }
  });

// submit ticket details from mobile app here..
router.post("/submit_ticketWebsite", async (req, res) => {
    //console.log("Backend Data receive ", req.body)
    const ticketNumber = generateTagID();
  
   try {
     if (req.body){
      //console.log("Ticket Inserting ", req.body.createdBy);
  
       const sumbitTicket = await Ticket.create({
        subject: "Website Contact",
        sender_name: req.body.customer_name + " "+ req.body.customer_phone,
        email: req.body.customer_email,
        ticket_message: req.body.customer_message,
        ticket_type: 'Business Ticket',
        tick_id: ticketNumber,
        ticket_closed:'Opened'
       })
          
  
   // email notification to sender here
   if(req.body.customer_email){
      fetchApp().then((result) =>{
        appName = result.app_name
        appLogo = result.app_logo
        const logoImage = `<img src=${appLogo} width='100' height='100'/>`;
        const mailBody = loginEmail(appName, 'Support Contact Message', req.body.customer_name, `this is to notify you that your message with Ticket ID ${ticketNumber} was submitted successfully, we will get in-touch shortly thank you.`, logoImage)
        const TextBody = loginText(req.body.customer_name, `this is to notify you that your message with ticket ID ${ticketNumber} was submitted successfully, our staff will get in-touch thank you.`);
        let tickMailOptions = {
        //const sender = { name: "Abel Portfolio", email: SENDER_EMAIL };
        from: { name: `${appName + ' Support'}`, email: '<noreply@ozaapp.com>' },
        to: [{ email: req.body.customer_email }],
        subject: 'Support Contact Message!',
        text: TextBody,
        html: mailBody,
      }
          
          client
            .send(tickMailOptions)
            .then(console.log)
            .catch(console.error);

      // async..await is not allowed in global scope, must use a wrapper
      // async function main() {

      //   const info = await transporterMailer.sendMail(tickMailOptions);
      //   }
    // main().catch('Message Error', console.error);
      }).catch(console.error.bind(console))
    }
  
    // email notification to admins here
    fetchApp().then((result) =>{
      appName = result.app_name
      appLogo = result.app_logo
      const logoImage = `<img src=${appLogo} width='100' height='100'/>`;
      const mailBody = loginEmail(appName, 'Online Contact Message', 'Admin', `this is to notify you that ${req.body.customer_name} sent you a message from the website contact us page with Ticket ID ${ticketNumber} kindly review and get in-touch shortly thank you. ,<br/>
      <b>Customer Email:</b> ${req.body.customer_email} <br/>
      <b>Customer Phone:</b> ${req.body.customer_phone}<br/>
      <b>Customer Message </b>  <br/>${req.body.customer_message} <br/>`, logoImage)
      const TextBody = loginText('Admin', `this is to notify you that ${req.body.customer_name} sent you a message from the website contact page with ticket ID ${ticketNumber} kindly review and get in-touch thank you.`);
      let tickMailOptions = {
      from: `${appName+' Support'} <noreply@ozaapp.com>`,
      to: 'support@ozaapp.com',
      subject: 'Online Contact Message!',
      text: TextBody,
      html: mailBody,
    }
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      const info = await transporterMailer.sendMail(tickMailOptions);
      }
  main().catch('Message Error', console.error);
    }).catch(console.error.bind(console))
  
    //res.status(200).send({ msg: "200" });
   res.send({ msg: '200'})
    }
  } catch (err) {
  console.error(err);
  //res.status(500).send({ msg: "500" });
  return res.json({status: 500, message: 'Server error: ' })
  }
  
  });

  // submit newsletter details from website app here..
router.post("/newsletter_subscriptions", async (req, res) => {
    //console.log("Backend Data receive ", req.body)
  
    const checkList = await UserNewsLetter.findOne({user_email:  req.body.userEmail }); 
    if(checkList){
      return res.json({status: 403, message: 'this email already subscribed' })
    }
    try {
    if (req.body.userEmail){
       const newsLetterTicket = await UserNewsLetter.create({
        user_email: req.body.userEmail,
        createdOn: new Date(),
       })
        
   // email notification sending
      if(req.body.userEmail && newsLetterTicket?._id){
          fetchApp().then((result) =>{
            appName = result.app_name
            appLogo = result.app_logo
            const logoImage = `<img src=${appLogo} width='100' height='100'/>`;
            const mailBody = loginEmail(appName, 'New Mailing Subscriptions', 'dear User', `this is to notify you that your subscription to our mailing list was successfully! <br/> Thank you for joining our mailing list.`, logoImage)
            const TextBody = loginText('dear User', `this is to notify you that your mailing request was successfully, you can now receive notifications and update from us.`);
            let tickMailOptions = {
            from: `${appName+' Support'} <noreply@ozaapp.com>`,
            to: req.body.userEmail,
            subject: 'Mailing Notification',
            text: TextBody,
            html: mailBody,
        }
        
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
            const info = await transporterMailer.sendMail(tickMailOptions);
            }
        main().catch('Message Error', console.error);
          }).catch(console.error.bind(console))
        
      }
      res.send({ msg: '200'})
      }
    } catch (err) {
  console.error(err);
  //res.status(500).send({ msg: "500" });
  return res.json({status: 500, message: 'Server error: ' })
  }
  
  });

module.exports = router;