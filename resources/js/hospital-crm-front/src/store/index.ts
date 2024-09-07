import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { dashboardSlice } from '../modules/dashboard/store/index.ts';
import { appointmentSlice } from '../modules/appointments/store/index.ts';
import { patientSlice, diseaseHistorySlice } from '../modules/patients/store/index.ts';
import { analyticsSlice } from '../modules/analytics/store/index.ts';
import { doctorProfileSlice } from '../modules/doctorProfile/store/index.ts';
import { medicalEventSlice } from '../modules/medicalEvents/store/index.ts';
import { patientDocumentSlice } from '../modules/patientDocuments/store/index.ts';
import { salaryReportSlice } from '../modules/salaryReport/store/index.ts';
import { settingsSlice } from '../modules/settings/store/index.ts';
import { telemedicineSlice } from '../modules/telemedicine/store/index.ts';
import { authSlice } from '../modules/auth/store/index.ts';
import commonSlice from '../modules/common/store/commonSlice.ts';
import medicalServiceSlice from '../modules/appointments/store/medicalServiceSlice';
import patientSearchSlice from '../modules/appointments/store/patientSearchSlice';
import laboratoryTestsSlice from '../modules/patientProfile/store/laboratoryTestsSlice';
import patientProfileTreatmentSlice from '../modules/patientProfile/store/patientProfileTreatmentSlice';
import patientProfileDiseaseHistorySlice from '../modules/patientProfile/store/patientProfileDiseaseHistorySlice';
import patientProfileMetricsSlice from '../modules/patientProfile/store/patientProfileMetricsSlice';
import patientProfileAppointmentsSlice from '../modules/patientProfile/store/patientProfileAppointmentsSlice';
import patientProfileGeneralInfoSlice from '../modules/patientProfile/store/patientProfileGeneralInfoSlice';

export const store = configureStore({
    reducer: {
        common: commonSlice,
        auth: authSlice,
        dashboard: dashboardSlice,
        appointment: appointmentSlice,
        medicalService: medicalServiceSlice,
        patientSearch: patientSearchSlice,
        patient: patientSlice,
        analytics: analyticsSlice,
        doctorProfile: doctorProfileSlice,

        patientDocument: patientDocumentSlice,
        patientProfileGeneralInfo: patientProfileGeneralInfoSlice,
        patientProfileAppointments: patientProfileAppointmentsSlice,
        patientProfileMetrics: patientProfileMetricsSlice,
        patientProfileDiseaseHistory: patientProfileDiseaseHistorySlice,
        laboratoryTests: laboratoryTestsSlice,
        patientProfileTreatment: patientProfileTreatmentSlice,

        medicalEvents: medicalEventSlice,
        salaryReport: salaryReportSlice,
        settings: settingsSlice,
        telemedicine: telemedicineSlice,
        diseaseHistory: diseaseHistorySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
