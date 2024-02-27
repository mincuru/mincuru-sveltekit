aws lambda update-function-code \
  --function-name lamcon \
  --image-uri $ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com/lamcon:latest \
