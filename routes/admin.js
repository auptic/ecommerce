var router = require('express-router');
var Category = require('../models/category');



router.get('/add-category', function(req, res, next) {
  res.render('admin/add-category', { message: req.flash('success')});
});

router.post('/add-category', function(req, res, next) {
  var category = new Category();
  category.name = req.body.name;

  category.save(function(err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added ' + category.name + ' to the list of categories.');
    return res.redirect('/add-category');
  });
});
