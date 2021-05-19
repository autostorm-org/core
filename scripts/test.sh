cd ./packages
cd ./autofica-deprem && yarn build || exit $?
cd ../
cd ./autofica-abi && yarn build:gen && yarn test || exit $?
cd ../
cd ./autofica-components && yarn test || exit $?
cd ../
cd ./autofica-multiplier-sdk && yarn test || exit $?
cd ../
