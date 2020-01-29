'use strict';

const express = require('express');
const connection = require('./../../config/db.js');
const bcrypt = require('bcrypt');

const USER = "users";
const EDUCATIONAL_BACKGROUND = "educational_background";
const WORK_EXPERIENCE = "work_experience";
const EDUCATION_PREFERENCE = "education_preferences";

module.exports = {
	auths: (req, res) => {
		const data = req.body;
		var pVal= {
			name : data.name,
			mobile_number : data.mobile_number,
			email_id : data.email_id,
			nationality : data.nationality,
			password : bcrypt.hashSync(data.password, 8),
			city : data.city,
			role_id : data.role_id,
			otp : '123456',
			token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzk0Mzc3NDksImV4cCI6NDIwOTE4Mzc0OX0.63mJb6UWQHbIOHmzT4YkEKy5mSv1Hdu9mBCSj5nJb3o'
		};
		connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id  + "'", function (err, results, fields) {
			if (err) {
				console.log(err);
				res.status(500).json({ status: "Fail", Msg: "Something went wrong" });
			} else {
				if (results.length > 0) {
					res.status(200).json({status: "Fail", Msg: "Email already exists" });
				}else {
					connection.query("INSERT INTO " + USER + " SET ?", pVal, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", Msg: err });
						}else{
							res.status(200).json({ status: "Success", Msg: "Successfully Inserted"});
						}
					})
				}
			}
		})
		
	},
	update_auths: (req, res) => {
	 const data = req.body;
	 const user_id = req.params.id;
	 var pVal = {
	  mobile_number: data.mobile_number,
	  email_id: data.email_id,
	  city: data.city
	 };
	 connection.query("SELECT * FROM " + USER + " WHERE id = '" + user_id + "'", function(err, user, results) {
	  if (err) {
	   return res.status(401).json({
	    message: err
	   });
	  } else {
	   if (results.length > 0) {
	    connection.query("UPDATE " + USER + " SET mobile_number = '" + data.mobile_number + "', email_id = '" + data.email_id + "', city = '" + data.city + "' WHERE id = " + user_id ,
	     function(err, user, results) {
	      if (err) {
	       res.status(500).json({
	        errors: err
	       })
	      } else {
	       data.educational_background.forEach(function(item) {
	        if (item.educational_background_id) {
	        	connection.query("UPDATE " + EDUCATIONAL_BACKGROUND + " SET course_level = '" + item.course_level + "', school_name = '" + item.school_name + "', course_completion_year = '" + item.course_completion_year + "', board = '" + item.board +"', subjects = '" + item.subjects + "', marks = '" + item.marks + "' WHERE id = " + item.educational_background_id,
	        	 function(err, user, results) {
	        	 	if (err) {
	        	 		res.status(500).json({ errors: err})
	        	 	}
	        	 })
	        
	        } else {
	         var pVal1 = {
	          user_id: user_id,
	          course_level: item.course_level,
	          school_name: item.school_name,
	          course_completion_year: item.course_completion_year,
	          board: item.board,
	          subjects: item.subjects,
	          marks: item.marks
	         };
	         connection.query("INSERT INTO " + EDUCATIONAL_BACKGROUND + " SET ?", pVal1, function(err, results, fields) {
	          if (err) {
	          	res.status(500).json({
	            status: "Fail",
	            err: err
	           });
	          }
	         });
	        }

	       }),

	       data.work_experience.forEach(function(item) {
	        if (item.work_experience_id) {
	        	connection.query("UPDATE " + WORK_EXPERIENCE + " SET experience = '" + item.experience + "', employer_name = '" + item.employer_name + "', designation = '" + item.designation + "', department = '" + item.department +"', current_job = '" + item.current_job + "' WHERE id = " + item.work_experience_id,
	        	 function(err, user, results) {
	        	 	if (err) {
	        	 		res.status(500).json({ errors: err})
	        	 	}
	        	 })
	        
	        } else {
	         var pVal1 = {
	          user_id: user_id,
	          experience: item.experience,
	          employer_name: item.employer_name,
	          designation: item.designation,
	          department: item.department,
	          current_job: item.current_job
	         };
	         connection.query("INSERT INTO " + WORK_EXPERIENCE + " SET ?", pVal1, function(err, results, fields) {
	          if (err) {
	           res.status(500).json({
	            status: "Fail",
	            err: err
	           });
	          }
	         });
	         res.status(200).json({Msg:"Successfully added"})
	        }

	       }),

	       data.education_preferences.forEach(function(item) {
	        if (item.education_preferences_id) {
	        	connection.query("UPDATE " + EDUCATION_PREFERENCE + " SET education_stream = '" + item.education_stream + "', course = '" + item.course + "', specialization = '" + item.specialization + "', mode_of_study = '" + item.mode_of_study +"' WHERE id = " + item.education_preferences_id,
	        	 function(err, user, results) {
	        	 	if (err) {
	        	 		res.status(500).json({ errors: err})
	        	 	}
	        	 })
	        	
	        } else {
	         var pVal1 = {
	          user_id: user_id,
	          education_stream: item.education_stream,
	          course: item.course,
	          specialization: item.specialization,
	          mode_of_study: item.mode_of_study
	         };
	         connection.query("INSERT INTO " + EDUCATION_PREFERENCE + " SET ?", pVal1, function(err, results, fields) {
	          if (err) {
	           res.status(500).json({
	            status: "Fail",
	            err: err
	           });
	          }
	         });
	         res.status(200).json({ Msg: "Successfully Added" });
	        }

	       });

	      }
	     });


	   }
	  }
	 });
	}
}