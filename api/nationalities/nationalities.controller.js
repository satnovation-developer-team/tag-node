'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const NATIONALITY = "nationality";

module.exports = {
	save_nationality: (req, res) => {
		const data = req.body;
		var pVal = {
			nationality_name : data.nationality_name
		};
		connection.query("INSERT INTO " + NATIONALITY + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_nationality: (req, res) => {
		connection.query("SELECT * FROM nationality" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}

}