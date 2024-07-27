

# Discord All in One BOT Installation Guide

## How to Install

### Step 1: Update `config.json`

1. Open `config.json`.
2. Replace the ID in `guild` with your server ID.
3. Replace every instance of `1217139049437860060` with your server ID.

### Step 2: Find Your Server ID

1. Right-click your server and select "Copy ID".
2. Right-click your server, mod, and admin roles, and select "Copy ID" for each.
3. Replace all relevant IDs in `config.json`.

### Step 3: Set Up Hosting Service

1. Go to your hosting service (Render in this example).

   ![Render](https://render.com/)

2. In the Build & Deploy section, paste your repository URL.
3. Run the following commands:
   ```bash
   npm install
   node index.js
   ```


### Step 4: Add Build and Start Commands

1. Add the following commands:
   ```bash
   npm install
   node index.js
   ```


### Step 5: Get Your Bot Token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Retrieve your bot token.

### Step 6: Set Environment Variable

1. Create an environment variable:
   - Key: `TOKEN`
   - Value: `[your bot token]`
   

2. Deploy your application.

### Step 7: Wait and Test

1. Wait for about five minutes.
2. Test your bot to ensure it's working.

   🎉 Congratulations! Your bot is now operational. 🥳

### Additional Resources

- If you prefer a video tutorial, watch this [YouTube tutorial](https://www.youtube.com/watch?v=M_7TAJ9oqcs&t=12s) and subscribe to GlaceYT's channel.
  
- Common errors are discussed in the `errors` section.
- If you make modifications, perform a manual deploy of the latest commit.
#### usefut things
- message.json : welcome message, replace id with your server channel id
- config.json : bot configuration, replace all id with your server and role id set settings to true or false, change your prefix in line 3, lavalink server line 43
- antisetup.json : anti-nuke setup, put all nessesary information and id
- events/ready.js : bot status
- UI/banners/musicard.js : change/add/remove music card here
- UI/icons/musicicons.js : change/add/remove music icons here

### Need Help?

If you have any questions, feel free to ask @GlaceYT.
