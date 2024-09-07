import React, { Suspense, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import AuthLayout from "../modules/auth/pages/Auth.tsx";
import MainLayout from "../modules/common/pages/MainLayout.tsx";
import ProtectedRoute from "../utils/ProtectedRoute.tsx";
import PublicRoute from "../utils/PublicRoute.tsx";
import Dashboard  from "../modules/dashboard/pages/Dashboard.tsx";
import Appointment  from "../modules/appointments/pages/Appointment.tsx";
import Patient  from "../modules/patients/pages/Patients.tsx";
import PatientDocument  from "../modules/patientDocuments/pages/PatientDocument.tsx";
import PatientProfile  from "../modules/patientProfile/pages/PatientProfile.tsx";
import Telemedicine  from "../modules/telemedicine/pages/Telemedicine.tsx";
import DoctorProfile from "../modules/doctorProfile/pages/DoctorProfile.tsx";
import SalaryReport  from "../modules/salaryReport/pages/SalaryReport.tsx";
import Analytics  from "../modules/analytics/pages/Analytics.tsx";
import MedicalEvent from "../modules/medicalEvents/pages/MedicalEvent.tsx";
import MedicalDetailEvent from "../modules/medicalEvents/pages/MedicalDetailEvent.tsx";
import Settings  from "../modules/settings/pages/Settings.tsx";
import Login from "../modules/auth/pages/Login.tsx";
import Register from "../modules/auth/pages/Register.tsx";
import NotFound from "../modules/notFound/pages/NotFound.tsx";

function App(): ReactElement {
    return (
        <Routes>
            <Route
                path="/auth"
                element={
                    <PublicRoute>
                        <AuthLayout />
                    </PublicRoute>
                }
            >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="" element={<Dashboard />} />
                <Route path="appointments" element={<Appointment />} />
                <Route path="patients" element={<Patient />} />
                <Route path="patient-documents" element={<PatientDocument />} />
                <Route path="patient-profile/:id" element={<PatientProfile />} />
                <Route path="doctor-profile/:id" element={<DoctorProfile />} />
                <Route path="telemedicine" element={<Telemedicine />} />
                <Route path="salary-report" element={<SalaryReport />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="medical-events" element={<MedicalEvent />} />
                <Route path="medical-events/:id" element={<MedicalDetailEvent />} />
                <Route path="settings" element={<Settings />} />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
