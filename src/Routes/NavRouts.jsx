import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import AcademicRegistration from '../Components/AcademicRegistration'
import AttendanceRegister from '../Components/AttendanceRegister'
import CareerChoice from '../Components/CareerChoice'
import Courses from '../Components/Courses'
import CounsellingDiary from '../Components/CounsellingDiary'
import ClubsActivities from '../Components/ClubsActivities'
import ExamSection from '../Components/ExamSection'
import Feedback from '../Components/Feedback'
import FeePayments from '../Components/FeePayments'
import HostelManagement from '../Components/HostelManagement'
import Hallticket from '../Components/Hallticket'
import InfrastructureRelated from '../Components/InfrastructureRelated'
import Library from '../Components/Liberary'
import Login from '../Components/Login'
const NavRouts = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/Academic-Registration" element={<AcademicRegistration />}></Route>
      <Route path="/Attendance-register" element={<AttendanceRegister/>}></Route>
      <Route path="/Career-Choice" element={<CareerChoice/>}></Route>
      <Route path="/Courses" element={<Courses />}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Counselling-Diary" element={<CounsellingDiary />}></Route>
      <Route path="/Clubs/Activities" element={<ClubsActivities />}></Route>
      <Route path="/Exam-Section" element={<ExamSection />}></Route>
      <Route path="/Feedback" element={<Feedback/>}></Route>
      <Route path="/Fee-Payments" element={<FeePayments />}></Route>
      <Route path="/Hostel-Management" element={<HostelManagement />}></Route>
      <Route path="/Hallticket" element={<Hallticket/>}></Route>
      <Route path="/Hallticket" element={<Hallticket/>}></Route>
      <Route path="/Infrastructure-Related" element={<InfrastructureRelated/>}></Route>
      <Route path="/Library" element={<Library/>}></Route>
    </Routes>
  )
}

export default NavRouts
