pipeline {
    agent none
    stages {
        stage('Build & Test') {
            agent {
                docker {
                    image 'oven/bun:1.1.20'
                }
            }
            steps {
                script {
                    sh 'bun install --frozen-lockfile'
                    sh 'bun test'
                }
            }
        }
    }
}
