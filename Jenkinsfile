#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.9.10'

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
      steps { script {
        nix.develop('npm install')
      } }
    }

    stage('Build') {
      steps { script {
        nix.develop('npx quartz build')
        jenkins.genBuildMetaJSON('public/build.json')
      } }
    }

    stage('Publish Prod') {
      steps { script {
        sshagent(credentials: ['status-im-auto-ssh']) {
          nix.develop('ghp-import -c roadmap.vac.dev -p public', pure: false)
        }
      } }
    }
  }
}
