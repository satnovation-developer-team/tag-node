'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SPL = "specialization";



module.exports = {
	save_specialization: (req, res) => {
		const data = req.body;
		var pVal = {
			specialization_name : data.specialization_name
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
		connection.query("SELECT * FROM specialization", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: results, Msg: " Fetched Successfully" });
			}
		}) 
	}
}
	