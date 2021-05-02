// build your `/api/resources` router here
const db = require("./model");
const router = require("express").Router();

router.get("/resources", async (req, res, next) => {
    try{
        const resources = await db.getAll();
        res.json(resources);
    }catch(err){
        next(err);
    }
})

router.post("/resources", async (req, res, next) => {
    try{
        const resource = await db.create(req.body);
        res.json(resource)
        console.log(req.body)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})
module.exports = router;