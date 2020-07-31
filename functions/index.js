const functions = require('firebase-functions');

exports.sms = functions.https.onRequest((request, res) => {

    const credentials = {
        apiKey: 'b7c617e08efbbab9ea9b2c645780dbf20e917f5530a932a9d74ac010f9f0293f', // use your sandbox app API key for development in the test environment
        username: 'sandbox', // use 'sandbox' for development in the test environment
    };
    const africastalking = require('africastalking')(credentials);

    // Initialize a service e.g. SMS
    const sms = africastalking.SMS

    // Use the service
    let options = {
        to: ['+254703127101'],
        message: "I'm a lumberjack and its ok, I work all night and sleep all day"
    }

    // Send message and capture the response or error
    sms.send(options)
        .then(response => {
            console.log(response);
            return res.send("Success your message has been sent \n" + JSON.stringify(response.SMSMessageData.Recipients[0]));

        })
        .catch(error => {
            console.log(error);
            res.send("Oops Message not sent \n" + error);
        });

});