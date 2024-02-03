aws s3 rm s3://mincuru-coverage-report --recursive
aws ecr batch-delete-image --repository-name mincuru/migrate
aws ecr batch-delete-image --repository-name mincuru/web
