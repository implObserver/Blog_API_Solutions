import { commentQueries } from './comment/queries.js';
import { postQueries } from './post/queries.js';
import { profileQueries } from './profile/queries.js';
import { userQueries } from './user/queries.js';

export const prismaDB = {
  ...commentQueries,
  ...postQueries,
  ...userQueries,
  ...profileQueries,
};
