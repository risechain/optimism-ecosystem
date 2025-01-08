TAG=sha-4b3abe0

docker-bridge-ui:
	docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/risechain/bridge-ui:sha-4b3abe0 --push -f Dockerfile.bridgeApp .
