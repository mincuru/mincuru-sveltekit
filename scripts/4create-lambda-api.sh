aws lambda create-function \
  --function-name mincuru-api \
  --package-type Image \
  --code ImageUri=$ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com/mincuru/api:latest \
  --role arn:aws:iam::$ACCOUNT_ID:role/lambda-ex