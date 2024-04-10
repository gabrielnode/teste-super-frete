# About the project

This project is an implementation of the firebase integrated domain architecture.

This project was built using the following technologies
- Node js
- Nest js
- Firebase
## About Domain Architecture
Using Domain Architecture in NestJS projects not only facilitates a clear separation of responsibilities, 
promoting improved maintainability and testability, but also significantly excels in scalability. 
This modular structure encourages sustainable project growth, allowing for the agile addition of new 
features without negatively impacting existing components.
## How to run
Create the .env file with the information below. They are from PROD but I will soon deactivate them
```
FIREBASE={ "type": "service_account", "project_id": "super-frete-ef99d", "private_key_id": "24698b2b4c276aadc0fabaa559ec0793ea8578df", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1fPgqVrhYT9ja\nPaGvRfDjLN6hxuIa+h513Calf2BgBUcPe0zLloTDG/Jf7K4EUXyXTOKz8CZxvR3e\nTY0FORR1PEDInPwOyeg9J+kNf5CJCbdbr1x+Ppy3HzYWFNqIurEgNX5l28YKdMVK\ncv/pzY440oNugR5KCdc/SgWYoB4aRVd0HSYAX8uLcdiwHodKIQ4z4q60NlBgczIx\nM0d4CMjR4KsKzlIb/Gvknsoyzqy+BRiok/CJtuzw8Kh0Kc0Zc+x9Zw9Z1nY4qJjC\nPP+gpJ3XRzK1ibvDYCzlc9dVWh2osmQQ9ChuWSEN/ITeslMsI8FFnjUCTeAdJrCh\nfkc85bSfAgMBAAECggEALjrVJEPO1YARZxZH91PDlrq5Q1BcDC8mTzNzDLkznYH6\npfDskPeYffLCfLjXYvY23HuTS+6ifFqGHzh18Zymn25nujJy6nl4FQvzi6Kw+Jdn\nA43Z67abSPJEXr+VIzsbH29A8UVYXxV7pAlDMxVPYx4MqLtvMcDr+Y0re8Ndp6cQ\nCIk+W30XtmkTnII/6EdS8ANZcOv87uQyHu4l4UMVTWwzrHyjruDJ20qX3/6pTdvJ\nR742zeuwMYmnIQEHsjc4Z/uFqaDmyWMERjc5wurUJbeNpHdZ6WeDnEU7uozZx6BM\nj+ioMTjt4n6slua20ATfMxrl1kspcg6s8M+Kp4+PMQKBgQDo/W9zR1IQiWoeE/eB\nFItK4+duKfFvUXWtBQ4m4Ts0w+YrcPCMs7G4SyMnvLEJDqXRonkQnLFWsVDpbwnM\nxSWNzYN6delrJKOJcdt7i1t1QtLuBqsQ2x7E0m5p5QwaR2EWyFqgN3vRl8Nu2RG5\nHPreKPdvUddLY0+LGRnzFQ3l0wKBgQDHaXC2i5wM16HvlTkkx2aLKpc3RhGCda+S\nrjYLZ8WIwqlMhoJH4jowo4FKZlAKW/br8SpS544Yk3JYRDXL9QBWLFErfdk5amtZ\nNYWdUnZ41Yo0+tqk4mgI6NZhU9WZUSdIEQnIGeUlFcnz/DEXVW3IhYpTs9JRavyc\nFD0EtEa6hQKBgF4htpuOnxtLSXJpgr/F+xkAxwn9LCxbbv2+Yx9WNEN3OlEmyiku\nmIjq4oM1exk7r8boq50IkaWC8ju9vunaZPfLpmkdpnbBUMlBFPnvLb5Mh0ffrdGb\nlezTUAS8o40idZlszSCaCg5+EFmCneR6TujfCEkTebZdo0+BjrhlMz49AoGAGsd1\nJH6RIURf8c2nU+IXSj8Y+YpGVa+6OUd96IAyDdCebbFuk3q0980tUrF0tD9vZHYJ\nigKgmXpLk8DtPIuVVP00lVOcNVKuQdenLt5hHI8ItV6uuA/TisbB62YXvDQiw1HO\nb3nSxO0tJr/KU+jcCl6smdr/NoHYlJk/LH+NNAUCgYEAnxiowwqOma5WKabjB+ie\n5rir5bHRXiuyBBMHsVzH1EIr0meM9bj9ZpgDfKZkikfGoT0Jgd6nh0itjCSXawJK\nIm/xliBl1JvQVmV5dVHYwrMVySeBraFDPWlLC9hhLeNcJ+RNrvgYyeYPtzH227Kt\nPSgt6ACeBXXIW4WzgVz3IJI=\n-----END PRIVATE KEY-----\n", "client_email": "firebase-adminsdk-swcvr@super-frete-ef99d.iam.gserviceaccount.com", "client_id": "103929066972363818844",  "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-swcvr%40super-frete-ef99d.iam.gserviceaccount.com", "universe_domain": "googleapis.com" }
```

```
 cd super-frete-api/ && docker-compose up -d
```

 After running the above command, simply access the link below to view endpoints.

 ```
 http://localhost:3000/api
 ```
