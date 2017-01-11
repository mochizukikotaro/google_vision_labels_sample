# google_vision_labels_sample
Checking image labels which made by Google Vision as local web page.

![sample](https://raw.githubusercontent.com/mochizukikotaro/google_vision_labels_sample/master/readme_images/readme.png)

# Usage

Please prepare in advance on Google Cloud Platform.

- Project ID
- Service account key (JSON file)


```
$ git clone git@github.com:mochizukikotaro/google_vision_labels_sample.git
$ export GCLOUD_PROJECT=<your-project-id>
$ export GOOGLE_APPLICATION_CREDENTIALS=<path_to_service_account_file>
$ sh batch.sh
$ php -S localhost:5555 # Any port number is OK
```

then, you can access `localhost:5555`.

If you want to use your original images, please update images folder before `sh batch.sh`.


# References

https://cloud.google.com/vision/docs/label-tutorial
https://cloud.google.com/vision/docs/common/auth#authenticating_with_application_default_credentials
