aws lambda create-function \
  --function-name lamcon \
  --package-type Image \
  --code ImageUri=$ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com/lamcon:latest \
  --role arn:aws:iam::$ACCOUNT_ID:role/lambda-ex