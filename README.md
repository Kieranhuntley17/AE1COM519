# AE1COM519

first install nodejs by entering the appropriate command into your command prompt 

## Windows
winget install OpenJS.NodeJS

## macOS
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

second you must clone the repository at the following link:
https://github.com/Kieranhuntley17/AE1COM519

next you must type "npm install" into the terminal of you IDE

following this you must remove the ".example" off of the end of the env file so it just reads ".env".

The link for the database is already provided in the .env file

finally you type "npm run dev" into the console and goto your browser and in the URL type "localhost:2020/

