import { useState, useEffect } from "react";
import { ethers } from "ethers";

import Message from "../../dapp-contracts/artifacts/contracts/Message.sol/Message.json";

const messageContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export default function Home() {
  const [message, setmessage] = useState("");
  useEffect(() => {
    fetchMessage();
    setMessage();
  }, []);

  async function fetchMessage() {
    // Check if Metamask is installed(injected at window.Ethereum)
    if (typeof window.ethereum !== "undefined") {
      // Connect to blockchain via Web3Provider since its in browser
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //Contract Intance
      const messageContract = new ethers.Contract(
        messageContractAddress,
        Message.abi,
        provider
      );

      try {
        const data = await messageContract.getMessage();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function setMessage() {
    if (typeof window.ethereum !== "undefined") {
      // Wait until the user logsin to metamask to proceed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const messageContract = new ethers.Contract(
        messageContractAddress,
        Message.abi,
        signer
      );

      try {
        // Pop-ups Metamask evry transaction to be signed
        const transaction = await messageContract.setMessage("new");
        // wait until its mined
        await transaction.wait();
      } catch (error) {
        console.log("tx cancelled");
      }
      fetchMessage();
    }
  }

  return (
    <div>
      <h1></h1>
    </div>
  );
}
