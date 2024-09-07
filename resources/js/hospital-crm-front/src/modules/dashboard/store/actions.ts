
import { createAsyncThunk } from "@reduxjs/toolkit";
import dashboardService from "../services/index.ts";
import { Appointment } from "./types";

export const retrieveDashboardData = createAsyncThunk(
    "dashboard/appointment-score",
    async () => {
        const res = await dashboardService.getAll();
        return res.data;
    }
);

export const fetchAppointmentDetails = createAsyncThunk(
    "dashboard/fetchAppointmentDetails",
    async (id: number) => {
      try {
        const appointmentData = await dashboardService.fetchAppointmentDetails(id);
        return appointmentData.data;
      } catch (error) {
        throw error;
      }
    }
  );

export const updateAppointment = createAsyncThunk(
    "dashboard/updateAppointment",
    async (appointment: Appointment) => {
        try {
            await dashboardService.updateAppointment(appointment);
            return appointment;
        } catch (error) {
            throw error;
        }
    }
);
