while getopts k:h: flag
do
    case "${flag}" in
        k) key=${OPTARG};;  # SSH key file
        h) hostname=${OPTARG};;  # Target server hostname
    esac
done

# Ensure required parameters are provided
if [[ -z "$key" || -z "$hostname" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname>\n\n"
    exit 1
fi

printf "\n----> Deploying React bundle to $hostname with key $key\n"

# Step 1: Build the React app
printf "\n----> Building the distribution package\n"
npm install
npm run build

# Step 2: Remove old files on the server
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << 'ENDSSH'
sudo rm -rf /usr/share/caddy/*
ENDSSH

# Step 3: Copy the built files to the target server
printf "\n----> Copying the distribution package to the target\n"
scp -r -i "$key" dist/* ubuntu@$hostname:/usr/share/caddy

# Step 4: Restart Caddy to apply changes
printf "\n----> Restarting Caddy to serve the updated site\n"
ssh -i "$key" ubuntu@$hostname << 'ENDSSH'
sudo systemctl restart caddy
ENDSSH

# Step 5: Cleanup local build files
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
