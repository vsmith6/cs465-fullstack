const fs = require('fs')

//GET Meals View
const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', {title: pageTitle});

};

module.exports = {
    meals
}