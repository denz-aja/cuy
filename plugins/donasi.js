let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${global.ppulsa}]
│ • *Indosat:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Gopay:* [${global.pgopay}]
❏────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.menu', buttonText: {displayText: 'Menu'}, type: 1},
  {buttonId: '.ping', buttonText: {displayText: 'Ping'}, type: 1},
  {buttonId: '.creator', buttonText: {displayText: 'Owner'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Donasi'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler