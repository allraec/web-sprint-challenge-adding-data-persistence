// build your `/api/tasks` router here
const db = require("./model");
const router = require("express").Router();

router.get("/tasks", async (req, res, next) => {
    try{
        const tasks = await db.getAll();
        res.json(tasks);
    }catch(err){
        next(err);
    }
})

router.post("/tasks", async (req, res, next) => {
    try{
        const task = await db.create(req.body);
        res.json(task)
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