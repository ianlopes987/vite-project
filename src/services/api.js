import axios from "axios";


export const Api = axios.create({

    baseURL: "/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcHBzLWx1a2UtZG90LWF1dG9hdmFsaWFyLWFwcHMuYXBwc3BvdC5jb20iLCJpYXQiOjE3MjEzMzkzMjAsImp0aSI6IjgyN2Y3YzJhM2NhOWQzNjllYjQ0OGUyMzE3Yjg1ZjEyNzQ4NDJhMGMiLCJuYmYiOjE3MjEzMzkzMjAsImV4cCI6MTcyMTQyNTcyMCwiZGF0YSI6eyJjb3VudHJ5X2lkIjoiNzYiLCJpbnN0YW5jZV9pZCI6IjEzMjQ5MSIsInRva2VuX2lkIjoxODY1MzM0ODYsInR5cGUiOiJhdXRob3JpemF0aW9uIn19.9nM5egzzzs21PfMrOE456KrrT9XcsdpJS5WnryGUuEc",
         "signature": "9587915e-367335b4-e286dbc4-35585857-db78c0c5"
    }

});







// esse arquivo foi criado para que possamos guardar a nossa url base onde sempre iremos
// repetir ao fazer requisicoes
