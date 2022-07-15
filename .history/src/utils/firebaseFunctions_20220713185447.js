import { async } from "@firebase/util";
import {doc, getDocs, setDoc} from "firebase/firestore";
import { firestore } from "../firebase.config";

//saving new item
export const saveItem = async(data) => {
    await setDoc(doc(firestore,"drinkItems", `${Date.now()}`), data,{
        merge: true,
    });
};

//get all
export const getALlDrinkItems = async () => {
    const items = await getDocs (
        qe
    )
}