const { expect } = require("chai");

describe("Message Contract", function () {
  it("Should return a message", async function () {
    const Message = await ethers.getContractFactory("Message");
    const message = await Message.deploy("Test Message");
    await message.deployed();

    const msg = await message.getMessage();
    expect(msg).to.equal("Test Message");
  });

  it("Should change a message", async function () {
    const Message = await ethers.getContractFactory("Message");
    const message = await Message.deploy("Test Message");
    await message.deployed();

    const newMessage = await message.setMessage("New Test Message");

    // wait until tx is mined on chain
    await newMessage.wait();

    const msg = await message.getMessage();
    expect(msg).to.equal("New Test Message");
  });
});
