## pipeline with multiple stages

```groovy

pipeline {
    agent any

    stages {
        stage ('first stage') {
            steps {
                sh 'echo "first stage"'
            }
        }

        stage ('second stage') {
            steps {
                sh 'echo "second stage"'
            }
        }

        stage ('third stage') {
            steps {
                sh 'echo "third stage"'
            }
        }

        stage ('forth stage') {
            steps {
                sh 'echo "forth stage"'
            }
        }
    }
}

```
