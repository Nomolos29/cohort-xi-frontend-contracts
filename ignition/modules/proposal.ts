// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const proposal = buildModule("proposal", (m) => {

  const proposalContract = m.contract("ProposalContract");

  return { proposalContract };
});

export default proposal;
