cd ./packages
cd ./autofica-deprem && yarn build || exit $?
cd ../
cd ./autofica-abi && yarn && yarn build:gen && yarn test || exit $?
cd ../
cd ./autofica-components && yarn && yarn test || exit $?
cd ../
cd ./autofica-multiplier-sdk  && yarn && yarn test || exit $?
cd ../
