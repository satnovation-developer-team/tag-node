'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const COURSES = "courses";
const COURSETYPES = "course_types";
const COURSEDURATION = "course_durations";
const COURSEADMISSION = "admission_statuses";
const COURSEFEES = "course_fees";
const COURSEOVERVIEW = "course_single_page";
const COURSESKILL = "course_skillsets";
const COURSECRITERIA = "course_criterias";
const COURSERECRUITER = "course_recruiters";
const COURSECURRICULUM = "course_curriculums";
const EXAM = "exams";
const COURSEEXAM = "course_exams";





module.exports = {
	save_course: (req, res) => {
		const data = req.body;
		var pVal = {
			course_name : data.course_name
		};
		connection.query("INSERT INTO " + COURSES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_course: (req, res) => {
		connection.query("SELECT * FROM courses" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_coursetype: (req, res) => {
		const data = req.body;
		var pVal = {
			course_type_name : data.course_type_name
		};
		connection.query("INSERT INTO " + COURSETYPES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	save_courseduration: (req, res) => {
		const data = req.body;
		var pVal = {
			course_duration : data.course_duration
		};
		connection.query("INSERT INTO " + COURSEDURATION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	save_courseadmission: (req, res) => {
		const data = req.body;
		var pVal = {
			admission_status : data.admission_status
		};
		connection.query("INSERT INTO " + COURSEADMISSION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_admission: (req, res) => {
		connection.query("SELECT * FROM admission_statuses" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_coursefee: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	image_upload : data.image_upload,
		 	location_id : data.location_id,
		 	course_type_id : data.course_type_id,
		 	course_duration_id : data.course_duration_id,
		 	admission_status_id : data.admission_status_id,
		 	college_course_mapping_id : data.college_course_mapping_id,
		 	fee : data.fee,
		 	admission_type : data.admission_type
		 };
		 connection.query("INSERT INTO " + COURSEFEES + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_overview: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	image_upload : data.image_upload,
		 	title : data.title,
		 	content : data.content,
		 	guide : data.guide
		 };
		 connection.query("INSERT INTO " + COURSEOVERVIEW + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_courseskill: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	course_sp_id : data.course_sp_id,
		 	skills : data.skills,
		 	points : data.points
		 };
		 connection.query("INSERT INTO " + COURSESKILL + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_coursecriteria: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	course_sp_id : data.course_sp_id,
		 	criteria : data.criteria,
		 	points : data.points
		 };
		 connection.query("INSERT INTO " + COURSECRITERIA + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_courserecruiter: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	course_sp_id : data.course_sp_id,
		 	job_title : data.job_title,
		 	job_content : data.job_content,
		 	recruiters_content : data.recruiters_content,
		 	recruiters_list : data.recruiters_list
		 };
		 connection.query("INSERT INTO " + COURSERECRUITER + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_coursecurriculum: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	course_sp_id : data.course_sp_id,
		 	title : data.title,
		 	content : data.content,
		 	duration : data.duration,
		 	specialization_id : data.specialization_id,
		 	course_id : data.course_id
		 };
		 connection.query("INSERT INTO " + COURSECURRICULUM + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_exam: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	exam_name : data.exam_name
		 };
		 connection.query("INSERT INTO " + EXAM + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	},
	save_courseexam: (req, res) => {
		 const data = req.body;
		 var pVal = {
		 	course_sp_id : data.course_sp_id,
		 	title : data.title,
		 	content : data.content,
		 	exam_id : data.exam_id
		 };
		 connection.query("INSERT INTO " + COURSEEXAM + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		 }) 
	}
}	