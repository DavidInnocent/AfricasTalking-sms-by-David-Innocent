const functions = require('firebase-functions')

let jiraApiKey = 'lbwjULpJs75JBaF48AR1B61D'


const credentials = {
    apiKey: '5f1bfe2488b56b40c6c104828c5dea3ac2dffa13d1f6b456562edacdaffcdc9b', // use your sandbox app API key for development in the test environment
    username: 'sandbox', // use 'sandbox' for development in the test environment
};
const africastalking = require('africastalking')(credentials)


exports.sms = functions.https.onRequest((request, res) => {

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