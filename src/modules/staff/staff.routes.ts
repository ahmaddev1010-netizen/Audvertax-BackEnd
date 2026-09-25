import { Router } from "express";
import { requireAuth } from "../auth/auth.middleware.js";
import { requireAdminOrStaff } from "../auth/admin.middleware.js";
import { listAdminUsersController } from "../admin/admin.controller.js";

export const staffRoutes = Router();

staffRoutes.use(requireAuth, requireAdminOrStaff);
staffRoutes.get("/users", listAdminUsersController);
