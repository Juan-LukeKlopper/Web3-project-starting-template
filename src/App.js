import * as React from "react";
import { ethers } from "ethers";
import './App.css';
//import abi from "./utils/WavePortal.json";

export default function App() {
  
  const [currentAccount, setCurrentAccount] = useState("");
  const contractAddress = "0x"; // enter contract address here
  //const contractABI = abi.abi;
  
  const func = () => {
    
  }
  
  const CheckIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

    if (!ethereum){
     console.log("Please ensure that you  have Metamask istalled.");
    } else {
      console.log("We have the ethereum object ", ethereum);
      }

    const accounts = await ethereum.request({method: "eth_accounts"});

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("found an autherized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No autherized account found.");
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum){
        console.log("Please ensure that you  have Metamask istalled.");
        return;
      }

      const accounts = await ethereum.request({method: "eth_requestAccounts"});
      console.log("Connected to account: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    CheckIfWalletIsConnected();
  }, [])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        header
        </div>

        <div className="bio">
        this is text that is displayed below the header,
        </div>

        {!currentAccount && (
          <button className="connectButton" onClick={connectWallet}>
            Click here to connect MetaMask
          </button>
        )}
      </div>
    </div>
  );
}
