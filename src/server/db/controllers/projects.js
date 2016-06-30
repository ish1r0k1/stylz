import User from '../models/user';
import Project from '../models/project';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

/*
 * GET /projects
 */
export function getProjects(req, res, next) {
  const { username } = req.decoded;

  console.log( 'uid', username )

  Project.find().populate('owner').exec((findErr, projects) => {
    if (findErr) return res.status(500).json({ message: findErr });

    console.log( 'prjs', projects )

    projects = projects.filter(project => {
      return project.owner.username === username;
    });

    const resutls = projects.map(project => {
      const { name, colors, fontSizes, fontFamilies } = project;

      return Object.assign({},
        { id: project._id },
        { name, colors, fontSizes, fontFamilies }
      )
    });

    return res.status(200).json(resutls);
  });
}

export function getProject(req, res, next) {

}

export function saveProject(req, res, next) {
  const { name, colors, fontSizes, fontFamilies } = req.body;
  const { username } = req.decoded;

  User.findOne({ username }, (findErr, user) => {
    console.log( user )

    let project = new Project({
      name: name,
      colors: colors,
      fontSizes: fontSizes,
      fontFamilies: fontFamilies,
      owner: user
    });

    project.save((saveErr) => {
      if (saveErr) return next(saveErr);

      const restult = Object.assign({},
        { id: project._id },
        { name, colors, fontSizes, fontFamilies }
      );

      return res.status(200).json(restult);
    })
  });
}

export function updateProject(req, res, next) {

}

export function deleteProject(req, res, next) {

}

export default {
  getProjects,
  getProject,
  saveProject,
  updateProject,
  deleteProject
};
