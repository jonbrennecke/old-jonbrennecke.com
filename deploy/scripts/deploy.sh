#!/bin/bash
set -e

required_vars=('ANSIBLE_VAULT_PASSWORD' 'ANSIBLE_ENV')
for var in "${required_vars[@]}"; do
  if [ -z ${!var} ]; then
    echo "Error: missing required variable \"$var\"." >&2
    exit 1
  fi
done

export GIT_SHA=$(if [ -z "$TRAVIS_COMMIT" ]; then git rev-parse HEAD; else echo $TRAVIS_COMMIT; fi)
export GIT_BRANCH=$(if [ -z "$TRAVIS_BRANCH" ]; then git rev-parse --abbrev-ref HEAD; else echo $TRAVIS_BRANCH; fi)

ansible-playbook \
    -M command \
    -i ./inventory/$ANSIBLE_ENV \
    ./plays/deploy.yml
