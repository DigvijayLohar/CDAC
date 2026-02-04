# simple pipeline with only one stage

```groovy

// create a new pipeline
pipeline {

    // select an agent to run the job
    agent any

    // create stages
    stages {

        // define the first stage
        stage('first stage') {

            // define the steps to execute
            steps {

                // define the command
                sh 'echo "hello jenkins pipeline"'
            }

        }

    }

}

```
