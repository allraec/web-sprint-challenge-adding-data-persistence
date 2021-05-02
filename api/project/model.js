// build your `Project` model here
const db = require("../../data/dbConfig")
const mappers = require("../../data/helpers/mappers")

const getAll = () => {
    let query =  db("projects");
    return query.then((projects)=> {
        return projects.map((project) => mappers.projectToBody(project))
    })
}

const getById = project_id => {
    return db("projects")
      .where({project_id})
      .first()
      .then((project) => {
        if (project) {
            return mappers.projectToBody(project);
          } else {
            return null;
          }
      })
  }

const create = project => {
    return db("projects")
        .insert(project)
        .then(id => {
            return getById(id[0]);
        })
}
module.exports = {
    getAll,
    getById,
    create
}