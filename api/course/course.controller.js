'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SINGLEPAGE = "courses_single_page";

module.exports = {
	save_courses: (req, res) => {
		const data = req.body;
		var pVal = {
			image_upload : data.image_upload,
			course_name : data.course_name,
			category : data.category,
			area_of_interest : data.area_of_interest,
			pdf_upload : data.pdf_upload,
			overview : data.overview,
			skill_set : data.skill_set,
			eligibility_criteria : data.eligibility_criteria,
			entrance_exam : data.entrance_exam,
			course_curriculum : data.course_curriculum,
			specialization : data.specialization,
			job_profile : data.job_profile,
			recruiters_content : data.recruiters_content
		};
		connection.query("INSERT INTO " + SINGLEPAGE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		});
	},
	get_course: (req, res) => {
		connection.query("SELECT * FROM courses_single_page" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
}
