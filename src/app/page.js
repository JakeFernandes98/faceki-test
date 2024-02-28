"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FacekiSDK from "@faceki/blaze-kyc-react-sdk";

export default function Home() {

  const sdkConfig = {
    clientId: "ghsmgp6vimg9gkmlju2arrl5b",
    clientSecret: "dpojgcek6ot5kk4ikpqaqjdg9mv9ct6m0ccr855sv6iqmi5qfhj",
    record_identifier: "123456",
    workflowId: "4ebd7d52-3c30-4484-958e-4ff46d181f35",
    theme: {
      mainColor: "#FF5733",
      secondaryColor: "#2ECC71",
      backgroundColor: "#F4F4F4",
      cardBackgroundColor: "#FFFFFF",
      headingTextColor: "#333333",
      secondaryTextColor: "#777777",
      secondaryBorderColor: "#DDDDDD",
      iconFillColor: "#555555",
      iconBorderColor: "#888888",
      iconTextColor: "#FFFFFF",
      logo: "https://logowik.com/content/uploads/images/neom5478.jpg",
      disableGuidance: false,
      failedText: "Operation failed. Please try again.",
      successText: "Operation successful!",
      buttonbg: "#F8B427",
      textBg: "#EFEFEF",
      verificationProcessingText: "Processing verification...",
    },
    onSuccess: (data) => {
      console.log("SDK operation successful:", data);
      fetch("http://localhost:1344/",{
        method: "POST",
        body: JSON.stringify(sdkConfig.record_identifier) // Convert data to JSON string
      })
      .then(response => response.json()) // Parse JSON response
      .then(data => console.log(data)) // Handle data
      .catch(error => console.error('Error:', error));
    },
    onFail: (data) => {
      console.error("SDK operation failed:", data);
    },
  };


  return (
    <main> 
        <FacekiSDK {...sdkConfig} />
    </main>
  );
}
