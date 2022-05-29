import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Survey } from "./components/Survey/index";
import { HomePage } from "./components/Home";


export default function SurveyJSReactApplication() {
  return (
      <div>
        <div className="app-content">
          <Routes>
            <Route exact path="/" element={<HomePage/>}>
            </Route>
            <Route path="/survey" element={<Survey/>}>
            </Route>
          </Routes>
        </div>
      </div>
  );
}