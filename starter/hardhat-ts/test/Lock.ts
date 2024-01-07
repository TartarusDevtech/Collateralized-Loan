import { ethers } from "hardhat";
import { expect } from "chai";

describe("CollateralizedLoan", function () {
  async function deployCollateralizedLoanFixture() {
    const [borrower, lender, otherAccount] = await ethers.getSigners();

    const CollateralizedLoan = await ethers.getContractFactory(
      "CollateralizedLoan"
    );
    const collateralizedLoan = await CollateralizedLoan.deploy();

    return { collateralizedLoan, borrower, lender, otherAccount };
  }

  describe("Loan Request", function () {
    it("Should allow a borrower to deposit collateral and request a loan", async function () {
      const { collateralizedLoan, borrower } = await loadFixture(
        deployCollateralizedLoanFixture
      );
      const collateralAmount = ethers.utils.parseEther("1");
      const interestRate = 500; // 5% interest rate
      const duration = 30 * 24 * 60 * 60; // 30 days in seconds

      await expect(
        collateralizedLoan
          .connect(borrower)
          .depositCollateralAndRequestLoan(interestRate, duration, {
            value: collateralAmount,
          })
      )
        .to.emit(collateralizedLoan, "LoanRequested")
        .withArgs(
          anyValue,
          borrower.address,
          collateralAmount,
          anyValue,
          interestRate,
          anyValue,
          false,
          false
        );
    });

    it("Should fail if collateral is zero", async function () {
      const { collateralizedLoan, borrower } = await loadFixture(
        deployCollateralizedLoanFixture
      );
      const interestRate = 500; // 5% interest rate
      const duration = 30 * 24 * 60 * 60; // 30 days in seconds

      await expect(
        collateralizedLoan
          .connect(borrower)
          .depositCollateralAndRequestLoan(interestRate, duration, { value: 0 })
      ).to.be.revertedWith("Collateral must be greater than zero");
    });
  });

  // Additional tests for funding, repayment, and claiming collateral would follow a similar pattern
  // They would be written once the corresponding functions are implemented in the Solidity contract
});
