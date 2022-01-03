//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/food');

//CREATE
router.post("/food", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/foods", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/food/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/food/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/food/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/food/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/food/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;