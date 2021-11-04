import requests
import json

url = "https://rapidapi.rmlconnect.net/wbm/v1/message"

payload = json.dumps({
  "phone": "+6594893908",
  "text": "hello akshay",
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': '61810a0e0fcc5f001290fdaf'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)