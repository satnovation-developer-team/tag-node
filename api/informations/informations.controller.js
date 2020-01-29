'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const INFORMATION = "informations";
const CATEGORY = "info_categories";
const EDUCATION = "educations_info";
const EXAM = "info_exams";
const UPLOAD = "upload";
const DEGREE = "info_educations";

module.exports = {
	save_information: (req, res) => {
		const data = req.body;
		var pVal = {
			first_name : data.first_name,
			middle_name : data.middle_name,
			last_name : data.last_name,
			dob : data.dob,
			gender : data.gender,
			stream : data.stream,
			father_name : data.father_name,
			mother_name : data.mother_name,
			temporary_address : data.temporary_address,
			father_occupation : data.father_occupation,
			mother_occupation : data.mother_occupation,
			permanent_address : data.permanent_address,
			mobile_number : data.mobile_number,
			email_id : data.email_id,
			NRI : data.NRI,
			categories : data.categories,
			course_id : data.course_id,
			specialization_id : data.specialization_id,
			admin_note : data.admin_note
		};
		connection.query("INSERT INTO " + INFORMATION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				console.log(results.insertId)
				data.exam.forEach(function(item){
					console.log(item)
					var pVal1 = {
						exam_name : item.exam_name,
						exam_mark : item.exam_mark,
						exam_rank : item.exam_rank,
						information_id : results.insertId
					};
					connection.query("INSERT INTO " + EXAM + " SET ?", pVal1, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						} 
					});
				})
				data.upload.forEach(function(item){
					console.log(item)
					var pVal2 = {
						aadhar_upload : item.aadhar_upload,
						tenth_upload : item.tenth_upload,
						twelveth_upload : item.twelveth_upload,
						information_id : results.insertId
					};
					connection.query("INSERT INTO " + UPLOAD + " SET ?", pVal2, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						} 
					});
				})
				data.education.forEach(function(item){
					console.log(item)
					var pVal2 = {
						year_of_passing : item.year_of_passing,
						marks_obtained : item.marks_obtained,
						remarks : item.remarks,
						information_id : results.insertId,
						education_id : item.education_id
					};
					connection.query("INSERT INTO " + DEGREE + " SET ?", pVal2, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						} 
					});
				})
			    res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		});
	},
	get_information: (req, res) => {
		connection.query("SELECT * FROM informations  INNER JOIN info_exams ON informations.id = info_exams.id" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_info_category: (req, res) => {
		const data = req.body;
		var pVal = {
			category_name : data.category_name,
			information_id : data.information_id
		};
		connection.query("INSERT INTO " + CATEGORY + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		});
	},
	get_info_category: (req, res) => {
		connection.query("SELECT * FROM info_categories" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_info_education: (req, res) => {
		const data = req.body;
		var pVal = {
			name_of_degree : data.name_of_degree,
		};
		connection.query("INSERT INTO " + EDUCATION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		});
	},
	get_education: (req, res) => {
		connection.query("SELECT * FROM educations_info" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}


}
