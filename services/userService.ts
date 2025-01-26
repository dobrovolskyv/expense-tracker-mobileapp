import { firestore } from "@/config/firebase";
import { UserDataType, ResponseType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";


export const updateUser = async (
    uid: string,
    updatedData: UserDataType
): Promise<ResponseType> => {
    try {
        const userRef = doc(firestore, "users", uid);  // Reference to the user document
        await updateDoc(userRef, updatedData);

        // fetch user & update user state
        return { success: true, msg: "User updated successfully" }
    } catch (error: any) {
        console.log('error updating user:', error);
        return { success: false, msg: error?.message }
    }
}