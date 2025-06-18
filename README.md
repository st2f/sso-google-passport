before running the project
```bash
npm i
npm start
```
you need to setup these variables in config/.env
![image](https://github.com/user-attachments/assets/f13f6b85-40c1-4744-80c3-d1de6be18553)

# Google SSO

this uses [Google OAuth2 API, v2](https://developers.google.com/identity/protocols/oauth2/scopes#oauth2)

you will need to create a project in the [google cloud console page](https://console.developers.google.com)

and obtain a GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

![sso-google](https://github.com/user-attachments/assets/93d5c0b6-f4bf-41fc-98ec-c7884eca6b3f)

![sso-google2](https://github.com/user-attachments/assets/e822d002-fd1c-4642-b53a-2625ca73665b)

# session storage

this uses MongoDB to store session

you will need to get connection such as 

`MONGODB_URL_CONNECTION=mongodb+srv://user-here:password-here@host-here/db-name-here?appName=Cluster0`

[you can get a free MongoDB Atlas account](https://account.mongodb.com/account/login)

![Screenshot from 2025-06-18 20-42-36](https://github.com/user-attachments/assets/2d05a12d-bbc4-426e-bd17-9b852f62ac7c)


