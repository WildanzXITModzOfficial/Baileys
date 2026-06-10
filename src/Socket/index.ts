import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// ✅ TAMBAH LOG KAMU DI SINI
const chalk = require('chalk')
console.log(chalk.cyan(`
==================================================
🤖 WILDANZ BAILEYS MOD
👑 Powered By WildanzXITModz Official
🔌 Status: Menghubungkan ke WhatsApp...
==================================================
`))

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
