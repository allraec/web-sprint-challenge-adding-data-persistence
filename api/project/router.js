// build your `/api/projects` router here
const db = require("./model");
const router = require("express").Router();

router.get("/projects", async (req, res, next) => {
    try{
        const projects = await db.getAll();
        res.json(projects);
    }catch(err){
        next(err);
    }
})

router.post("/projects", async (req, res, next) => {
    try{
        const project = await db.create(req.body);
        res.json(project)
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