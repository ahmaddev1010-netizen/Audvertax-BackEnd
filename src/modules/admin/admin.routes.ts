import { Router } from "express";
import { requireAuth } from "../auth/auth.middleware.js";
import { requireAdmin, requireAdminOrStaff } from "../auth/admin.middleware.js";
import {
  listAdminApplicationsController,
  listAdminUsersController,
  getAdminApplicationController,
  createStaffController,
  listStaffController,
  removeStaffController,
  updateAdminApplicationStatusController,
} from "./admin.controller.js";

export const adminRoutes = Router();

adminRoutes.use(requireAuth, requireAdminOrStaff);
adminRoutes.post("/staff", requireAdmin, createStaffController);
adminRoutes.get("/staff", requireAdmin, listStaffController);
adminRoutes.delete("/staff/:id", requireAdmin, removeStaffController);
adminRoutes.get("/users", listAdminUsersController);
adminRoutes.get("/applications", listAdminApplicationsController);
adminRoutes.get("/applications/:id", getAdminApplicationController);
adminRoutes.patch("/applications/:id/status", requireAdmin, updateAdminApplicationStatusController);
