import * as v2 from "firebase-functions/v2";
import * as v1 from "firebase-functions/v1";
import {Request, Response} from "express";
import * as admin from "firebase-admin";
admin.initializeApp();


export const addUser = v2.https.onRequest(async (req: Request, res: Response): Promise<void> => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const name = req.body.name;
  if (!name) {
    res.status(400).send("Name is required");
    return;
  }

  try {
    const docRef = await admin.firestore().collection("users").add({
      name: name
    });

    res.status(201).send({id: docRef.id, name});
  } catch (error) {
    console.error("Error adding user: ", error);
    res.status(500).send("Internal Server Error");
  }
});


export const updateUserIncrementId = v1.firestore
    .document("users/{userId}")
    .onCreate(async (snap, context) => {
      const usersRef = admin.firestore().collection("users");
      const snapshot = await usersRef.orderBy("increment_id", "desc").limit(1).get();

      let lastIncrementId = 0;
      if (!snapshot.empty) {
        lastIncrementId = snapshot.docs[0].data().increment_id || 0;
      }

      await snap.ref.update({
        increment_id: lastIncrementId + 1
      });
    });
