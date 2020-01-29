'use strict';

const express = require('express');

module.exports = {
	fileupload: (req, res) => {
			const data = req.body;
			console.log(req.file);
			res.status(200).json({ result: {filename: req.file.path}, Msg: "Successfully Added" });

		}
	}
	
