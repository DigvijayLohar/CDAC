import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import PatientReport from "./components/PatientReport";
import AddDiagnosis from "./components/AddDiagnosis";
import ViewDiagnosis from "./components/ViewDiagnosis";
import GetReport from "./components/GetReport";
import MedicalHistory from "./components/MedicalHistory";
import UpdateReport from "./components/UpdateReport";

import DoctorFeedback from "./components/DoctorFeedback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/patient-report" element={<PatientReport />} />
        <Route path="/add-diagnosis" element={<AddDiagnosis />} />
        <Route path="/view-diagnosis" element={<ViewDiagnosis />} />
        <Route path="/get-report" element={<GetReport />} />\
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/update-report" element={<UpdateReport />} />
        <Route path="/doctor-feedback" element={<DoctorFeedback/>} />

      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
