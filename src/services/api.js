import axios from "axios";


export const Api = axios.create({

    baseURL: "/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcHBzLWx1a2UtZG90LWF1dG9hdmFsaWFyLWFwcHMuYXBwc3BvdC5jb20iLCJpYXQiOjE3MDg0ODAxMDAsImp0aSI6IjgyN2Y3YzJhM2NhOWQzNjllYjQ0OGUyMzE3Yjg1ZjEyNzQ4NDJhMGMiLCJuYmYiOjE3MDg0ODAxMDAsImV4cCI6MTcwODU2NjUwMCwiZGF0YSI6eyJjb3VudHJ5X2lkIjoiNzYiLCJpbnN0YW5jZV9pZCI6MTMyNDkxLCJ0b2tlbl9pZCI6MTY1MjUxNTQyLCJ0eXBlIjoiYXV0aG9yaXphdGlvbiJ9fQ.KOkVPdbkG6hAVYXdS7nfOHz3nYdHP-8VzqmmM44SG5Q",
         "signature": "9587915e-367335b4-e286dbc4-35585857-db78c0c5"
    }

});







// esse arquivo foi criado para que possamos guardar a nossa url base onde sempre iremos
// repetir ao fazer requisicoes