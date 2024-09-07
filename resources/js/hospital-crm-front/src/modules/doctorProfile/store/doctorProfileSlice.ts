import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctorPatientVisitsForMonth, fetchDoctorProfileData, updateDoctorProfileData } from "./actions.ts";
import {  DoctorProfileState } from "./types.ts";

const initialState: DoctorProfileState = {
    personalInformation: {
        id: 0,
        full_name: '',
        address: '',
        email: '',
        phone_number: '',
        education: [],
        experience: [],
        languages: [],
        current_location: [],
        certifications: [],
        medical_license: [],
        professional_memberships: [],
        awards: [],
        publications: [],
        research_interests: [],
    },
    timeSpentThisMonth: {
        offline: 0,
        online: 0,
        total: 0,
    },
    patientsServedThisMonth: {
        all_patients: 0,
        regular_patients: 0,
        new_patients: 0,
    },
    notificationsOverview: {
        total_notifications: 0,
        unread_notifications: 0,
        read_notifications: 0,
    },
    patientDemographics: {
        total_patients: 0,
        adults: 0,
        children: 0,
    },
    patientPayments: {
        processed_payment: 0,
        complete_payment: 0,
        confirmed_payment: 0,
    },
    visitsForMonthData: [],
    visitsForMonthMeta: {
        current_page: 1,
        last_page: 0,
        per_page: 0,
        total: 0,
    },
    loading: false,
    error: null,
};

const doctorProfileSlice = createSlice({
    name: "doctorProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctorProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchDoctorProfileData.fulfilled,
                (state: DoctorProfileState, action) => {
                    state.loading = false;
                    state.personalInformation = action.payload.personal_information;
                    state.timeSpentThisMonth = action.payload.time_spent_this_month;
                    state.patientsServedThisMonth = action.payload.patients_served_this_month;
                    state.notificationsOverview = action.payload.notifications_overview;
                    state.patientDemographics = action.payload.patient_demographics;
                    state.patientPayments = action.payload.patient_payments;
                }
            )
            .addCase(
                fetchDoctorProfileData.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.error.message || "Failed to fetch data";
                }
            )
            .addCase(fetchDoctorPatientVisitsForMonth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctorPatientVisitsForMonth.fulfilled, (state, action) => {
                state.loading = false;
                state.visitsForMonthData = action.payload.data.visit_data;
                state.visitsForMonthMeta = action.payload.data.visit_meta;
            })
            .addCase(fetchDoctorPatientVisitsForMonth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch visit data";
            })
            .addCase(updateDoctorProfileData.fulfilled, (state, action) => {
                state.personalInformation = {
                    ...state.personalInformation,
                    ...action.payload,
                };
            });
    },
});

export default doctorProfileSlice.reducer;
