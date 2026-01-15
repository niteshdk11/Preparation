from fastapi import FastAPI 

app=FastAPI()

@app.get('/')
def home():
    return {'data':'welcome to home page '}

import uvicorn
uvicorn.run(app)    