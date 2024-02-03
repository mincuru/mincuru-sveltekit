aws s3 rm s3://mincuru-coverage-report --recursive
REPOSITORY_NAME=mincuru/migrate
IMAGE_DIGESTS_MIGRATE=$(aws ecr describe-images --repository-name "${REPOSITORY_NAME}" --query 'imageDetails[*].imageDigest' --output text)
for DIGEST in $IMAGE_DIGESTS_MIGRATE; do
    aws ecr batch-delete-image --repository-name "${REPOSITORY_NAME}" --image-ids imageDigest=${DIGEST}
    echo "Deleted image with digest: ${DIGEST}"
done
REPOSITORY_NAME=mincuru/web
IMAGE_DIGESTS=$(aws ecr describe-images --repository-name "${REPOSITORY_NAME}" --query 'imageDetails[*].imageDigest' --output text)
for DIGEST in $IMAGE_DIGESTS; do
    aws ecr batch-delete-image --repository-name "${REPOSITORY_NAME}" --image-ids imageDigest=${DIGEST}
    echo "Deleted image with digest: ${DIGEST}"
done
