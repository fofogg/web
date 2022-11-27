const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './appnb',
	env: {
		id: `${process.env.id||'cb2ef9cb-fc3a-4f42-a206-0a59919a38d6'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
