FROM python:3.8-slim-buster

ADD . .

RUN pip install -r ./requirements.txt

EXPOSE 5000

ENTRYPOINT ["python3", "app.py"]