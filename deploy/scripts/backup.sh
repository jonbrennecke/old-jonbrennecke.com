#!/bin/bash
set -e

required_vars=('ANSIBLE_VAULT_PASSWORD' 'ANSIBLE_ENV')
for var in "${required_vars[@]}"; do
  if [ -z ${!var} ]; then
    echo "Error: missing required variable \"$var\"." >&2
    exit 1
  fi
done

ansible-playbook \
    -M command \
    -i ./inventory/$ANSIBLE_ENV \
    ./plays/backup.yml
