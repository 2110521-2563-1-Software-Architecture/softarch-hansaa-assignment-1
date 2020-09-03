# softarch-hansaa-assignment-1  
  
### รายชื่อสมาชิกในกลุ่ม  
6031035821 Budsakorn Khosagrid  
6030097521 Janejira Aroonnual  
6030090021 Chirapa Peisiripatana  
6031036421 Palmmanee Thapphachaya  
6031038721 Prawsang Chayakulkeeree 

## Contents  
This contains the source code for REST api, client for the REST api, gRPC, and gRPC's client for a book record service. The directories and described below:  
1. /client - This is the client that calls the RESTful APIs
2. /gRPC - Contains both the client and server using gRPC
3. /rest - This is the source code for the RESTful APIs

## Screenshots of Swagger 
![Screenshots of Swagger]()

## Comparision between calling the methods based on gRPC and REST API
For RESTful Apis, the clients makes a request to the server by using HTTP protocol. The server then matches the uri given from the client to see which function will be exectuted. The function then returns a response for the client also using the HTTP protocol.

| Functions     | gRPC          | Rest  |
| ------------- |:-------------:| -----:|
| List All Books|               |       |
| Get One Book  |               |       |
| Add a Book    |               |       |
| Remove a Book |               |       |
