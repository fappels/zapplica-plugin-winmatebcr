/*
   Copyright 2017 Francis Appels - http://www.z-application.com/

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/**
 * This class provides access to a winmate E series build in barcode reader
 */

var exec = require('cordova/exec');

var WinmateBCR = function() {};

/**
 * Constants for checking Winmate BCR states
 */

WinmateBCR.prototype.STATE_NONE = 0;       // we're doing nothing
WinmateBCR.prototype.STATE_READING = 1; //reading BCR reader
WinmateBCR.prototype.STATE_READ = 2; ///read received BCR reader
WinmateBCR.prototype.STATE_ERROR = 3; // error
WinmateBCR.prototype.STATE_DESTROYED = 4; // BCR reader destroyed

/**
 * destroy winmate bcr
 * 
 * @param successCallback function to be called when plugin is destroyed
 * @param errorCallback well never be called
 */
WinmateBCR.prototype.destroy = function(successCallback,failureCallback) {
	cordova.exec(successCallback, failureCallback, 'WinmateBCR', 'destroy', []);	
};

/**
 * Check winmate bcr current state
 * 
 * @param successCallback(object) returns json object containing state, property state (int)
 * @param errorCallback function to be called when problem fetching state.
 *  
 */
WinmateBCR.prototype.getState = function(successCallback,failureCallback) {
		 cordova.exec(successCallback, failureCallback, 'WinmateBCR', 'getState', []);
 };

/**
 * Read BCR
 * 
 * @param successCallback(data) asynchronous function to be called each time reading was successful.
 * 		returns ASCII string with received data 
 * @param errorCallback asynchronous function to be called when there was a problem while reading
 */
 WinmateBCR.prototype.read = function(successCallback,failureCallback) {
	 cordova.exec(successCallback, failureCallback, 'WinmateBCR', 'read', []);
};

var winmateBCR = new WinmateBCR();
module.exports = winmateBCR;
