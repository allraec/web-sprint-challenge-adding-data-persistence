// build your `Task` model here
const db = require("../../data/dbConfig")
const mappers = require("../../data/helpers/mappers")

const getAll = () => {
    let query =  db("tasks as t")
        .innerJoin("projects as p", "p.project_id", "t.project_id")
        .select("t.task_id", "t.task_description", "t.task_notes", "t.task_completed", "p.project_name", "p.project_description");
    return query.then((tasks)=> {
        return tasks.map((tasks) => mappers.taskToBody(tasks))
    })
}

const getById = task_id => {
    return db("tasks")
      .where({task_id})
      .first()
      .then((task) => {
        if (task) {
            return mappers.taskToBody(task);
        }else {
            return null;
        }
      })
  }

const create = task => {
    return db("tasks")
        .insert(task)
        .then(id => {
            return getById(id[0]);
        })
}
module.exports = {
    getAll,
    getById,
    create
}