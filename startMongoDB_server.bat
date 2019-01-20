:: script to launch the mongoDB server

:: first path '"C:\...\mongod.exe' : is the mongod.exe on your local machine, used to
:: initialize the server.
:: second path '--dbpath=".\data\db"' : is the database localisation in your project,
:: where your database data will be added.

"C:\Program Files\MongoDB\Server\4.0.5\bin\mongod.exe" --dbpath=".\data\db"