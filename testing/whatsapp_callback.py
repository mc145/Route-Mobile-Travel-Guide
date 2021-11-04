import requests

url = "http://mail.google.com"

payload = "{\n    \"contacts\": [ {\n    \"profile\": {\n        \"name\": \"Kerry Fisher\"\n   \t        },\n    \"wa_id\": \"919941639697\"\n        } ],\n    \"messages\":[{\n    \"from\": \"919941639697\",\n    \"id\": \"ABGGFlA5FpafAgo6tHcNmNjXmuSf\",\n    \"timestamp\": \"1518694235\",\n    \"text\": {\n    \"body\": \"Hello this is an answer\"\n    \t   \t\t},\n    \"type\": \"text\"\n    }],\n\"brand_msisdn\": \"97144501601\",\n\"request_id\": \"aebeca32-f125-11eb-8c86-0242ac120007\"\n}"
headers = {}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)