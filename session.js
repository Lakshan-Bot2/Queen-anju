//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BNNlZNakVZcXkwZERUNXVHSkVqdUVEMzVST2NycTVCb1hmSjdqZ1RITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmlYMTNrRlZYUDFFYjBabzJsVXlWYVJwTy9OSlFwRjVaQnkrYWVXN0t3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUEdoYkM0bmpGS0lJU2wwR0RFa0RZSHlLUmh2Sktla0xnQnpnNVZnTjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMbDU2UEZTOGZZOTdWOGxPeElUSFprQWkwNzF4OXFJaEQ1T1RWLzBmSmh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDaWpTNTh5amFLUmdsWTNkM3FsNnI2WVVFRXBFczAwTUt1YzdSbXNzMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU2dTZpSEtrMVB1SjN6QkZXNmtXcVFkOFdPNXN6RndIakZENFZ4QjV4aGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVA2ZGh6TWUrVzdxM1dkR1RGb0ppWm9vTUEvQk53UE5uNVJsWis3M2hHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnBkRlYweVRHOXJsbEF4UTg0Z1F2V3N0Q2hYZUwrcEZsOHV0Uy9WenlqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVvQXRJZTd1VWlCaW54bmQ2cXk1OWdqcGR0ZDNmSWg5THRHV09VNElKMnhGNUtrVjlwQ2xOdWJXc09wVUJjekhEZ2JIQjJ1TXJabGtXSFRRQkVpVkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJxNmJqbW5sd0M2TkgxbFdlT0RGQ0JBSWRiT25PYUlzUzNBcmdCRDNLZTI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMczZwczgxR1R3T0lzWTFMSDdpNTdBIiwicGhvbmVJZCI6IjA2ZGY5NDQ3LWIwZGEtNGU4Mi1iMjc1LTZhZjcxYTk3Yzg1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYitNS0RjaXBkN0d0cWFhamRnZCtvY2d5dzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2NrRmcxaU1jbTNBR2p3ZkJES2NNUnlVS0owPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlDNFdMNFZHIiwibWUiOnsiaWQiOiI5NDc2Mjg5Mjg2NDozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTQ0OTA4NTQwNjQzNDk6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLWjk0c0dFSXpUd01JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikk2ZFhHeGxDWFFIS0s2MkQzNUUxYXpTWXNSS09FbGF5akhkYStHMVM1VGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im0vY3pCM3pTT2RkQ2ZldmU2cWF1a0xQYmFGZ3EvWm4vU1FrQVMzSDlVZmxud2VkUWMwQjFCZTMyZ05mUnRDdVBaNlhlSWZVL21GbG94dzZjeEExVERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvMUcwejBUQVBDOGtOWHN2d2tMV1NLakJHSzlocDdlSFhiVHViTEd4d0M4Mkhudi9sVjJHdmZ0MTZYUmw4T2lQbUVFOHU0L0F6aVFLTDRJaUNBN2hCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyODkyODY0OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU09uVnhzWlFsMEJ5aXV0ZzkrUk5XczBtTEVTamhKV3NveDNXdmh0VXVVNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDgzOTkzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl2MyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "942892864",
  PASSWORD: 
    process.env.PASSWORD || "Lakshan2003#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94768282864", "94717264813"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
