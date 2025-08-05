import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", async () => {
  const nameEl = document.getElementById("intern-name");
  const codeEl = document.getElementById("referral-code");
  const donationEl = document.getElementById("donations");

  const docRef = doc(db, "interns", "intern1"); // Firestore: interns > intern1
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    nameEl.textContent = data.name;
    codeEl.textContent = data.referralCode;
    donationEl.textContent = data.donations;
  } else {
    console.log("No such document!");
  }
});
