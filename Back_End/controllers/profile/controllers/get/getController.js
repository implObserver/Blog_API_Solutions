import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';
import path from 'path';

const profile_detail_api = asyncHandler(async (req, res, next) => {
  const profile = prismaDB.findProfile(req.id);
  if (profile === null) {
    const err = new Error('Profile not found');
    err.status = 404;
    return next(err);
  }

  res.json({
    title: 'Profile Detail',
    profile,
  });
});

const profile_avatar_get = asyncHandler(async (req, res) => {
  const directory = req.user.profile.avatar;
  const defaultDirectory = `${__dirname}/public/images/default/avatar/default.svg`;

  fs.readdir(directory, (err, files) => {
    if (files) {
      const extname = path.extname(files[0]).toLowerCase();
      let contentType = 'application/octet-stream';

      switch (extname) {
        case '.avif':
          contentType = 'image/avif';
          break;
        case '.jpeg':
        case '.jpg':
          contentType = 'image/jpeg';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.svg':
          contentType = 'image/svg+xml';
          break;
        default:
          return res.status(415).send('Unsupported Media Type');
      }

      res.set('Content-Type', contentType);
      res.sendFile(path.resolve(`${__dirname}/${directory}/${files[0]}`));
    } else {
      res.sendFile(path.resolve(defaultDirectory));
    }
  });
});

export const getController = {
  profile_detail_api,
  profile_avatar_get,
};
