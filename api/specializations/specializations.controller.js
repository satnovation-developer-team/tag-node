'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SPL = "specializations";



module.exports = {
	save_specialization: (req, res) => {
		const data = req.body;
		var pVal = {
			specialization_name : data.specialization_name,
			course_id : data.course_id
		};
		connection.query("INSERT INTO " + SPL + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_specialization: (req, res) => {
		connection.query("SELECT specializations.id, specializations.specialization_name, courses.id as course_id, courses.course_name FROM specializations  INNER JOIN courses ON specializations.course_id = courses.id", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: results, Msg: " Fetched Successfully" });
			}
		}) 
	}
}
	