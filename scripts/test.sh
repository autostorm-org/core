cd ./packages
cd ./autofica-abi && yarn test || exit $?
cd ../
cd ./autofica-components && yarn test || exit $?
cd ../
cd ./autofica-multiplier-sdk && yarn test || exit $?
cd ../
