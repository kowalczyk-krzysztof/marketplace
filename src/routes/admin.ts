import express, { Router } from 'express';
import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from '../controllers/admin';
import { authorize, protect, findByIdExists } from '../middleware/auth';

const adminRouter: Router = express.Router();
// Protect and authorize middleware is necessary for admin routes to work properly
adminRouter.route('/users').get(protect, authorize('ADMIN'), getUsers);
adminRouter
  .route('/users/:id')
  .delete(protect, authorize('ADMIN'), findByIdExists, deleteUser)
  .get(protect, authorize('ADMIN'), findByIdExists, getUser)
  .put(protect, authorize('ADMIN'), findByIdExists, updateUser);

export default adminRouter;