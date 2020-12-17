import express from "express";
const router = express.Router();
import * as controller from './product.controller';

router.get('/', (req, res) => {
    res.render("index");
})
router.post('/',(req, res) => {
    console.log(req.body)
})
router.get('/getProduct', controller.getProduct);
router.post('/addProduct', controller.addProduct);
// router.delete('/:id', controller.deleteStudent);
//  router.put('/updateStudent', controller.updateStudent);
export default router;
