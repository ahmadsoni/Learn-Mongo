// use admin database
// use admin
db.createUser({
    user: "mongo",
    pwd: "mongo",
    roles: [
        "userAdminAnyDatabase",
        "readWriteAnyDatabase"
    ]
});
// docker-compose -f docker-compose.yml up -d
// docker container exec -it mongo-unsecure /bin/sh
// mongo --username mongo --password mongo