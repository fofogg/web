const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './appnb',
	env: {
		id: `${process.env.id||'1eb6e917-774b-4a84-aff6-b058577c60a5'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
