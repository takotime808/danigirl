# Deploying React App With Docker #

This dir is one level too deep for the usual command ``. 
Run the following code to check where you are and if you can build.  If able, build and run the container.
<!-- 
```sh
cd ..
docker build -t react-app:dg2 -f deploy/Dockerfile ..
docker run -p 3000:3000 react-app:dg
```
**NOTE:** Commands below are not guaranteed to work, as application is designed relative to the root of this repo.

---- -->

```bash

export IMAGE_NAME="react-app:dg"

check_deploy_dockerfile() {   # Check if file exists at relative path: `deploy/Dockerfile`
    local file_path="deploy/Dockerfile"

    if [[ -f "$file_path" ]]; then
        echo "✅ Dockerfile found at '$file_path'."
        return 0
    else
        echo "❌ Error: Dockerfile does NOT exist at '$file_path'." >&2
        return 1
    fi
}

check_pwd_tail_and_run_docker_build() {   # Check which directory you are in and run corresponding docker commands
    local parent_dir="danigirl"
    local deploy_dir="${parent_dir}/deploy"
    # local IMAGE_NAME="react-app:dg"
    
    if [[ "$PWD" == *"$deploy_dir" ]]; then
        echo "Current directory ends with '$deploy_dir'."
        echo "Starting build of docker container."
        docker build -t ${IMAGE_NAME} -f Dockerfile ..
        return 0
    elif [[ "$PWD" == *"$parent_dir" ]]; then
        echo "Currently in the repo's root dir: '$parent_dir'."
        if check_deploy_dockerfile; then
            echo "Starting build of docker container."
            docker build -t ${IMAGE_NAME} -f deploy/Dockerfile .
            return 0
        else
            echo "Aborting: Dockerfile check failed." >&2
            return 1
        fi
    else
        echo "Error: Current directory does NOT end with '$parent_dir' or '$deploy_dir'; your current directory is ${PWD}."
        echo "Run the following:\n\tgit clone https://github.com/takotime808/danigirl.git && cd danigirl && check_pwd_tail_and_run_docker_build"
        return 1
    fi
}

# run_docker_if_build_succeeds() { # If the container exists, run it.
#     # local IMAGE_NAME="react-app:dg"

#     if check_pwd_tail_and_run_docker_build; then
#         echo "✅ Docker build succeeded. Starting container..."
#         docker run -p 3000:3000 ${IMAGE_NAME}
#         return 0
#     else
#         echo "❌ Docker build failed. Container will NOT run." >&2
#         return 1
#     fi
# }

check_docker_image_exists() { # If the container exists, run it.
    # local IMAGE_NAME="react-app:dg"

    if docker image inspect "$IMAGE_NAME" > /dev/null 2>&1; then
        echo "✅ Docker image '$IMAGE_NAME' exists."
        docker run -p 3000:3000 ${IMAGE_NAME}
        return 0
    else
        echo "❌ Docker image '$IMAGE_NAME' does NOT exist." >&2
        return 1
    fi
}

# Build the docker container, based on your current location:
check_pwd_tail_and_run_docker_build

# If the image exists, run it
# run_docker_if_build_succeeds 
check_docker_image_exists
```
