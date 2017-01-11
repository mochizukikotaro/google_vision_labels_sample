'use strict';

/**
 * プロジェクトID と 証明書をコードに書く場合
 *
var vision = require('@google-cloud/vision')({
  projectId: '<your-project-id>',
  keyFilename: '<path_to_service_account_file>'
});
 */

var Vision = require('@google-cloud/vision');
var vision = Vision();

/**
 * Uses the Vision API to detect labels in the given file.
 */
// [START construct_request]
function detectLabels (inputFile, callback) {
  vision.detectLabels(inputFile, { verbose: true }, function (err, labels) {
    if (err) {
      return callback(err);
    }
    callback(null, labels);
  });
}
// [END construct_request]


// Run the example
function main (inputFile, callback) {
  detectLabels(inputFile, function (err, labels) {
    if (err) {
      return callback(err);
    }
    var labels_arr = [];
    labels.forEach(function(v, i, a){
      labels_arr.push(v.desc);
    });
    console.log(inputFile + '\t' + labels_arr.join(','));
    // callback(labels);
  });
}

// [START run_application]
if (module === require.main) {
  if (process.argv.length < 3) {
    console.log('Usage: node labelDetection <inputFile>');
    process.exit(1);
  }
  var inputFile = process.argv[2];
  main(inputFile, console.log);
}
// [END run_application]
// [END app]

// exports.main = main;
