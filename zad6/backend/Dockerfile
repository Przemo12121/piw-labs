FROM python:3.8-slim-buster

ADD . .

RUN pip install -r ./requirements.txt

EXPOSE 5000

ENTRYPOINT MONGO_INITDB_ROOT_PASSWORD=testPWD123 python3 app.py