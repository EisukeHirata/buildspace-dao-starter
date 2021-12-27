import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3657e888841BEfDDC67C7ecf1F10C3f956852413",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Proof of Knowledge",
        description: "This NFT will give you access to AcademiaDAO",
        image: readFileSync("scripts/assets/pen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()