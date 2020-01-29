'use strict';

const express = require('express');

const Auth = require('../auths/auths.controller')
const connection = require('./../../config/db.js');
const config = require('./../../config/local.env.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const USER = "users"

module.exports = {
	login: (req, res) => {
		const data = req.body;
		var pVal = {
			email_id : data.email_id,
			password : data.password
		};
		
		connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id +"'", function (err, user, results) {
			if(err){
			    return res.status(401).json({message : err});
			}
			console.log(user);
			if(user.length > 0) {
				// var isPasswordValid = bcrypt.compareSync(data.password, user[0].password);
				console.log(data.password)
				console.log(user[0].password)
				if(!isPasswordValid){
		            	return res.status(200).json({auth : false, token : null, message : "Not Authorised User"});
		           }else{
		                 let payload = {
		                     user_id : user._id,
		                     email_id : user.email_id
		                 }
		                 let token = jwt.sign(payload, config.secrets.session,{expiresIn : config.secrets.expiresIn});
		                return res.status(200).json({auth : true, token : token, message : "User Logged In Successfully"});
		          }
			} else {
				res.status(500).json({ status: "Fail", Msg: "Invalid username and password" });
			}

			// if(data.password && user.password > 0)
			
		})
    },
      forget_pwd: (req, res) => {
      	const data  = req.body;
      	var pVal = {
      		email_id : data.email_id,
      		password : data.password
      	};
      	connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id +"'", function(err, user, results) {
      		if(err) {
      			return res.status(401).json({message : err});
      		}
      		else {
      			if (results.length > 0) {
      				connection.query("UPDATE " + USER + " SET   password = '" + bcrypt.hashSync(data.password, 8) + "' WHERE email_id = '" + data.email_id +"'", function(err, user, results) {
      					if(err){
      						res.status(500).json({errors: err})
      					}
      					// 	var isPasswordValid = bcrypt.compareSync(data.password, user[0].password);
      					// console.log(data.password)
      					// console.log(user[0].password)
      					// if(!isPasswordValid){
      					//                      return res.status(401).json({auth : false, token : null, message : "Not Authorised User"});
      					//                }else{
      					                     let payload = {
      					                         user_id : user.id,
      					                         email_id : user.email_id
      					                     }
      					                     let token = jwt.sign(payload, config.secrets.session,{expiresIn : config.secrets.expiresIn});
      					                    return res.status(200).json({auth : true, token : token, message : "User updated Successfully"});
      					              
      					
      				})
      			}
      		}
      	})
      },
      verify_otp: (req, res) => {    
      	const data = req.body;
      	var pVal = {
      		otp : data.otp,
      		email_id : data.email_id
      	};
      	connection.query("SELECT otp, token FROM " + USER + " WHERE email_id = '" + data.email_id +"'", function(err, user, results) {
      		if (err) {
      			res.status(500).json({ status: "Fail", Err: err})
      		}
      		console.log(user)
  			if(data.otp == user[0].otp) {
  				res.status(200).json({token : user[0].token, message:"OTP verified"})
  			}


      	})
      }

}


	