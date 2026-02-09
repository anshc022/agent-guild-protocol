async function main() {
  const b1 = await ethers.provider.getBalance("0x1b044537d976c66914594c794018868f7449cd4b"); // Lowercase
  const b2 = await ethers.provider.getBalance("0x12d0bd7306cd371cfb1a7a4ea289f31fdd883099"); // Lowercase
  console.log("Agent:", ethers.formatEther(b1));
  console.log("User: ", ethers.formatEther(b2));
}
main().catch(console.error);