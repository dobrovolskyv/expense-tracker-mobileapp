import { WalletType, ResponseType } from "@/types";
import { uploadFileToCloudinary } from "./imageServices";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/config/firebase";

export const createOrUpdateWallet = async (
    walletData: Partial<WalletType>
): Promise<ResponseType> => {
    try {
        let walletToSave = { ...walletData }

        if (walletData.image && walletData?.image?.uri) {
            const imageUploadRes = await uploadFileToCloudinary(
                walletData?.image,
                "wallets"
            )
            if (!imageUploadRes.success) {
                return { success: false, msg: imageUploadRes.msg || 'Failed to update wallets' }
            }
            walletData.image = imageUploadRes.data
        }

        if (!walletData?.id) {
            //new waleet
            walletToSave.amount = 0
            walletToSave.totalIncome = 0
            walletToSave.totalExpenses = 0
            walletToSave.created = new Date()
        }

        const walletRef = walletData?.id
            ? doc(firestore, "walelts", walletData?.id)
            : doc(collection(firestore, "walelts"));

        await setDoc(walletRef, walletToSave, { merge: true });

        return { success: true, data: { ...walletToSave, id: walletRef.id } }
    } catch (error: any) {
        console.log('error creating wallet: ', error);
        return { success: false, msg: error?.message }
    }
}