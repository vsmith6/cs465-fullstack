const fs = require('fs')

//GET Contact View
const contact = (req, res) => {
    pageTitle = 'Travlr Getaways - Contact';
    res.render('contact', {title: pageTitle})
};

module.exports = {
    contact
}