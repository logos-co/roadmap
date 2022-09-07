pipeline {
  agent {
    label 'linux'
  }

  options {
    timestamps()
    /* Prevent Jenkins jobs from running forever */
    timeout(time: 10, unit: 'MINUTES')
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
    disableConcurrentBuilds()
  }

  environment {
    GIT_COMMITTER_NAME = 'status-im-auto'
    GIT_COMMITTER_EMAIL = 'auto@status.im'
  }

  stages {
    stage('Deps') {
      steps {
        sh 'make setup'
      }
    }

    stage('Build') {
      steps {
        /* Make hugo-obsidian available. */
        withEnv(["PATH+EXTRA=${env.HOME}/go/bin"]) {
          sh 'make build'
        }
      }
    }

    stage('Publish Prod') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh 'ghp-import -p public'
        }
      }
    }
  }
}
