FROM python:3.5.6

RUN mkdir -p /usr/src/playbook
WORKDIR /usr/src/playbook
COPY . /usr/src/playbook

RUN apt update && apt install -y rsync
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "bash", "./scripts/deploy.sh" ]
