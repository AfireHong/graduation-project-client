import AsyncStorage from "@react-native-async-storage/async-storage";
import { MomentItem } from "@/components/MomentCard";

export const getStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const setStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

// likeMoment
// collectMoment
export const setMomentStorage = async (moment: MomentItem, key: string) => {
  try {
    const res = await getStorage(key);
    let list: MomentItem[] = [];
    if (res) {
      list = res;
    }
    list.push(moment);
    await setStorage(key, list);
  } catch (e) {}
};

export const removeMomentStorage = async (moment: MomentItem, key: string) => {
  try {
    const res = await getStorage(key);
    let list: MomentItem[] = [];
    if (res) {
      list = res;
      let index = -1;
      for (let i = 0; i < list.length; i++) {
        if (moment.id === list[i].id) {
          index = i;
          break;
        }
      }
      if (index > -1) {
        list.splice(index, 1);
      }
      await setStorage(key, list);
    }
  } catch (e) {}
};
export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // saving error
  }
};
