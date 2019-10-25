#!/bin/bash

case "$1" in
  "start")
    case "$2" in
      "lan")
        if [ "$3" ]; then
          echo "[Escooteros-CLI] Command 'escooteros start lan' executed"
          node -e "require('xopen')('http://$3:8081/index.html')"
          echo "[Escooteros-CLI] Server connected to: http://$3:8081/index.html"
          HOST=$3 node node_modules/react-360/scripts/packager.js
        else
          echo "[Escooteros-CLI] You need to tell us your IPV4 so we can open your LAN, type 'ipconfig' to find out your IPV4!"
        fi
        ;;
      "release")
        echo "[Escooteros-CLI] Command 'escooteros start release' executed"
        echo "[Escooteros-CLI] NPM Installing package http-server in global..."
        npm install http-server -g
        echo "[Escooteros-CLI] NPM package installation completed :)"
        node -e "require('xopen')('http://localhost/index.html')"
        echo "[Escooteros-CLI] Server connected to: http://localhost/index.html"
        npm run http-server-start-release
        ;;
      "--https")
        echo "[Escooteros-CLI] Command 'escooteros start -https' executed"
        bash escooteros-cli.sh start-or-install --https
        ;;
      "")
        echo "[Escooteros-CLI] Command 'escooteros start' executed"
        bash escooteros-cli.sh start-or-install
        ;;
      *)
        echo "[Escooteros-CLI] Argument is not valid, check options:"
        bash escooteros-cli.sh help
        exit 1
        ;;
    esac 
    ;;
  "start-or-install")
    echo "[Escooteros-CLI] Command 'escooteros start-or-install' executed"
    if [ -e "escooteros-cli.config" ]; then
        if [ "$2" = "--https" ]; then
          echo "[Escooteros-CLI] Start Escooteros project"
          node -e "require('xopen')('https://localhost:8081/index.html')"
          echo "[Escooteros-CLI] Server connected to: https://localhost:8081/index.html"
          node node_modules/react-360/scripts/packager.js --https
        else
          echo "[Escooteros-CLI] Start Escooteros project"
          node -e "require('xopen')('http://localhost:8081/index.html')"
          echo "[Escooteros-CLI] Server connected to: http://localhost:8081/index.html"
          node node_modules/react-360/scripts/packager.js
        fi
    else
        echo "[Escooteros-CLI] Install Escooteros project"
        bash escooteros-cli.sh install
        bash escooteros-cli.sh start
    fi
    ;;
  "install")
    echo "[Escooteros-CLI] Command 'escooteros install' executed"
    bash escooteros-cli.sh install-command-global
    echo "[Escooteros-CLI] NPM Installing package..."
    npm install

    echo "[Escooteros-CLI] Installation completed :)"
    echo "[Escooteros-CLI] Use the command 'npm start' or 'escooteros start' to start the project on localhost"
    ;;
  "install-command-global")
    echo "[Escooteros-CLI] Command 'escooteros install-command-global' executed"
    echo "[Escooteros-CLI] Installing command..."
    cp -rf escooteros-cli.sh /bin;
    chmod +x /bin/escooteros-cli;
    cp -rf escooteros-cli.sh /bin/escooteros;
    chmod +x /bin/escooteros;
    {
      echo '}==[ Escooteros-CLI ]=={'
      echo ' '
      echo 'Version: 1.0.0'
      echo 'Command installed on: /bin/'
      echo ' '
      echo "If you want to reinstall delete this file and type 'npm start' or just type 'escooteros install'"
      echo ' '
      echo '}==[ Escooteros-CLI ]=={'
    } >escooteros-cli.config
    echo "[Escooteros-CLI] Command installed on: /bin/ !"
    ;;
  "-help")
    bash escooteros-cli.sh help
    ;;
  "--help")
    bash escooteros-cli.sh help
    ;;
  "help")
    echo " "
    echo "[Escooteros-CLI] Welcome to Escooteros - CLI"
    echo "[Escooteros-CLI] Here are the command options we have:"
    echo "[Escooteros-CLI] 'escooteros start' - Start project "
    echo "[Escooteros-CLI] 'escooteros start release' - Start release project stable version"
    echo "[Escooteros-CLI] 'escooteros start lan {youIPv4}' - Start project in LAN "
    echo "[Escooteros-CLI] 'escooteros install' - Install the project is dependencies "
    echo "[Escooteros-CLI] 'escooteros help' - Command options to help you "
    echo " "
    ;;
  *)
    echo "[Escooteros-CLI] Argument is not valid, check options:"
    bash escooteros-cli.sh help
    exit 1
    ;;
esac 