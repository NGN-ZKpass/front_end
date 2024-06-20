// src/transgate.js
import TransgateConnect from '@zkpass/transgate-js-sdk';

import Web3 from 'web3';

const web3 = new Web3();

export const verify = async () => {
  try {
    const appid = "ff49505f-c90e-49ea-94f6-0683d5d34f69";
    const schemaId = "63c45011eebe40ab857ff71fedc64102";
    const validatorAddress = "0x19a567b3b212a5b35bA0E3B600FbEd5c2eE9083d"; // Replace with actual validator address

    const connector = new TransgateConnect(appid);
    const isAvailable = await connector.isTransgateAvailable();

    if (!isAvailable) {
      console.log('Please install TransGate');
      return;
    }
console.log('launching transgate');
    const res = await connector.launch(schemaId);
    // if (!res) {
    //   console.log('Transgate failed to launch');
    //   return;
    // }
    console.log("reach here ")
    console.log(res);

    const { taskId, uHash, publicFieldsHash, recipient, allocatorSignature, validatorSignature } = res;

    // Encode allocator message struct
    const taskIdHex = Web3.utils.stringToHex(taskId);
    const schemaIdHex = Web3.utils.stringToHex(schemaId);

    const allocatorEncodeParams = web3.eth.abi.encodeParameters(
      ["bytes32", "bytes32", "address"],
      [taskIdHex, schemaIdHex, validatorAddress]
    );
    const allocatorParamsHash = Web3.utils.soliditySha3(allocatorEncodeParams);

    // Recover the allocator address
    const signedAllocatorAddress = web3.eth.accounts.recover(allocatorParamsHash, allocatorSignature);
    if (signedAllocatorAddress !== validatorAddress) {
      console.log('Allocator address verification failed');
      return;
    }

    // Encode validator message
    const validatorTypes = ["bytes32", "bytes32", "bytes32", "bytes32"];
    const validatorValues = [taskIdHex, schemaIdHex, uHash, publicFieldsHash];

    if (recipient) {
      validatorTypes.push("address");
      validatorValues.push(recipient);
    }

    const validatorEncodeParams = web3.eth.abi.encodeParameters(validatorTypes, validatorValues);
    const validatorParamsHash = Web3.utils.soliditySha3(validatorEncodeParams);

    // Recover the validator address
    const signedValidatorAddress = web3.eth.accounts.recover(validatorParamsHash, validatorSignature);
    if (signedValidatorAddress !== validatorAddress) {
      console.log('Validator address verification failed');
      return;
    }

    console.log('Verification successful');
  } catch (error) {
    console.error('transgate error', error);
  }
};