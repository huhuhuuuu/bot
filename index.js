// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

const TARGET_CHANNEL_ID = '1379417824145178756'

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {

  if (message.author.bot) return;

  // 限制只回應特定頻道
  if (message.channel.id !== TARGET_CHANNEL_ID) return;


  if (message.content.toLowerCase().includes('衝捲')) {
        const responses = ['會過', '不會過'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(randomResponse);
    }
  if (message.content.toLowerCase().includes('骰子')) {
        const responses = ['1', '2','3','4','5','6'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(randomResponse);
    }
  if (message.content.toLowerCase().includes('不衝了')) {
        const responses = ['你是俗辣'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(randomResponse);
    }
});

// Log in to Discord with your client's token
client.login(token);