ERROR_COLOR="\e[31m"
INFO_COLOR="\e[94m"
WARN_COLOR="\e[33m"
ENDCOLOR="\e[0m"


logInfo(){
echo -e "${INFO_COLOR}$(date) | INFO ${ENDCOLOR} $@"
}

logWarn(){
echo -e "${WARN_COLOR}$(date) | WARN ${ENDCOLOR} $@"
}

logError(){
echo -e "${ERROR_COLOR}$(date) | ERR  ${ENDCOLOR} $@"
}