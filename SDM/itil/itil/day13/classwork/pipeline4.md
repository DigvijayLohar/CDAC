## pipeline to checkout code from GitHub repository

```groovy

pipeline {
    agent any
    stages {
        stage ('SCM checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pythoncpp/ditiss-flask-demo.git'
            }
        }
        stage ('docker image build') {
            steps {
                sh '/usr/bin/docker image build -t pythoncpp/flask-demo-image .'
            }
        }
    }
}

```
